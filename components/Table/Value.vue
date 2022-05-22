<script setup lang="ts">
import {value} from "~/functions/aggrigation";
interface Props {
  row: {
    cells: Array<{
      value: string,
      editing: boolean,
    }>,

  },
  cellIndex: number,
  rowIndex: number,
  type: string,
  valueType: string,
}
defineProps<Props>();

const emit = defineEmits(["matrixEditCell"]);

const itemEdit = (item) => emit("matrixEditCell", item);

const dataType = reactive({value: []});
const dataTypes = ["Value", "Max", "Min", "Count"];

</script>

<template>
  <div class="value">
    <select
      v-if="type === 'Number'"
      v-model="dataType.value[cellIndex]"
      class="value_select"
    >
      <option
        v-for="item in dataTypes"
        :key="item"
      >
        {{ item }}
      </option>
    </select>

    <TableNewItem
      v-if="
        (!row.cells[cellIndex]
          || row.cells?.[cellIndex]?.editing)
          && (type === 'String' || dataType.value[cellIndex] === 'Value')
      "
      :row-index="rowIndex"
      :cell-index="cellIndex"
      :value="row.cells[cellIndex]?.value"
      :type="valueType"
      :child-index="NaN"
      @matrix-edit-cell="itemEdit"
    />
    <div
      v-else
      class="value_value"
    >
      {{ value(row, dataType.value[cellIndex], type, rowIndex, cellIndex, itemEdit) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/scss/components/Value";
</style>
