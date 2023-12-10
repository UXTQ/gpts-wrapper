# gpts-wrapper = [gpt-3](https://openai.com/blog/openai-api/) + [typescript](https://www.typescriptlang.org/)\n\nA TypeScript wrapper for the GPT-3 API that enables developers to effectively interact with the GPT-3 API.\n\n---\n\n## example\n\n```ts\nimport { GpTs } from 'gpts-wrapper';\nconst brain = new GpTs(OPENAI_APIKEY); // dont publish your api key!\n\nconst thoughts = brain.completion({\n\tengineId: 'ada',\n\tprompt: 'whats for lunch?',\n});\n\nconsole.log(thoughts.choices[0].text); // "maybe a banana?"\n```\n\nalso see [demo/index.ts](https://github.com/UXTQ/gpts-wrapper/blob/main/demo/index.ts) (need to insert your api key to run)\n\n---\n\n## install\n\n### [npm](https://www.npmjs.com/package/gpts)\n\n`npm i gpts-wrapper`\n\n### [github](https://github.com/UXTQ/gpts-wrapper)\n\n`package.json`\n\n```json\n\t"dependencies": {\n\t\t"gpts-wrapper": "UXTQ/gpts-wrapper",\n\t\t...\n\t},\n```\n\n---\n\n## features\n\n-   engines\n    -   list ✅\n    -   retreive ✅\n-   completions\n    -   create ✅\n    -   s