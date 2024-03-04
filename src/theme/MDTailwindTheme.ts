import { CorePalette, CorePaletteColors, Scheme, argbFromHex, hexFromArgb } from "@material/material-color-utilities";

import { mdTailwindThemeSchema } from "src/theme/mdTailwindThemeSchema";

import { nl } from "src/utils/native-lodash.ts";

interface CoreThemeColors {
  primary: string;
  secondary?: string;
  tertiary?: string;
  neutral?: string;
  "neutral-variant"?: string;
  error?: string;
}

export interface MDTailwindThemeJson {
  colors: {
    md: {
      sys: {
        light: object;
        dark?: object;
      };
      ref: {
        pal: object;
      };
    };
  };
}

export class MDTailwindTheme {
  coreColors: CoreThemeColors;
  corePalette: CorePalette;
  scheme: Scheme;
  theme: MDTailwindThemeJson;

  constructor(colors: CoreThemeColors) {
    this.coreColors = colors;

    const argbCoreColors = <CorePaletteColors>{
      primary: argbFromHex(this.coreColors.primary),
      secondary: argbFromHex(this.coreColors.secondary ?? "fff"),
      error: argbFromHex(this.coreColors.error ?? "fff"),
      neutral: argbFromHex(this.coreColors.neutral ?? "fff"),
      neutralVariant: argbFromHex(this.coreColors["neutral-variant"] ?? "fff"),
    };

    this.corePalette = CorePalette.fromColors(argbCoreColors);

    this.scheme = Scheme.lightFromCorePalette(this.corePalette);
    this.theme = {
      colors: {
        md: {
          sys: {
            light: {},
          },
          ref: {
            pal: {
              ...this.coreColors,
            },
          },
        },
      },
    };

    this.composeTheme();
    this.validateTheme();
  }

  private composeTheme() {
    const coreColorsCodes = {
      "primary": "a1",
      "secondary": "a2",
      "error": "error",
      "neutral": "n1",
      "neutral-variant": "n2",
    };

    const schemeJson = this.scheme.toJSON();

    // converting sys-light semantic colors to hex
    Object.keys(schemeJson).forEach((key) => {
      const argb = nl.get(schemeJson, key) as number;
      const hex = hexFromArgb(argb);
      nl.set(this.theme, `colors.md.sys.light.${nl.camelToKebab(key)}`, hex);
    });

    // there is no surface-levels in schema by default, let's add them manually
    const n1Tone = (idx: number) => hexFromArgb(this.corePalette.n1.tone(100 - idx / 10));

    nl.set(this.theme, `colors.md.sys.light.surface-container-highest`, n1Tone(100));
    nl.set(this.theme, `colors.md.sys.light.surface-container-high`, n1Tone(80));
    nl.set(this.theme, `colors.md.sys.light.surface-container`, n1Tone(60));
    nl.set(this.theme, `colors.md.sys.light.surface-container-low`, n1Tone(40));
    nl.set(this.theme, `colors.md.sys.light.surface-container-lowest`, n1Tone(0));
    nl.set(this.theme, `colors.md.sys.light.surface-dim`, n1Tone(130));
    nl.set(this.theme, `colors.md.sys.light.surface`, n1Tone(20));

    // getting tones for core colors
    const themeColorShadeCodes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 20, 10];
    const schemeColorShadeCodes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99];

    // converting color shades to hex
    Object.keys(coreColorsCodes).forEach((key) => {
      // key=primary -> a1
      const tonalPalette = this.corePalette[coreColorsCodes[key]];
      for (let idx = 0; idx < schemeColorShadeCodes.length; idx++) {
        const argb = tonalPalette.tone(schemeColorShadeCodes[idx]);
        const hex = hexFromArgb(argb);
        nl.set(this.theme, `colors.md.ref.pal.${nl.camelToKebab(key)}${themeColorShadeCodes[idx]}`, hex);
      }
    });
  }

  private validateTheme() {
    const res = mdTailwindThemeSchema.validate(this.theme);
    if (res.error) {
      throw new Error(`Validation error: ${res.error.message}`);
    }
  }

  toJson(): MDTailwindThemeJson {
    return this.theme;
  }
}
