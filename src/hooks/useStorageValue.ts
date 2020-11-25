import { useEffect, useState } from "react";
import { UserWithToken } from "../types";

const useStorageValue = (): UserWithToken | null | false => {
	// const [update] = useState<boolean>(false);

	const [user, setUser] = useState<UserWithToken | null | false>(null);
	useEffect(() => {
		console.log("useStorage get rerendere");
		const data = localStorage.getItem("rv-usr");
		const userFromStorage =
			typeof data === "string" && (JSON.parse(data) as UserWithToken | null);
		console.log("userFromStrogee", userFromStorage);

		user === false || (user === null && setUser(userFromStorage));
	}, [user]);
	// const rtr: (UserWithToken | null | false) | React.SetStateAction<boolean>[] = [user, setUpdate];
	return user;
};

export default useStorageValue;
