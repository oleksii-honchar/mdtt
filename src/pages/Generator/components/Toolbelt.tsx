import {
  errorCoreColorAtom,
  neutralCoreColorAtom,
  neutralVariantCoreColorAtom,
  primaryCoreColorAtom,
  secondaryCoreColorAtom,
  tertiraryCoreColorAtom,
} from 'src/state/color-atoms';
import ThemeKeyColor from './ThemeKeyColor';
import ToolbetlBtnGroup from './ToolbeltBtnGroup';

export default function Toolbelt() {
  return (
    <div
      id="Toolbelt"
      className={`
          w-full 
          p-2 flex flex-row flex-grow justify-start items-center
        `}
    >
      <div
        className={`
          w-full flex flex-row justify-start items-center
        `}
      >
        Main colors
        <ThemeKeyColor name="primary" colorAtom={primaryCoreColorAtom} />
        <ThemeKeyColor name="secondary" colorAtom={secondaryCoreColorAtom} />
        <ThemeKeyColor name="tertiary" colorAtom={tertiraryCoreColorAtom} />
        <ThemeKeyColor name="error" colorAtom={errorCoreColorAtom} />
        <ThemeKeyColor name="neutral" colorAtom={neutralCoreColorAtom} />
        <ThemeKeyColor name="n. variant" colorAtom={neutralVariantCoreColorAtom} />
      </div>
      <ToolbetlBtnGroup />
    </div>
  );
}
