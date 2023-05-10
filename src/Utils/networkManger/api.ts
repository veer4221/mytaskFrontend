import axios from "./axios";
import { TransactionPayloadAPI, loginPayloadAPI } from "./payloadType";

export const LoginAPI = (payload: loginPayloadAPI) => axios.post(`/login`, payload);
export const TransactionAPI = (payload: any) => axios.post(`/Transaction`, payload);
export const IMAGEUPLOAD = (payload: any) => axios.post(`/UploadImage`, payload);
