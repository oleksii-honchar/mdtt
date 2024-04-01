import { LoggerService } from '@ciklum/logan';
import {
  CorePalette,
  CorePaletteColors,
  Hct,
  Scheme,
  TonalPalette,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities';

import { mdTailwindThemeSchema } from 'src/theme/mdTailwindThemeSchema';
import type { AnyObject } from 'src/typings';

import { nl } from 'src/utils/native-lodash.ts';

export interface CoreThemeColors {
  'primary': string;
  'secondary'?: string;
  'tertiary'?: string;
  'neutral'?: string;
  'neutral-variant'?: string;
  'error'?: string;
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
  theme: MDTailwindThemeJson;
  logger: LoggerService;

  constructor(colors?: CoreThemeColors, themeJson?: object) {
    this.logger = new LoggerService();
    this.logger.setTitle('MDTailwindTheme');

    this.theme = <MDTailwindThemeJson>{};

    if (themeJson && Object.keys(themeJson).length > 0) {
      this.theme = themeJson as MDTailwindThemeJson;
      this.validateTheme();
      return;
    }

    // Create palette and scheme for primary color with rest of the colors inferred

    // Get random color if not present
    const primary = argbFromHex(colors?.primary || this.getRandomPrimaryColor());
    this.logger.debug(`Primary color: ${hexFromArgb(primary)}`);

    // Generate tmp palette to get neutral and neutral-variant
    const tmpPalette = CorePalette.of(primary);
    const tmpScheme = Scheme.lightFromCorePalette(tmpPalette);

    // Calculate accent colors
    const baseColor = Hct.fromInt(primary);

    // analogous color
    const secondaryColorGuess = Hct.from(
      (baseColor.hue + 30 * this.getRandomPlusMinus()) % 360,
      baseColor.chroma,
      baseColor.tone,
    ).toInt();

    // tetraidic color
    const tertiaryColorGuess = Hct.from(
      (baseColor.hue + 120 * this.getRandomPlusMinus()) % 360,
      baseColor.chroma,
      baseColor.tone,
    ).toInt();

    // reassuring that colors is set either by user or inferred using triadic rule
    const coreColors = <CoreThemeColors>{
      'primary': colors?.primary || hexFromArgb(primary),
      'secondary': colors?.secondary || hexFromArgb(secondaryColorGuess),
      'tertiary': colors?.tertiary || hexFromArgb(tertiaryColorGuess),
      'error': colors?.error || hexFromArgb(tmpScheme.error),
      'neutral': colors?.neutral || hexFromArgb(nl.get(tmpScheme, 'neutral')),
      'neutral-variant': (!!colors && colors['neutral-variant']) || hexFromArgb(nl.get(tmpScheme, 'neutralVariant')),
    };

    // Finally cast colors to argb
    const argbCoreColors = <CorePaletteColors>{
      primary: argbFromHex(coreColors.primary),
      secondary: argbFromHex(coreColors.secondary as string),
      tertiary: argbFromHex(coreColors.tertiary as string),
      error: argbFromHex(coreColors.error as string),
      neutral: argbFromHex(coreColors.neutral as string),
      neutralVariant: argbFromHex(coreColors['neutral-variant'] as string),
    };

    // Building palette and scheme with actual colors
    const corePalette = CorePalette.fromColors(argbCoreColors);
    const lightScheme = Scheme.lightFromCorePalette(corePalette);
    const darkScheme = Scheme.darkFromCorePalette(corePalette);

    this.composeTheme({ coreColors, corePalette, lightScheme, darkScheme });
    this.validateTheme();
  }

  private getRandomPlusMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomPrimaryColor(): string {
    const hct = Hct.from(this.getRandomInt(0, 360), 50, 56);
    return hexFromArgb(hct.toInt());
  }

  private composeTheme({
    coreColors,
    corePalette,
    lightScheme,
    darkScheme,
  }: {
    coreColors: CoreThemeColors;
    corePalette: CorePalette;
    lightScheme: Scheme;
    darkScheme: Scheme;
  }) {
    // grayscale colors if primary,sec,ter,err is black
    function grayscaleIt(argb: number) {
      if (!isBlack) return argb;

      const hct = Hct.fromInt(argb);
      hct.chroma = 0;
      return hct.toInt();
    }

    const isBlack = Object.values(coreColors).every((color) => color === '#000000');

    const coreColorsCodes: AnyObject = {
      'primary': 'a1',
      'secondary': 'a2',
      'tertiary': 'a3',
      'error': 'error',
      'neutral': 'n1',
      'neutral-variant': 'n2',
    };

    const lightSchemeJson = lightScheme.toJSON();
    const darkSchemeJson = darkScheme.toJSON();

    // utils to get tones for neutral and neutral-variant. idx = 0(light)-1000(dark)
    const n1Tone = (idx: number) => hexFromArgb(grayscaleIt(corePalette.n1.tone(100 - idx / 10)));
    const n2Tone = (idx: number) => hexFromArgb(grayscaleIt(corePalette.n2.tone(100 - idx / 10)));

    // edge-case: when only Primary color set and the rest is inferred neutral will be dark. Let's set them to light
    coreColors.neutral = n1Tone(40);
    coreColors['neutral-variant'] = n2Tone(40);

    this.theme = {
      colors: {
        md: {
          sys: {
            light: {},
            dark: {},
          },
          ref: {
            pal: {
              ...coreColors,
            },
          },
        },
      },
    };

    // converting sys-light semantic colors to hex
    Object.keys(lightSchemeJson).forEach((key) => {
      const argb = nl.get(lightSchemeJson, key) as number;
      const hex = hexFromArgb(grayscaleIt(argb));
      nl.set(this.theme, `colors.md.sys.light.${nl.camelToKebab(key)}`, hex);
    });

    // converting sys-dark semantic colors to hex
    Object.keys(darkSchemeJson).forEach((key) => {
      const argb = nl.get(darkSchemeJson, key) as number;
      const hex = hexFromArgb(grayscaleIt(argb));
      nl.set(this.theme, `colors.md.sys.dark.${nl.camelToKebab(key)}`, hex);
    });

    // there is no surface-levels in schema by default, let's add them manually
    nl.set(this.theme, `colors.md.sys.light.surface-container-highest`, n1Tone(100));
    nl.set(this.theme, `colors.md.sys.light.surface-container-high`, n1Tone(80));
    nl.set(this.theme, `colors.md.sys.light.surface-container`, n1Tone(60));
    nl.set(this.theme, `colors.md.sys.light.surface-container-low`, n1Tone(40));
    nl.set(this.theme, `colors.md.sys.light.surface-container-lowest`, n1Tone(0));
    nl.set(this.theme, `colors.md.sys.light.surface-dim`, n1Tone(130));
    nl.set(this.theme, `colors.md.sys.light.surface`, n1Tone(20));

    // there is no surface-levels in schema by default, let's add them manually
    nl.set(this.theme, `colors.md.sys.dark.surface-container-highest`, n1Tone(760));
    nl.set(this.theme, `colors.md.sys.dark.surface-container-high`, n1Tone(830));
    nl.set(this.theme, `colors.md.sys.dark.surface-container`, n1Tone(880));
    nl.set(this.theme, `colors.md.sys.dark.surface-container-low`, n1Tone(900));
    nl.set(this.theme, `colors.md.sys.dark.surface-container-lowest`, n1Tone(960));
    nl.set(this.theme, `colors.md.sys.dark.surface-dim`, n1Tone(940));
    nl.set(this.theme, `colors.md.sys.dark.surface`, n1Tone(940));

    // getting tones for core colors
    const themeColorShadeCodes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 20, 10];
    const schemeColorShadeCodes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99];

    // converting color shades to hex
    Object.keys(coreColorsCodes).forEach((key) => {
      // key=primary -> a1
      const tonalPalette = nl.get(corePalette, coreColorsCodes[key] as string) as TonalPalette;
      for (let idx = 0; idx < schemeColorShadeCodes.length; idx++) {
        const argb = tonalPalette.tone(schemeColorShadeCodes[idx]);
        const hex = hexFromArgb(grayscaleIt(argb));
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
