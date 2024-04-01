import fs from "fs";
import path from "path";
import hbs from "handlebars";
import { getRootRepoDir } from "scripts/esm-utils.ts";
import type { AnyObject } from "scripts/ts-utils.ts";

export function generateIndexHtml(env: AnyObject) {
  const data = {
    scriptEnvSuffix: env.NODE_ENV === "development" ? "development" : "production.min",
    BUILD_LEGACY: env.BUILD_LEGACY,
  };

  const tmplPath = path.join(getRootRepoDir(), "src/assets/index.hbs");
  const source = fs.readFileSync(tmplPath, "utf-8");

  const tmpl = hbs.compile(source);
  const html = tmpl(data);

  const destPath = path.join(getRootRepoDir(), "dist/");
  try {
    fs.mkdirSync(destPath, { recursive: true });
  } catch (e) {
    console.error(e);
  }
  fs.writeFileSync(destPath + "index.html", html, "utf8");
}
