<script setup lang="ts">
defineProps({
	type: String,
	row: Object,
	cellIndex: Number,
	rowIndex: Number,
	valueType: String,
});
const emit = defineEmits(["matrixItemEdit"]);

const itemEdit = (item) => {
	emit("matrixItemEdit", item);
};

const dataType = reactive({value: []});
const dataTypes = ["Max", "Min", "Count", "Value"];

const max = (arr, index) => {
	return arr.reduce(
		(max, p) =>
			parseInt(p?.cells?.[index]?.value) > max
				? parseInt(p?.cells?.[index]?.value)
				: max,
		parseInt(arr?.[0]?.cells?.[index]?.value) || -Infinity
	) || "";
};

const min = (arr, index) => {
	return arr.reduce(
		(min, p) =>
			parseInt(p?.cells?.[index]?.value) < min
				? parseInt(p?.cells?.[index]?.value)
				: min,
		parseInt(arr?.[0].cells?.[index]?.value) || Infinity
	) || "";
};

const count = (arr, index) => {
	return arr.reduce(function (sum, elem) {
		if (parseInt(elem?.cells?.[index]?.value)) return sum + parseInt(elem?.cells?.[index]?.value);
		return sum;
	}, 0);
};
</script>

<template>
  <div class="footer">
    <div v-if="type === 'Number'">
      <select v-model="dataType.value[cellIndex]">
        <option
          v-for="type in dataTypes"
          :key="'footer_'+type"
        >
          {{ type }}
        </option>
      </select>

      <div v-if="dataType.value[cellIndex] === 'Count'">
        {{ count(row.child, cellIndex) }}
      </div>
      <div v-if="dataType.value[cellIndex] === 'Min'">
        {{ min(row.child, cellIndex) }}
      </div>
      <div v-if="dataType.value[cellIndex] === 'Max'">
        {{ max(row.child, cellIndex) }}
      </div>
      <div v-if="dataType.value[cellIndex] === 'Value'">
        <div v-if="row.cells[cellIndex] && !row.cells?.[cellIndex]?.editing">
          {{ row.cells?.[cellIndex]?.value }}
        </div>
        <TableNewItem
          v-else-if="!row.cells[cellIndex] || row.cells?.[cellIndex]?.editing"
          :row-index="rowIndex"
          :cell-index="cellIndex"
          :value="row.cells[cellIndex]?.value"
          :type="valueType"
          :child-index="NaN"
          @matrixItemEdit="itemEdit"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Footer";
</style>
