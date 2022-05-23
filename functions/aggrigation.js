export const max = (arr, index) => {
	let value = arr?.reduce(
		(max, p) =>
			parseInt(p?.cells?.[index]?.value) > max
				? parseInt(p?.cells?.[index]?.value)
				: max,
		parseInt(arr?.[0]?.cells?.[index]?.value) || -Infinity
	) || "";
	if (value === -Infinity) return "";
	return value;
};

export const min = (arr, index) => {
	let value = arr?.reduce(
		(min, p) =>
			parseInt(p?.cells?.[index]?.value) < min
				? parseInt(p?.cells?.[index]?.value)
				: min,
		parseInt(arr?.[0]?.cells?.[index]?.value) || Infinity
	) || "";

	if (value === Infinity) return "";
	return value;
};

export const count = (arr, index) => {
	return arr?.reduce(function (sum, elem) {
		if (parseInt(elem?.cells?.[index]?.value)) return sum + parseInt(elem?.cells?.[index]?.value);
		return sum;
	}, 0);
};


const dataTypes = [
	{
		type: "Value",
		func: function (row, cellIndex) {
			if (row.cells[cellIndex] && !row.cells?.[cellIndex]?.editing) {
				return row.cells?.[cellIndex]?.value;
			}
		}
	},
	{
		type: "Max",
		func: function (row, cellIndex) {
			return max(row.child, cellIndex);
		}
	},
	{
		type: "Min",
		func: function (row, cellIndex) {
			return min(row.child, cellIndex);
		}
	},
	{
		type: "Count",
		func: function (row, cellIndex) {
			return count(row.child, cellIndex);
		}
	}
];


const updateValue = (type, data, rowIndex, cellIndex, itemEdit) => {
	if (type === "Max" || type === "Min" || type === "Count") {
		let item = {
			data: {
				value: data.toString(),
				editing: false,
				type: type,
			},
			row: rowIndex,
			cell: cellIndex,
			child: NaN,
		};
		itemEdit(item);
	}
};

export const value = (row, type, cellType, rowIndex, cellIndex, itemEdit) => {
	let data;

	dataTypes.forEach((dataType) => {
		if (dataType.type === type) {
			data = dataType.func(row, cellIndex);
		}
	});

	if ((data && (!row.cells[cellIndex]?.value || data.toString() !== row.cells[cellIndex]?.value.toString()))
		|| cellType === "String") {
		updateValue(type, data, rowIndex, cellIndex, itemEdit);
	}

	return data || row.cells[cellIndex]?.value;
};

