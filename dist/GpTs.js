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
                data: method == 'POST' ? reqOptions : null,
            });
            if (res.status == 401) {
                throw 'invalid api key';
            }
            else if (res.status == 403) {
                throw 'no access to this';
            }
            else if (res.status !== 200) {
                throw 'request err';
            }
            else {
                const json = res.data;
                return json;
            }
        });
    }
    engineList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request('engines');
        });
    }
    engineRetrieve(engineId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(`engines/${engineId}`);
        });
    }
    completion(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const engineId = options.engineId;
            delete options.engineId; // some openai endpoints err if you pass in extra params
            return yield this.request(`engines/${engineId}/completions`, 'POST', options);
        });
    }
    // TODO: https://beta.openai.com/docs/api-reference/completions/create-via-get
    completionStream(engineId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn('TODO - completionStream');
            return;
        });
    }
    search(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const engineId = options.engineId;
            delete options.engineId; // some endpoints err if you pass in this
            return yield this.request(`engines/${engineId}/search`, 'POST', options);
        });
    }
    classification(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const engineId = options.engineId;
            delete options.engineId; // some endpoints err if you pass in this
            // openai mixes up model / engineId here?
            const opts = Object.assign({ model: engineId }, options);
            return yield this.request('classifications', 'POST', opts);
        });
    }
    answer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const engineId = options.engineId;
            delete options.engineId; // some endpoints err if you pass in this
            // openai mixes up model / engineId here?
            const opts = Object.assign({ model: engineId }, options);
            return yield this