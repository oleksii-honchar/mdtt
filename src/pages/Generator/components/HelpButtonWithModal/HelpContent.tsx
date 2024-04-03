import { FaDownload, FaMagic, FaUpload } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

export function HelpContent() {
  return (
    <div className="px-4 py-3 text-base">
      <ul className="list-decimal">
        <li>
          Play around with random theme colors by using generate button <FaMagic className="inline-block ml-1" />
          <p className="text-md-sys-light-on-background/60 text-sm">
            Well, true random in only Primary color when not set. Secondary is defined by Primary as
            &quot;Analogous&quot;, and Tertiary as &quot;Tetraidic&quot;. Neutral and N.Variant defined by
            &quot;Material 3&quot; color utils logic.
          </p>
        </li>
        <li>Define your own colors and infer the rest.</li>
        <li>
          Clear presets whenever you want it with <FaRegTrashCan className="inline-block ml-1" />
          <p className="text-md-sys-light-on-background/60 text-sm">MDTT default greyscale theme will be applied.</p>
        </li>
        <li>
          Download current theme JSON with <FaDownload className="inline-block ml-1" />
          <p className="text-md-sys-light-on-background/60 text-sm">
            Theme JSON has TailwinCSS color shading codes(i.e. &quot;900&quot; is dark, and &quot;50&quot; is light)
            instead of default &quot;Material3&quot; intensity based codes (&quot;0&quot; - dark, &quot;100&quot; -
            light)
          </p>
        </li>
        <li>
          Or upload to MDTT previously generated theme JSON with <FaUpload className="inline-block ml-1" />
        </li>
        <li>
          Once you&apos;ve completed theme generation and added JSON to your TailwindCSS config, you can utilize MDTT to
          assist you with token paths. This is quite simple - all you need to do is click on any color, and its token
          path will be directly copied to your clipboard.
        </li>
      </ul>
      <br />
      <p>Enjoy!</p>
    </div>
  );
}
