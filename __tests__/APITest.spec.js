import users from "~/fetch/users";
import axios from "axios";

const expected = {
	headers: [
		{
			data: "id",
			type: "string"
		}
	],
	matrix: [
		{
			cells: [
				{
					value: "1",
				}
			]
		}
	],
};

jest.mock("axios",() => {
	request: jest.fn().mockResolvedValue(expected);
});

let json;

beforeAll(async () => {
	json = await users();
});

describe("Users API", () => {
	test("it returns an array of users", async () => {
		expect(axios.request).toHaveBeenCalledWith({
			method: "get",
			url: "test.com/api/users/",
		});
		expect(json).toEqual(expected);

		// axios.request.mockRestore();
	});
});