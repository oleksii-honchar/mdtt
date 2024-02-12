# mdtt

Material Design Tailwind Theme generator

## How to run locally

- `make install-tools` - Install optional tools: `jq`, `ncu`, `markdown-toc`
- `npm run launch:loc` - Run development server with types watch
- `npm run build` - Build `prod` files
- `npm run build:loc` - Build `development`/`local` files
- `make build-docker` - Build [`tuiteraz/jaba-static`](https://github.com/oleksii-honchar/jaba) based docker to serve `/dist` files
- `make up-docker` - Start `jaba` container on the `SERVE_PORT` for `statics` testing
- `make down-docker` - Start `jaba` container

Also one can check `Makefile` for more details on automation commands.

## How to use

- `npm run launch:loc`

## Troubleshooting

- Root `tsconfig.json` used for IDE. `.configs/tsconfig.2022.json` for build time by Webpack. So they partially overlaps.

## TODO

- resolve typecheck errors
- switch to `shebang` routes
- for MD opacity option use `rgba()`` instead of only color code
