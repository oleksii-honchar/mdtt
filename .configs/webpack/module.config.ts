import path from "path";
import { getRootRepoDir } from "scripts/esm-utils.ts";
import { blablo } from "blablo";
import type { AnyObject } from "src/typings/index.d.ts";

const logHeader = "[webpack:config:snippet]".cyan;
blablo.log(logHeader, "loading", "'Module'".white.bold).finish();

export const moduleConfig = (env: any = {}) => {
  let tsLoaderCfg: AnyObject = {
    test: /\.([cm]?ts|tsx)$/,
    exclude: [/\.(spec|e2e|d)\.[tj]sx?$/],
  };
  const tsConfigFilePath = path.join(getRootRepoDir(), `./.configs/tsconfig.${env.TS_TARGET}.json`);

  switch (env.TS_LOADER) {
    case "esbuild":
      tsLoaderCfg = {
        ...tsLoaderCfg,
        loader: "esbuild-loader",
        options: {
          tsconfig: tsConfigFilePath,
        },
      };
      break;
    case "ts-loader":
      tsLoaderCfg = {
        ...tsLoaderCfg,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: tsConfigFilePath,
        },
      };
      break;
  }

  blablo.cleanLog(logHeader, "'Module'".white.bold, "❱", `using "${env.TS_LOADER.white.bold}" loader`);
  return {
    module: {
      rules: [
        {
          enforce: "pre",
          test: tsLoaderCfg.test,
          use: "source-map-loader",
        },
        { ...tsLoaderCfg },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/fonts/",
            },
          },
        },
        {
          test: /\.(jpe?g|png|svg|gif|cur)$/,
          exclude: /favicons/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/images/",
            },
          },
        },
        {
          // https://www.npmjs.com/package/svg-inline-loader
          // should be called explicitly on svg filesin tsx files
          test: /\.svg/,
          include: [/assets\/favicons/, /assets\/images/],
          use: [
            {
              loader: "svg-inline-loader",
              options: {
                removeSVGTagAttrs: false,
              },
            },
          ],
        },
      ],
      noParse: [/\.(spec|e2e|d)\.[tj]sx?$/, /LICENSE/, /README.md/],
    },
  };
};
