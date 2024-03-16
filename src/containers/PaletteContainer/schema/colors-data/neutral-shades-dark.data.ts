import { StringIndex } from 'src/typings';
import { nl } from 'src/utils/native-lodash.ts';

export const neutralDarkShadesFrom = (tokens: StringIndex) => [
  {
    name: 'Scrim',
    tokenPath: 'md-sys-dark-scrim',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.scrim'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.scrim'),
    shadeName: 'N-1000',
  },
  {
    name: 'Shadow',
    tokenPath: 'md-sys-dark-shadow',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.shadow'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.shadow'),
    shadeName: 'N-1000',
  },
  {
    name: 'Surface-Dim',
    tokenPath: 'md-sys-surface-dim',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-dim'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-dim'),
    shadeName: 'N-940',
  },
  {
    name: 'Surf. Cntr. Lowest',
    tokenPath: 'md-sys-dark-surface-container-lowest',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-container-lowest'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-container-lowest'),
    shadeName: 'N-960',
  },
  {
    name: 'Surface',
    tokenPath: 'md-sys-dark-surface',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface'),
    shadeName: 'N-940',
  },
  {
    name: 'Surf. Cntr. Low',
    tokenPath: 'md-sys-dark-surface-container-low',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-container-low'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-container-low'),
    shadeName: 'N-900',
  },
  {
    name: 'Surf. Cntr.',
    tokenPath: 'md-sys-dark-surface-container',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-container'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-container'),
    shadeName: 'N-880',
  },
  {
    name: 'Surf. Cntr. High',
    tokenPath: 'md-sys-dark-surface-container-high',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-container-high'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-container-high'),
    shadeName: 'N-830',
  },
  {
    name: 'Surf. Cntr. Highest',
    tokenPath: 'md-sys-dark-surface-container-highest',
    bgColor: nl.get(tokens, 'colors.md.sys.dark.surface-container-highest'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.sys.dark.surface-container-highest'),
    shadeName: 'N-760',
  },
  {
    name: '',
    tokenPath: 'md-ref-pal-neutral600',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.neutral600'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.neutral600'),
    shadeName: 'N-600',
  },
  {
    name: '',
    tokenPath: 'md-ref-pal-neutral500',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.neutral500'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.neutral500'),
    shadeName: 'N-500',
  },
  {
    name: '',
    tokenPath: 'md-ref-pal-neutral400',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.neutral400'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.neutral10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.neutral400'),
    shadeName: 'N-400',
  },
];
