<script setup lang="ts">
import PlusIcon from "~/assets/svg/plus.svg";

interface Props {
  matrix: Array<object>,
  headers: Array<object>,
  matrixNewColumn: boolean,
}

defineProps<Props>();

const emit = defineEmits(["matrixEditCell", "matrixAddChild", "matrixHiddenChilds", "matrixEditingCell"]);

const cellEdit = (item) => emit("matrixEditCell", item);
const cellEditing = (cell: number, row: number, data: boolean, child?: number) => emit("matrixEditingCell", {
	cell,
	row,
	data,
	child
});
const childAdd = (row: number) => emit("matrixAddChild", {row});
const childHidden = (row: number) => emit("matrixHiddenChilds", {row});
</script>

<template>
  <div
    v-for="(row, rowIndex) in matrix"
    :key="rowIndex"
    class="matrix_rows-parent matrix_rows"
  >
    <div class="matrix_row matrix_elem">
      <div
        v-for="(cell, cellIndex) in headers"
        :key="cellIndex"
        class="matrix_item"
        @dblclick="cellEditing(cellIndex, rowIndex, true)"
      >
        <TableValue
          :type="headers[cellIndex].type"
          :row="row"
          :cell-index="cellIndex"
          :row-index="rowIndex"
          :value-type="cell.type"
          @matrixEditCell="cellEdit"
        />
      </div>
      <div
        v-if="matrixNewColumn"
        class="matrix_item"
      />
      <div>
        <button
          v-if="row.child.length"
          @click="childHidden(rowIndex)"
        >
          <span v-if="row.childHidden">развернуть</span>
          <span v-else>свернуть</span>
        </button>

        <button
          v-if="headers.length"
          @click="childAdd(rowIndex)"
        >
          Create child
        </button>
      </div>
    </div>

    <div
      v-if="row.child.length"
      class="matrix_rows matrix_rows-child"
      :class="{'matrix_child-hidden': row.childHidden}"
    >
      <div
        v-for="(child, childIndex) in row.child"
        :key="childIndex"
        class="matrix_row"
      >
        <div
          v-for="(cell, cellIndex) in headers"
          :key="cellIndex"
          class="matrix_item"
          @dblclick="cellEditing(cellIndex, rowIndex, true, childIndex)"
        >
          <div v-if="child.cells[cellIndex] && !child.cells?.[cellIndex]?.editing">
            {{ child.cells?.[cellIndex]?.value }}
          </div>
          <TableNewItem
            v-else-if="!child.cells[cellIndex] || child.cells?.[cellIndex]?.editing"
            :row-index="rowIndex"
            :cell-index="cellIndex"
            :value="child.cells[cellIndex]?.value"
            :type="cell.type"
            :child-index="childIndex"
            @matrixEditCell="cellEdit"
          />
        </div>
        <div
          v-if="matrixNewColumn"
          class="matrix_item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/Matrix";
</style>
