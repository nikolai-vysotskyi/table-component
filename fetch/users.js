import axios from "axios";
import onAxiosForbidden from "~/utils/onAxiosForbidden.js";

const users = async function () {
	try {
		const response = await axios.request(
			{
				method: "get",
				url: "https://my-json-server.typicode.com/nikolai-vysotskyi/table-component/db"
			}
		);
		return (response || {}).data || {};
	} catch (err) {
		return await onAxiosForbidden(err, async () => await users());
	}
};

export default users;
