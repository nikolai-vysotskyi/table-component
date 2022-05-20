<script setup lang="ts">
defineProps({
	matrix: Array,
	headers: Array,
});
const emit = defineEmits(["matrixItemAdd", "matrixItemEdit", "matrixAddChild", "matrixHiddenChilds", "cellEditing"]);

const itemEdit = (item) => {
	emit("matrixItemEdit", item);
};

const cellEdit = (cell: number, row: number, data: boolean, child?: number) => {
	emit("cellEditing", {cell, row, data, child});
};

const childAdd = (row: number) => {
	emit("matrixAddChild", {row});
};

const childHidden = (row: number) => {
	emit("matrixHiddenChilds", {row});
};
</script>

<template>
  <div
    v-for="(row, rowIndex) in matrix"
    :key="rowIndex"
    class="matrix_rows"
  >
    <div class="matrix_row">
      <div
        v-for="(cell, cellIndex) in headers"
        :key="cellIndex"
        class="matrix_item"
        @dblclick="cellEdit(cellIndex, rowIndex, true)"
      >
        <TableValue
          :type="headers[cellIndex].type"
          :row="row"
          :cell-index="cellIndex"
          :row-index="rowIndex"
          :value-type="cell.type"
          @matrixItemAdd="saveMatrixItem"
        />
        <!--          {{ row.cells?.[cellIndex]?.value }}-->
      </div>
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
          @dblclick="cellEdit(cellIndex, rowIndex, true, childIndex)"
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
            @matrixItemEdit="itemEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Matrix";
</style>
