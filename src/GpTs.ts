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
import * as fs from 'fs'; // needs "@types/no