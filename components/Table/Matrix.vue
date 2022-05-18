<script setup lang="ts">
const props = defineProps({
  matrix: Array
});
const emit = defineEmits(['matrixRowAdd', 'matrixItemAdd']);

const saveMatrixItem = (item) => {
  emit('matrixItemAdd', item)
}

const saveMatrixRow = (e) => {
  emit('matrixRowAdd', {data: e.target.value})
}
</script>

<template>
  <div class="matrix">
    <div class="matrix_rows" v-for="(row, index) in matrix" :key="index">
      <div class="matrix_row">
        <div class="matrix_item" v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
          {{ cell }}
        </div>
        <div class="matrix_item">
          <TableNewItem @saveMatrixItem="saveMatrixItem"/>
        </div>
      </div>

      <div class="matrix_row" v-if="row.children">
        <div v-for="(child, childIndex) in row.children" :key="childIndex">
          <div class="matrix_item" v-for="(cell, cellIndex) in child.cells" :key="cellIndex">
            {{ cell }}
          </div>
          <TableNewItem @saveMatrixItem="saveMatrixItem"/>
        </div>
      </div>
    </div>
    <div class="matrix_item" v-on:click="saveMatrixRow"> +</div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/TableMatrix.scss";
</style>
