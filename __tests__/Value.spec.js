import { mount } from "@vue/test-utils";
import ValueComponent from "@/components/Table/Value.vue";

describe("Controller", () => {
	it("displays default message", () => {
		const Value = mount(ValueComponent, {
			props: {
				row: {
					cells: [{
						value: "10",
						editing: false,
						type: "Max"
					}],
					child:[
						{
							cells:[
								{
									value: "22",
									editing: false,
								},
								{
									value: "10",
									editing: false,
								}
							]
						}
					]
				},
				cellIndex: 0,
				rowIndex: 0,
				type: "Number",
				valueType: "Number"
			}
		});
		const val = Value.find(".value_value");
		expect(val.text()).toContain("22");

		expect(Value.emitted("matrixEditCell")).toHaveLength(1);
		expect(Value.emitted("matrixEditCell")[0]).toEqual([
			{
				data: {
					value: "22",
					editing: false,
					type: "Max",
				},
				row: 0,
				cell: 0,
				child: NaN,
			}
		]);
	});
});