import { mount } from "@vue/test-utils";
import Controller from "@/components/Table/Controller.vue";

describe("Controller", () => {
	it("displays default message", () => {
		const emptyController = mount(Controller, {
			props: {
				headerLength: 0
			}
		});
		const emptySpan = emptyController.find(".controller_column");
		expect(emptySpan.text()).toContain("Create table");

		const fullController = mount(Controller, {
			props: {
				headerLength: 1
			}
		});
		const fullSpan = fullController.find(".controller_column");
		expect(fullSpan.text()).toContain("Add column");
	});
});