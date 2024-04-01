import type { AnyObject } from 'src/typings';
import { nl } from 'src/utils/native-lodash.ts';

export const sysDarkColorsFrom = (tokens: AnyObject) => [
  [
    [
      {
        name: 'Primary',
        tokenPath: 'md-sys-dark-primary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.primary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-primary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.primary'),
        shadeName: 'P-200',
      },
      {
        name: 'On Primary',
        tokenPath: 'md-sys-dark-on-primary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-primary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.primary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-primary'),
        shadeName: 'P-800',
      },
    ],
    [
      {
        name: 'Primary Container',
        tokenPath: 'md-sys-dark-primary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.primary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-primary-container'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.primary-container'),
        shadeName: 'P-700',
      },
      {
        name: 'On Primary Container',
        tokenPath: 'md-sys-dark-on-primary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-primary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-primary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-primary-container'),
        shadeName: 'P-100',
      },
    ],
  ],
  [
    [
      {
        name: 'Secondary',
        tokenPath: 'md-sys-dark-secondary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.secondary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-secondary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.secondary'),
        shadeName: 'S-200',
      },
      {
        name: 'On Secondary',
        tokenPath: 'md-sys-dark-on-secondary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-secondary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.secondary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-secondary'),
        shadeName: 'S-800',
      },
    ],
    [
      {
        name: 'Secondary Container',
        tokenPath: 'md-sys-dark-secondary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.secondary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-secondary-container'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.secondary-container'),
        shadeName: 'S-700',
      },
      {
        name: 'On Secondary Container',
        tokenPath: 'md-sys-dark-on-secondary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-secondary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-secondary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-secondary-container'),
        shadeName: 'S-100',
      },
    ],
  ],
  [
    [
      {
        name: 'Tertiary',
        tokenPath: 'md-sys-dark-tertiary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.tertiary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-tertiary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.tertiary'),
        shadeName: 'S-200',
      },
      {
        name: 'On tertiary',
        tokenPath: 'md-sys-dark-on-tertiary',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-tertiary'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.tertiary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-tertiary'),
        shadeName: 'S-800',
      },
    ],
    [
      {
        name: 'Tertiary Container',
        tokenPath: 'md-sys-dark-tertiary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.tertiary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-tertiary-container'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.tertiary-container'),
        shadeName: 'S-700',
      },
      {
        name: 'On Tertiary Container',
        tokenPath: 'md-sys-dark-on-tertiary-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-tertiary-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-tertiary'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-tertiary-container'),
        shadeName: 'S-100',
      },
    ],
  ],
  [
    [
      {
        name: 'Error',
        tokenPath: 'md-sys-dark-error',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.error'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-error'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.error'),
        shadeName: 'Error-200',
      },
      {
        name: 'On Error',
        tokenPath: 'md-sys-dark-on-error',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-error'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.error'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-error'),
        shadeName: 'Error-800',
      },
    ],
    [
      {
        name: 'Error Container',
        tokenPath: 'md-sys-dark-error-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.error-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-error-container'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.error-container'),
        shadeName: 'Error-700',
      },
      {
        name: 'On Error Container',
        tokenPath: 'md-sys-dark-on-error-container',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-error-container'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-error'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-error-container'),
        shadeName: 'P-100',
      },
    ],
  ],
  [
    [
      {
        name: 'Background',
        tokenPath: 'md-sys-dark-background',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.background'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-background'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.background'),
        shadeName: 'N-900',
      },
      {
        name: 'On Background',
        tokenPath: 'md-sys-dark-on-background',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-background'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.background'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-background'),
        shadeName: 'N-100',
      },
    ],
    [
      {
        name: 'Surface',
        tokenPath: 'md-sys-dark-surface',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.surface'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-surface'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.surface'),
        shadeName: 'N-940',
      },
      {
        name: 'On Surface',
        tokenPath: 'md-sys-dark-on-surface',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-surface'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.surface'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-surface'),
        shadeName: 'N-100',
      },
    ],
  ],
  [
    [
      {
        name: 'Outline',
        tokenPath: 'md-sys-dark-outline',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.outline'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.background'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.outline'),
        shadeName: 'NV-100',
      },
      {
        name: 'Outline Variant',
        tokenPath: 'md-sys-dark-outline-variant',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.outline-variant'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-surface'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.outline-variant'),
        shadeName: 'NV-700',
      },
    ],
    [
      {
        name: 'Surface Variant',
        tokenPath: 'md-sys-dark-surface-variant',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-variant'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.on-surface-variant'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-variant'),
        shadeName: 'NV-940',
      },
      {
        name: 'On Surface Variant',
        tokenPath: 'md-sys-dark-on-surface-variant',
        bgColor: nl.get(tokens, 'colors.md.sys.dark.on-surface-variant'),
        textColor: nl.get(tokens, 'colors.md.sys.dark.surface'),
        colorHash: nl.get(tokens, 'colors.md.sys.dark.on-surface-variant'),
        shadeName: 'NV-100',
      },
    ],
  ],
];
