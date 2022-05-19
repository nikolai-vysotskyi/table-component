<script setup lang="ts">
const headers = reactive([]);
const matrix = ref([
  { cells: [] }
]);

const headerItemAdd = (val) => {
  headers.push(val);
};

const matrixRowAdd = () => {
  matrix.value.push({
    cells: [],
  });
};

const matrixItemAdd = (val) => {
  matrix.value[val.row].cells.push(val.data)
  // toRaw(matrix.value)
};
</script>

<template>
  <div class="table">
    <div class="table_content">
      <TableHeader :headers="headers" @headerItemAdd="headerItemAdd"/>
      <TableMatrix :matrix="matrix" :headers="headers" @matrixRowAdd="matrixRowAdd" @matrixItemAdd="matrixItemAdd"/>
      <div class="matrix_rows_add">
        <div>
          <div class="matrix_item"
               v-if="headers.length > 0"
               v-on:click="matrixRowAdd"
          >
            +
          </div>
        </div>
      </div>
      <TableFooter :headers="headers" :matrix="matrix"/>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/pages/Table";
</style>
