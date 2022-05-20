<script setup lang="ts">
import {min,max,count,value} from "~/functions/aggrigation";
// import {dataTypes} from "~/functions/aggrigation";

interface Props {
  row: object,
  cellIndex: number,
  rowIndex: number,
  type: string,
  valueType: string,
}
defineProps<Props>();

const emit = defineEmits(["matrixItemEdit"]);

const itemEdit = (item) => {
	emit("matrixItemEdit", item);
};

const dataType = reactive({value: []});
const dataTypes = ["Value", "Max", "Min", "Count"];

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

      {{ value(row, dataType.value[cellIndex], cellIndex) }}

      <div v-if="dataType.value[cellIndex] === 'Value'">
        <TableNewItem
          v-if="!row.cells[cellIndex] || row.cells?.[cellIndex]?.editing"
          :row-index="rowIndex"
          :cell-index="cellIndex"
          :value="row.cells[cellIndex]?.value"
          :type="valueType"
          :child-index="NaN"
          @matrixItemEdit="itemEdit"
        />
      </div>
    </div>
    <div v-if="type === 'String'">
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
</template>

<style lang="scss">
@import "/assets/scss/components/Footer";
</style>
