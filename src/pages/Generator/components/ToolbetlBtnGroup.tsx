import { FaDownload, FaMagic, FaUpload } from "react-icons/fa";
import { classNames } from "src/utils/classNames";

export default function ToolbetlBtnGroup() {
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
      <button className={classNames(commonCss, `border  rounded-l-lg`)}>
        <FaMagic />
      </button>
      <button className={classNames(commonCss, `border-y`)}>
        <FaDownload />
      </button>
      <button className={classNames(commonCss, `border rounded-r-lg`)}>
        <FaUpload />
      </button>
    </div>
  );
}
