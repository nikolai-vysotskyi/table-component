<script setup lang="ts">
defineProps({
	matrix: Array,
	headers: Array
});
const emit = defineEmits(["matrixRowAdd", "matrixItemAdd"]);

const saveMatrixItem = (item) => {
	emit("matrixItemAdd", item);
};

// const saveMatrixRow = (e) => {
//   emit('matrixRowAdd', {data: e.target.value})
// }
</script>

<template>
  <div
    v-for="(row, index) in matrix"
    :key="index"
    class="matrix_rows"
  >
    <div class="matrix_row">
      <div
        v-for="(cell, cellIndex) in row.cells"
        :key="cellIndex"
        class="matrix_item"
      >
        {{ cell }}
      </div>
      <div
        v-if="row.cells.length < headers.length"
        class="matrix_item"
      >
        <TableNewItem
          :cell-index="index"
          :headers="headers"
          :matrix="matrix"
          @matrixItemAdd="saveMatrixItem"
        />
      </div>
    </div>

    <!--    <div class="matrix_row" v-if="row.children">-->
    <!--      <div v-for="(child, childIndex) in row.children" :key="childIndex">-->
    <!--        <div class="matrix_item" v-for="(cell, cellIndex) in child.cells" :key="cellIndex"  :matrix="matrix">-->
    <!--          {{ cell }}-->
    <!--        </div>-->
    <!--        <div class="matrix_item">-->
    <!--          <TableNewItem @matrixItemAdd="saveMatrixItem"  :cellIndex="index" :headers="headers"/>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Matrix";
</style>
