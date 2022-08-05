import vue from 'rollup-plugin-vue'
import ts from 'rollup-plugin-typescript2'
import css from "rollup-plugin-import-css";
import WindiCSS from "rollup-plugin-windicss";
const pkg = require("./package.json");

export default {
  input: `src/index.ts`,
  output: [
    {
      format: "esm",
      file: pkg.main,
    },
  ],
  external: ["vue"],
  plugins: [
    ts({
      check: true,
      //tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      //cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
      tsconfigOverride: {
        compilerOptions: {
          //sourceMap: output.sourcemap,
          declaration: true,
          declarationMap: true,
        },
      },
      module: "es2015",
    }),
    ...WindiCSS(),
    css(),
    vue(),
  ],
};
