import type { AnyObject } from 'src/typings';
import { nl } from 'src/utils/native-lodash.ts';

export const tertiaryShadesFrom = (tokens: AnyObject) => [
  {
    tokenPath: 'md-ref-pal-tertiary900',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    shadeName: 'S-900',
  },
  {
    tokenPath: 'md-ref-pal-tertiary800',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary800'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary800'),
    shadeName: 'S-800',
  },
  {
    tokenPath: 'md-ref-pal-tertiary700',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary700'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary700'),
    shadeName: 'S-700',
  },
  {
    tokenPath: 'md-ref-pal-tertiary600',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary600'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary600'),
    shadeName: 'S-600',
  },
  {
    tokenPath: 'md-ref-pal-tertiary500',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary500'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary500'),
    shadeName: 'S-500',
  },
  {
    tokenPath: 'md-ref-pal-tertiary400',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary400'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary400'),
    shadeName: 'S-400',
  },
  {
    tokenPath: 'md-ref-pal-tertiary300',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary300'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary300'),
    shadeName: 'S-300',
  },
  {
    tokenPath: 'md-ref-pal-tertiary200',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary200'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary200'),
    shadeName: 'S-200',
  },
  {
    tokenPath: 'md-ref-pal-tertiary100',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary100'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary800'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary100'),
    shadeName: 'S-100',
  },
  {
    tokenPath: 'md-ref-pal-tertiary50',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary50'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary50'),
    shadeName: 'S-50',
  },
  {
    tokenPath: 'md-ref-pal-tertiary20',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary20'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary20'),
    shadeName: 'S-20',
  },
  {
    tokenPath: 'md-ref-pal-tertiary10',
    bgColor: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    textColor: nl.get(tokens, 'colors.md.ref.pal.tertiary900'),
    colorHash: nl.get(tokens, 'colors.md.ref.pal.tertiary10'),
    shadeName: 'S-10',
  },
];
