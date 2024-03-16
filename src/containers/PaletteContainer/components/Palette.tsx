import { Tab } from '@headlessui/react';
import PropTypes, { InferProps } from 'prop-types';

import { classNames } from 'src/utils/classNames.ts';
import PaletteSchema from './PaletteSchema.tsx';

Palette.propTypes = {
  mdTokens: PropTypes.object.isRequired,
};

export default function Palette(props: InferProps<typeof Palette.propTypes>) {
  const { mdTokens } = props;

  const commonTabCss = `
    flex items-center justify-center 
    p-2 w-20 rounded-lg

    border 
    hover:border-md-sys-light-outline-variant
    
    text-sm font-medium
    text-md-sys-light-primary 
    hover:text-md-sys-light-on-primary-container 
    hover:bg-md-sys-light-primary-container
    active:bg-md-ref-pal-primary200
    ui-selected:bg-md-sys-light-background
    ui-selected:text-md-sys-light-on-background
    focus:outline-none
  `;

  return (
    <Tab.Group>
      <Tab.List
        className={`
        w-full 
        flex flex-row flex-grow justify-center items-center
        bg-md-sys-light-surface-container
        rounded-lg
        mb-2 p-1 space-x-2
      `}
      >
        <Tab className={classNames(commonTabCss)}>Light</Tab>
        <Tab className={classNames(commonTabCss)}>Dark</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <PaletteSchema mdTokens={mdTokens} light />
        </Tab.Panel>
        <Tab.Panel>
          <PaletteSchema mdTokens={mdTokens} dark />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
