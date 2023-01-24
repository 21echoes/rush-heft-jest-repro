# rush-heft-jest-repro
reproducing a confusing rush, heft, and jest interaction

* This rush project contains two subprojects: A and B, where B depends on A.
* Both use heft and heft-web-rig
* Both build fine

But: B cannot pass tests due to the output format of A

```
FAIL (undefined) src/__tests__/index.test.ts (duration: 0.000s, 0 passed, 0 failed)
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /<>/rush-heft-jest-repro/libraries/a/lib/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export var helloWorld = function (name) {
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { helloWorld } from '@my-repo/a';
        | ^
      2 |
      3 | export const helloHelloWorld = (name = 'World'): string => {
      4 | 	return `Hello ${helloWorld(name)}!`;

      at Runtime.createScriptFromCode (../../common/temp/node_modules/.pnpm/jest-runtime@27.5.1/node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (src/index.ts:1:1)
```

