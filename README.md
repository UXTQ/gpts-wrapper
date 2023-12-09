# gpts-wrapper = [gpt-3](https://openai.com/blog/openai-api/) + [typescript](https://www.typescriptlang.org/)\n\nA TypeScript wrapper for the GPT-3 API that enables developers to effectively interact with the GPT-3 API.\n\n---\n\n## example\n\n```ts\nimport { GpTs } from 'gpts-wrapper';\nconst brain = new GpTs(OPENAI_APIKEY); // dont publish your api key!\n\nconst thoughts = brain.completion({\n\tengineId: 'ada',\n\tprompt: 'whats for lunch?',\n