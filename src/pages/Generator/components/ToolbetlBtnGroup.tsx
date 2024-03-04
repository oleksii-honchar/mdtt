import { LoggerService } from "@ciklum/logan";
import { useAtom } from "jotai";
import moment from "moment";
import { FaDownload, FaMagic, FaUpload } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

import { classNames } from "src/utils/classNames";

import { coreColorsAtom, themeAtom } from "src/state/atoms";
import { MDTailwindTheme, MDTailwindThemeJson } from "src/theme/MDTailwindTheme";

const logger = new LoggerService();
logger.setTitle("ToolbetlBtnGroup");

export default function ToolbetlBtnGroup() {
  const [coreColors, resetCoreColors] = useAtom(coreColorsAtom);
  const [theme, setTheme] = useAtom(themeAtom);

  function generateAndApplyTheme() {
    const theme = new MDTailwindTheme(coreColors);

    setTheme(theme.toJson());
  }

  function getFullName() {
    const timestamp = moment().format("YYYYMMDDhhmm");
    return `md-tw-theme-${timestamp}.json`;
  }

  function downloadTheme(themeJson: object) {
    const filename = getFullName();
    const element = document.createElement("a");
    const content = JSON.stringify(themeJson, null, 2);

    element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(content));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    const msg = "Theme downloaded successfully!";
    logger.debug(msg);
    toast.success(msg);
  }

  function deleteColorsAndTheme() {
    resetCoreColors(null);
    setTheme({} as MDTailwindThemeJson);
    logger.debug("Colors and theme deleted");
  }

  const commonCss = `
    text-md-sys-light-primary hover:text-md-sys-light-on-primary-container 
    hover:bg-md-sys-light-primary-container
    border-md-sys-light-outline-variant
    active:bg-md-ref-pal-primary200
    text-sm font-medium px-4 py-2
    inline-flex space-x-1 items-center
  `;

  return (
    <div className="inline-flex items-center rounded-md shadow-sm">
      <button className={classNames(commonCss, `border  rounded-l-lg`)} onClick={() => generateAndApplyTheme()}>
        <FaMagic />
      </button>
      <button className={classNames(commonCss, `border-y border-r`)} onClick={() => deleteColorsAndTheme()}>
        <FaRegTrashCan />
      </button>
      <button
        className={classNames(commonCss, `border-y`)}
        onClick={() => {
          downloadTheme(theme);
        }}
      >
        <FaDownload />
      </button>
      <button className={classNames(commonCss, `border rounded-r-lg`)}>
        <FaUpload />
      </button>
    </div>
  );
}
