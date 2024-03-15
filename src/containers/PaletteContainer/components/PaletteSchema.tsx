import PropTypes, { InferProps } from "prop-types";

import { ColorShade, KeyColor, PaletteColorCol } from "./templates.tsx";

import { errorShadesFrom } from "../schema/colors-data/error-shades.data.ts";
import { keyColorsFrom } from "../schema/colors-data/key-colors.data.ts";
import { neutralShadesFrom } from "../schema/colors-data/neutral-shades.data.ts";
import { neutralVShadesFrom } from "../schema/colors-data/neutral-variant-shades.data.ts";
import { primaryShadesFrom } from "../schema/colors-data/primary-shades.data.ts";
import { secondaryShadesFrom } from "../schema/colors-data/secondary-shades.data.ts";
import { sysLightColorsFrom } from "../schema/colors-data/sys-light-colors.data.ts";
import { sysDarkColorsFrom } from "../schema/colors-data/sys-dark-colors.data.ts";
import { tertiaryShadesFrom } from "../schema/colors-data/tertiary-shades.data.ts";

PaletteSchema.propTypes = {
  mdTokens: PropTypes.object.isRequired,
  light: PropTypes.bool,
  dark: PropTypes.bool
};

export default function PaletteSchema(props: InferProps<typeof PaletteSchema.propTypes>) {
  const { mdTokens, light, dark } = props;

  const sysColorsFrom = light && !dark ? sysLightColorsFrom : sysDarkColorsFrom;

  return (
    <section className="flex flex-col justify-center">
      <section className="flex flex-row flex-wrap">
        <section id="colors" className="flex flex-wrap gap-4 py-0 w-full">
          {/* Key colors row */}
          <div className="flex items-stretch h-12 w-full gap-2 justify-between">
            {keyColorsFrom(mdTokens).map((color) => (
              <KeyColor key={color.name} {...color} />
            ))}
          </div>

          {/* Functional colors row */}
          <div className="flex items-stretch w-full gap-2 justify-between">
            {sysColorsFrom(mdTokens).map((colorCol, idx) => (
              <PaletteColorCol key={`pal-col-${idx}`} colorCol={colorCol} />
            ))}
          </div>

          {/* Shades container */}
          <div className="flex items-stretch w-full gap-2 justify-between">
            <div className="flex flex-col w-full max-w-[20%]">
              {primaryShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`primary-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
            <div className="flex flex-col  w-full max-w-[20%]">
              {secondaryShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`secondary-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
            <div className="flex flex-col  w-full max-w-[20%]">
              {tertiaryShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`tertiary-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
            <div className="flex flex-col  w-full max-w-[20%]">
              {errorShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`error-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
            <div className="flex flex-col  w-full max-w-[20%]">
              {neutralShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`neutral-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
            <div className="flex flex-col w-full max-w-[20%]">
              {neutralVShadesFrom(mdTokens).map((shadeColor, idx) => (
                <ColorShade key={`neutral-v-shade-col-${idx}`} {...shadeColor} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}