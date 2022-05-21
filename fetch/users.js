import axios from "axios";
import onAxiosForbidden from "~/utils/onAxiosForbidden.js";

const users = async function () {
	try {
		const r = await axios.request(
			{
				method: "get",
				url: "test.com/api/users/"
			}
		);
		return await r;
	} catch (err) {
		// return await onAxiosForbidden(err, async () => await users());
	}
};

export default users;
