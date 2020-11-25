/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosResponse } from "axios";
import { User } from "../types";

const baseUrl = "/api/users";

const create = (newuser: User): unknown =>
	axios
		.post(`${baseUrl}/register`, newuser)
		.then((res: AxiosResponse) => res.data);

const login = (user: User): unknown =>
	axios.post(`${baseUrl}/login`, user).then((res: AxiosResponse) => res.data);

export default { create, login };
