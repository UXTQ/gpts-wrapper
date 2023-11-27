
export enum ObjectType {
	'engine',
	'list',
	'text_completion',
	'search_result',
	'classification',
	'answer',
	'file',
	'embedding'
}

export type BasicResponse = {
	object: ObjectType;
};

export type BasicRequest = {
	engineId: EngineId;
};

export type EngineId =
	// main engines
	| 'ada'
	| 'babbage'
	| 'curie'
	| 'davinci'
	// codex
	| 'ada-code-search-code'
	| 'ada-code-search-text'
	| 'babbage-code-search-code'
	| 'babbage-code-search-text'
	| 'code-cushman-001'
	| 'code-davinci-001'
	| 'cushman-codex'
	| 'davinci-codex'
	// instruct
	| 'ada-instruct-beta'
	| 'babbage-instruct-beta'
	| 'curie-instruct-beta'
	| 'curie-instruct-beta-v2'
	| 'davinci-instruct-beta'
	| 'davinci-instruct-beta-v3'
	// embeddings (old)
	| 'ada-search-document'
	| 'ada-search-query'
	| 'ada-similarity'
	| 'babbage-search-document'
	| 'babbage-search-query'
	| 'babbage-similarity'
	| 'curie-search-document'
	| 'curie-search-query'
	| 'curie-similarity'
	| 'davinci-search-document'
	| 'davinci-search-query'
	| 'davinci-similarity'
	// similarity embeddings (https://beta.openai.com/docs/guides/embeddings/similarity-embeddings)
	| 'text-similarity-ada-001'
	| 'text-similarity-babbage-001'
	| 'text-similarity-curie-001'
	| 'text-similarity-davinci-001'
	// text search embeddings (https://beta.openai.com/docs/guides/embeddings/text-search-embeddings)
	| 'text-search-ada-doc-001'
	| 'text-search-ada-query-001'
	| 'text-search-babbage-doc-001'
	| 'text-search-babbage-query-001'
	| 'text-search-curie-doc-001'
	| 'text-search-curie-query-001'
	| 'text-search-davinci-doc-001'
	| 'text-search-davinci-query-001'
	// code search embeddings (https://beta.openai.com/docs/guides/embeddings/code-search-embeddings)
	| 'code-search-ada-code-001'
	| 'code-search-ada-text-001'
	| 'code-search-babbage-code-001'
	| 'code-search-babbage-text-001'
	// text embeddings? (undocumented)
	| 'text-ada-001'
	| 'text-babbage-001'