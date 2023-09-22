
export declare enum ObjectType {
    'engine' = 0,
    'list' = 1,
    'text_completion' = 2,
    'search_result' = 3,
    'classification' = 4,
    'answer' = 5,
    'file' = 6,
    'embedding' = 7
}
export declare type BasicResponse = {
    object: ObjectType;
};
export declare type BasicRequest = {
    engineId: EngineId;
};
export declare type EngineId = 'ada' | 'babbage' | 'curie' | 'davinci' | 'ada-code-search-code' | 'ada-code-search-text' | 'babbage-code-search-code' | 'babbage-code-search-text' | 'code-cushman-001' | 'code-davinci-001' | 'cushman-codex' | 'davinci-codex' | 'ada-instruct-beta' | 'babbage-instruct-beta' | 'curie-instruct-beta' | 'curie-instruct-beta-v2' | 'davinci-instruct-beta' | 'davinci-instruct-beta-v3' | 'ada-search-document' | 'ada-search-query' | 'ada-similarity' | 'babbage-search-document' | 'babbage-search-query' | 'babbage-similarity' | 'curie-search-document' | 'curie-search-query' | 'curie-similarity' | 'davinci-search-document' | 'davinci-search-query' | 'davinci-similarity' | 'text-similarity-ada-001' | 'text-similarity-babbage-001' | 'text-similarity-curie-001' | 'text-similarity-davinci-001' | 'text-search-ada-doc-001' | 'text-search-ada-query-001' | 'text-search-babbage-doc-001' | 'text-search-babbage-query-001' | 'text-search-curie-doc-001' | 'text-search-curie-query-001' | 'text-search-davinci-doc-001' | 'text-search-davinci-query-001' | 'code-search-ada-code-001' | 'code-search-ada-text-001' | 'code-search-babbage-code-001' | 'code-search-babbage-text-001' | 'text-ada-001' | 'text-babbage-001' | 'text-curie-001' | 'text-davinci-001' | 'content-filter-alpha-c4' | 'content-filter-dev' | 'cursing-filter-v6' | string;
export declare type Engine = {
    id: EngineId;
    object: ObjectType.engine;
    owner: string;