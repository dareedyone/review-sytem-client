/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from "axios";
import { Review } from "../types";

const baseUrl = "/api/reviews";

const create = (review: Review): unknown =>
	axios.post(baseUrl, review).then((res: AxiosResponse) => res.data);

const get = (): unknown =>
	axios.post(baseUrl).then((res: AxiosResponse) => res.data);

export default { create, get };
