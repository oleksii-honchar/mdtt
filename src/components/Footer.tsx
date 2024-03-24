import moment from 'moment';
import { FaCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div
      id="Footer"
      className={`
        h-12 w-full mt-4
        backdrop-blur-sm 
        bg-md-sys-light-surface-container-lowest
      `}
    >
      <div className="w-full h-full">
        <div
          className={`
          relative
          mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-6xl 
          justify-center  flex h-full px-2
          text-md-sys-on-background text-sm
        `}
        >
          <span className={`flex justify-center gap-2 items-center`}>
            <FaCopyright className={``} /> {moment().format('YYYY')} MDTT, Oleksíi Honchar
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
