import joi from 'joi';
import type { AnyObject } from 'src/typings/index.d.ts';

function getRefPalDefs(colorName: string): AnyObject {
  const colorShadeCodes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 20, 10];
  const data: AnyObject = {};
  colorShadeCodes.forEach((code) => (data[`${colorName}${code}`] = joi.string()));
  return data;
}

const sysBaseSchema = joi.object({
  'primary': joi.string().required(),
  'on-primary': joi.string().required(),
  'primary-container': joi.string().required(),
  'on-primary-container': joi.string().required(),
  'primary-fixed': joi.string(),
  'on-primary-fixed': joi.string(),
  'primary-fixed-dim': joi.string(),
  'on-primary-fixed-variant': joi.string(),
  'secondary': joi.string().required(),
  'on-secondary': joi.string().required(),
  'secondary-container': joi.string().required(),
  'on-secondary-container': joi.string().required(),
  'secondary-fixed': joi.string(),
  'on-secondary-fixed': joi.string(),
  'secondary-fixed-dim': joi.string(),
  'on-secondary-fixed-variant': joi.string(),
  'tertiary': joi.string(),
  'on-tertiary': joi.string(),
  'tertiary-container': joi.string(),
  'on-tertiary-container': joi.string(),
  'tertiary-fixed': joi.string(),
  'on-tertiary-fixed': joi.string(),
  'tertiary-fixed-dim': joi.string(),
  'on-tertiary-fixed-variant': joi.string(),
  'error': joi.string().required(),
  'on-error': joi.string().required(),
  'error-container': joi.string().required(),
  'on-error-container': joi.string().required(),
  'outline': joi.string().required(),
  'background': joi.string().required(),
  'on-background': joi.string().required(),
  'surface': joi.string().required(),
  'on-surface': joi.string().required(),
  'surface-variant': joi.string().required(),
  'on-surface-variant': joi.string().required(),
  'inverse-surface': joi.string().required(),
  'inverse-on-surface': joi.string().required(),
  'inverse-primary': joi.string().required(),
  'shadow': joi.string().required(),
  'surface-tint': joi.string(),
  'outline-variant': joi.string().required(),
  'scrim': joi.string().required(),
  'surface-container-highest': joi.string().required(),
  'surface-container-high': joi.string().required(),
  'surface-container': joi.string().required(),
  'surface-container-low': joi.string().required(),
  'surface-container-lowest': joi.string().required(),
  'surface-bright': joi.string(),
  'surface-dim': joi.string().required(),
});

export const mdTailwindThemeSchema = joi.object({
  colors: joi.object({
    md: joi.object({
      sys: joi.object({
        light: sysBaseSchema,
        dark: sysBaseSchema,
      }),
      ref: joi.object({
        pal: joi.object({
          'primary': joi.string().required(),
          'secondary': joi.string(),
          'tertiary': joi.string().allow(''),
          'error': joi.string(),
          'neutral': joi.string().required(),
          'neutral-variant': joi.string(),
          ...getRefPalDefs('primary'),
          ...getRefPalDefs('secondary'),
          ...getRefPalDefs('tertiary'),
          ...getRefPalDefs('error'),
          ...getRefPalDefs('neutral'),
          ...getRefPalDefs('neutral-variant'),
        }),
      }),
    }),
  }),
});
