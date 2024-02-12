import { FaCopyright } from "react-icons/fa";
import moment from "moment";

export function Footer() {
  return (
    <div
      id="Footer"
      className={`
        h-12 w-full
      `}
    >
      <div className="w-full h-full">
        <div
          className={`
          relative
          mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-5xl justify-center  flex h-full px-2
          text-md-sys-on-background text-sm
        `}
        >
          <span className={`flex justify-center gap-2 items-center`}>
            <FaCopyright className={``} /> {moment().format("YYYY")} mdtex
          </span>
          <span
            className={`
              gap-2 absolute bottom-0 right-0
              text-[10px] text-md-sys-on-background
            `}
          >
            v{process.env.BUILD_VERSION}
          </span>
        </div>
      </div>
    </div>
  );
}
