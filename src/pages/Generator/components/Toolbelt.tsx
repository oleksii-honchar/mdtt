import ThemeKeyColor from "./ThemeKeyColor";
import ToolbetlBtnGroup from "./ToolbetlBtnGroup";

export default function Toolbelt() {
  return (
    <div
      id="Toolbelt"
      className={`
          w-full 
          p-2 flex flex-row flex-grow justify-start items-center
          bg-md-sys-light-surface-container-low
          rounded-lg
        `}
    >
      <div
        className={`
          w-full flex flex-row justify-start items-center
        `}
      >
        Main colors
        <ThemeKeyColor name="primary" colorHash="#23B7DC" />
        <ThemeKeyColor name="secondary" colorHash="#B7DC23" />
        <ThemeKeyColor name="tertiary" colorHash="#B7DC23" />
        <ThemeKeyColor name="error" colorHash="#BA1A1A" />
        <ThemeKeyColor name="neutral" colorHash="#A8A29E" />
        <ThemeKeyColor name="n. variant" colorHash="#E5E7EB" />
      </div>
      <ToolbetlBtnGroup />
    </div>
  );
}
