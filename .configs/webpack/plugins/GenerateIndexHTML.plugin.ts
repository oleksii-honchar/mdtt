import webpack from "webpack";

import colors from "colors";
import { generateIndexHtml } from "../libs/generateIndexHtml.ts";
import { blablo } from "blablo";
import type { AnyObject } from "scripts/ts-utils.ts";

const { Compilation, sources } = webpack;

colors.enable();
export default class GenerateIndexHTML {
  env: AnyObject;
  
  constructor(env: AnyObject) {
    this.env = env;
  }
  apply(compiler: any) {
    compiler.hooks.thisCompilation.tap("Replace", (compilation: any) => {
      compilation.hooks.processAssets.tap(
        {
          name: "Replace",
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
        },
        () => {
          blablo.log(
            "[GenerateIndexHTML:plugin]".cyan,
            "processing asset",
            "index.hbs".green.bold,
            " ❱",
            "dist/index.html".green.bold,
          );
          generateIndexHtml(this.env);
          blablo.finish();
        },
      );
    });
  }
}
