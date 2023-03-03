/*
	demo:
	install `ts-node` and run `ts-node index.ts` or built this file and run js w node
*/

import { GpTs } from '../src';

import * as fs from 'fs'; // needs "@types/node": "^14.14.37",
import * as path from 'path';

(async () => {
	const openai_apiKey = ''; // "sk-123..."
	if (!openai_apiKey) {
		console.error('no apiKey provided');
		return;
	}

	const c = new GpTs(openai_apiKey);
	// console.log('c', c);

	try {
		// const s = await c.engineList();

		// const s = await c.engineRetrieve('ada');

		// const s = await c.completion({
		// 	engineId: 'ada',
		// 	prompt: 'whats for lunch?'
		// });

		// hmmm, an emp