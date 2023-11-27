
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