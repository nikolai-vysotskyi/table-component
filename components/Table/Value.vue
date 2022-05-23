<script setup lang="ts">
import {value} from "~/functions/aggrigation";
import {reactive} from "vue";

interface Props {
  row: {
    cells: Array<{
      value: string,
      editing: boolean,
      type: string,
    }>,
  },
  cellIndex: number,
  rowIndex: number,
  valueType: string,
}
const prop = defineProps<Props>();

const emit = defineEmits(["matrixEditCell"]);

const itemEdit = (item) => emit("matrixEditCell", item);

const dataType = reactive({value: []});

prop.row.cells.forEach((item)=> {
	dataType.value.push(item.type || "Value");
});

const dataTypes = ["Value", "Max", "Min", "Count"];
</script>

<template>
  {{ valueType }}
  <div class="value">
    <select
      v-if="valueType === 'Number'"
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
          && (valueType === 'String' || dataType?.value?.[cellIndex] === 'Value')
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
      {{ value(row, dataType.value[cellIndex], valueType, rowIndex, cellIndex, itemEdit) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/scss/components/Value";
</style>
