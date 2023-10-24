import {
	AnswerRequest,
	AnswerResponse,
	ClassificationRequest,
	ClassificationResponse,
	CompletionRequest,
	CompletionResponse,
	EngineId,
	FileListResponse,
	EngineListResponse,
	EngineRetrieveResponse,
	SearchRequest,
	SearchResponse,
	FileUploadResponse,
	FileRetrieveResponse,
	EmbeddingsRequest,
} from './typings';

import axios from 'axios';

// for file uploading
import * as fs from 'fs'; // needs "@types/node": "^14.14.37",
import * as FormData from 'form-data';
import { EmbeddingsResponse } from '.';

export class GpTs {
	origin: string; // origin as var for if/when api changes
	apiKey: string;

	private headers = {
		get: {
			Authorization: 'Bearer',
		},
		post: {
			Authorization: 'Bearer',
			'Content-Type': 'application/json',
		},
	};

	constructor(apiKey: string, origin = 'https://api.openai.com/v1') {
		// console.log('GpTs constructed');
		this.origin = origin;
		this.setApiKey(apiKey);
	}

	private setApiKey(apiKey: string) {
		this.apiKey = ap