<script setup lang="ts">
const headers = reactive([]);
const matrix = ref([
  {
    cells: []
  }
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
  // matrix.value = [];
  // toRaw(matrix.value)[val.row].push(val.data)
  // matrix.value[val.row].cells = [];
  matrix.value[val.row].cells.push(val.data)
  console.log(toRaw(matrix.value));
  // matrix.value[val.row].push(val.data);
};
</script>

<template>
  <div class="table">
    <div class="table_content">
      <TableHeader :headers="headers" @headerItemAdd="headerItemAdd"/>
      <TableMatrix :matrix="matrix" :headers="headers" @matrixRowAdd="matrixRowAdd" @matrixItemAdd="matrixItemAdd"/>
      <div class="matrix_rows">
        <div class="matrix_item"
             v-if="headers.length > 0"
             v-on:click="matrixRowAdd">
          +
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/pages/Table";
</style>
