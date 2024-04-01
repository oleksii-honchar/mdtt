import path from "path";
import { createRequire } from "module";

// import { purgeCssConfig } from "./purgecss.config.ts";
import { blablo } from "../../scripts/blablo.ts";
import type { AnyObject } from "../../src/typings/index.d.ts";
import { getRootRepoDir } from "../../scripts/esm-utils.ts";

const require = createRequire(import.meta.url);
const logHeader = "[post-css:config]".cyan;
blablo.log(logHeader, "loading config").finish();

export default function postCssConfig(params: { file: any; options: AnyObject; env: any }) {
  const tailwindConfigPath = path.join(getRootRepoDir(), "tailwind.config.cjs");
  const tailwind = require("tailwindcss")(require(tailwindConfigPath));

  const mdlPostCssImport = require("postcss-import");
  const postCssImport = mdlPostCssImport({ root: path.dirname(params?.file) });

  const mdl = require("postcss-preset-env");
  const postCssPresetEnv = mdl({
    stage: 3,
    features: {
      "nesting-rules": true,
    },
  });

  let cssNanoCfg: any = null;
  if (params.env === "production") {
    // const mdlCssNano = require("cssnano");
    // cssNanoCfg = mdlCssNano({
    //   preset: [
    //     "default",
    //     {
    //       discardComments: {
    //         removeAll: true,
    //       },
    //     },
    //   ],
    // });
    cssNanoCfg = require("postcss-discard-comments");
  } else {
    cssNanoCfg = require("postcss-discard-comments");
  }

  return {
    plugins: [
      postCssImport,
      "tailwindcss/nesting",
      tailwind,
      postCssPresetEnv,
      cssNanoCfg,
      // params.env === "production" ? purgeCssConfig : false, - still misses TailwindCSS
    ],
  };
}
