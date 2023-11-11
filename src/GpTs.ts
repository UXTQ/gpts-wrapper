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
		this.apiKey = apiKey;
		this.headers.get.Authorization = `Bearer ${this.apiKey}`;
		this.headers.post.Authorization = `Bearer ${this.apiKey}`;

		// TODO use axios instance for ease
		// const instance = axios.create({
		// 	baseURL: 'https://some-domain.com/api/',
		// 	timeout: 1000,
		// 	headers: { 'X-Custom-Header': 'foobar' },
		// });
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private async request<T = any>(
		endpoint: string,
		method: 'GET' | 'POST' | 'DELETE' = 'GET',
		reqOptions?: any
	): Promise<T> {
		const url = `${this.origin}/${endpoint}`; // ex: https://api.openai.com/v1/engines

		const res = await axios.request<T>({
			url,
			method,
			headers: this.headers.post,
			responseType: 'json', // default
			data: method == 'POST' ? reqOptions : null,
		});

		if (res.status == 401) {
			throw 'invalid api key';
		} else if (res.status == 403) {
			throw 'no access to this';
		} else if (res.status !== 200) {
			throw 'request err';
		} else {
			const json = res.data;
			return json;
		}
	}

	async engineList(): Promise<EngineListResponse> {
		return await this.request<EngineListResponse>('engines');
	}

	async engineRetrieve(engineId: EngineId): Promise<EngineRetrieveResponse> {
		return await this.request<EngineRetrieveResponse>(`engines/${engineId}`);
	}

	async completion(options: CompletionRequest): Promise<CompletionResponse> {
		const engineId = options.engineId;
		delete options.engineId; // some openai endpoints err if you pass in extra params
		return await this.request<CompletionResponse>(
			`engines/${engineId}/completions`,
			'POST',
			options
		);
	}

	// TODO: https://beta.openai.com/docs/api-reference/completions/create-via-get
	async completionStream(engineId: EngineId, options: Partial<CompletionRequest>): Promise<any> {
		console.warn('TODO - completionStream');
		return;
	}

	async search(options: SearchRequest): Promise<SearchResponse> {
		const engineId = options.engineId;
		delete options.engineId; // some endpoints err if you pass in this
		return await this.request<SearchResponse>(`engines/${engineId}/search`, 'POST', options);
	}

	async classification(options: ClassificationRequest): Promise<ClassificationResponse> {
		const engineId = options.engineId;
		delete options.engineId; // some endpoints err if you pass in this
		// openai mixes up model / engineId here?
		const opts = {
			model: engineId,
			...options,
		};
		return await this.request<ClassificationResponse>('classifications', 'POST', opts);
	}

	async answer(options: AnswerRequest): Promise<AnswerResponse> {
		const engineId = options.engineId;
		delete options.engineId; // some endpoints err if you pass in this
		// openai mixes up model / engineId here?
		const opts = {
			model: engineId,
			...options