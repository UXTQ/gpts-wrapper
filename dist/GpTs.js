"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpTs = void 0;
const axios_1 = require("axios");
const FormData = require("form-data");
class GpTs {
    constructor(apiKey, origin = 'https://api.openai.com/v1') {
        this.headers = {
            get: {
                Authorization: 'Bearer',
            },
            post: {
                Authorization: 'Bearer',
                'Content-Type': 'application/json',
            },
        };
        // console.log('GpTs constructed');
        this.origin = origin;
        this.setApiKey(apiKey);
    }
    setApiKey(apiKey) {
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
    request(endpoint, method = 'GET', reqOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.origin}/${endpoint}`; // ex: https://api.openai.com/v1/engines
            const res = yield axios_1.default.request({
                url,
                method,
                headers: this.headers.post,
                responseType: 'json',
                data: method == 'POST' ? reqOptions :