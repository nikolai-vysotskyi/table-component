<script setup lang="ts">
defineProps({
	headers: Array,
	matrix: Array
});

const dataType = reactive({value: []});
const dataTypes = ["Max", "Min", "Count"];

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
    <div
      v-for="(header,index) in headers"
      :key="index"
      class="footer_item"
    >
      <div v-if="headers[index].type === 'Number'">
        <select v-model="dataType.value[index]">
          <option
            v-for="type in dataTypes"
            :key="'footer_'+type"
          >
            {{ type }}
          </option>
        </select>

        <div v-if="dataType.value[index] === 'Count'">
          {{ count(matrix, index) }}
        </div>
        <div v-if="dataType.value[index] === 'Min'">
          {{ min(matrix, index) }}
        </div>
        <div v-if="dataType.value[index] === 'Max'">
          {{ max(matrix, index) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Footer";
</style>
