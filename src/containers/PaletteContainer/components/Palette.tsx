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
    flex flex-grow items-center justify-center 
    p-2

    border-md-sys-light-outline-variant
    
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
        flex flex-row flex-grow justify-start items-center
        bg-md-sys-light-surface-container-low
        rounded-lg
        mb-2
      `}
      >
        <Tab
          className={classNames(
            commonTabCss,
            `
              border  rounded-l-lg border-y
            `,
          )}
        >
          Light
        </Tab>
        <Tab className={classNames(commonTabCss, 'border border-l-0  rounded-r-lg')}>Dark</Tab>
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
