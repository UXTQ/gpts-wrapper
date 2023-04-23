/// <reference types="node" />
import { AnswerRequest, AnswerResponse, ClassificationRequest, ClassificationResponse, CompletionRequest, CompletionResponse, EngineId, FileListResponse, EngineListResponse, EngineRetrieveResponse, SearchRequest, SearchResponse, FileUploadResponse, FileRetrieveResponse, EmbeddingsRequest } from './typings';
import * as fs from 'fs';
import { EmbeddingsResponse } from '.';
export declare class GpTs {
    origi