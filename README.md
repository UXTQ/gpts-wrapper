# gpts-wrapper = [gpt-3](https://openai.com/blog/openai-api/) + [typescript](https://www.typescriptlang.org/)\n\nA TypeScript wrapper for the GPT-3 API that enables developers to effectively interact with the GPT-3 API.\n\n---\n\n## example\n\n```ts\nimport { GpTs } from 'gpts-wrapper';\nconst brain = new GpTs(OPENAI_APIKEY); // dont publish your api key!\n\nconst thoughts = brain.completion({\n\tengineId: 'ada',\n\tprompt: 'whats for lunch?',\n});\n\nconsole.log(thoughts.choices[0].text); // "maybe a banana?"\n```\n\nalso see [demo/index.ts](https://github.com/UXTQ/gpts-wrapper/blob/main/demo/index.ts) (need to insert your api key to run)\n\n---\n\n## install\n\n### [npm](https://www.npmjs.com/package/gpts)\n\n`npm i gpts-wrapper`\n\n### [github](https://github.com/UXTQ/gpts-wrapper)\n\n`package.json`\n\n```json\n\t"dependencies": {\n\t\t"gpts-wrapper": "UXTQ/gpts-wrapper",\n\t\t...\n\t},\n```\n\n---\n\n## features\n\n-   engines\n    -   list ✅\n    -   retreive ✅\n-   completions\n    -   create ✅\n    -   stream ⚠️ (TODO)\n-   searches\n    -   create ✅\n-   classifications\n    -   create ✅\n-   answers\n    -   create ✅\n-   files\n    -   list ✅\n    -   upload ✅ (server-side only)\n    -   retrieve ✅\n    -   delete ✅\n-   embeddings\n    -   create ✅\n-   fine-tunes\n    -   prepare dataset ⚠️ (TODO)\n    -   upload dataset ⚠️ (TODO)\n    -   check upload results ⚠️ (TODO)\n\n---\n\n## notes\n\n### general\n\n-   uses openai's REST api\n-   for the [/classifications](https://beta.openai.com/docs/api-reference/classifications/create) and [/answers](https://beta.openai.com/docs/api-reference/answers/create) endpoints, openai seems to switch the syntax from `engineId` -> `model` so if you specify both in the `options` argument, `options.model` takes precedence\n\n### client-side use\n\n-   this library works client + server side using [axios](https://github.com/axios/axios) for http requests\n-   DO NOT share your api key in public client-side frontend code\n-   one way to hide your openai api key for client-side use is by hosting an api wrapper endpoint that enforces your own authentication, then updating the origin this library looks to use like the below.\n\napi wrapper example:\n\n```ts\nimport { GpTs } from 'gpts-wrapper';\n/*\n    gives your api wrapper authorization like this:\n        headers: {\n