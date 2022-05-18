<script setup lang="ts">
const headers = reactive([]);
const matrix = reactive([]);

const headerItemAdd = (val) => {
  headers.push(val);
};
const matrixRowAdd = (val) => {
  matrix.push({});
};

const matrixItemAdd = (val) => {
  matrix.push(val);
};
</script>

<template>
  <div class="table">
    <div class="table_content">
    <TableHeader :headers="headers" @headerItemAdd="headerItemAdd"/>
    <TableMatrix :matrix="matrix" @matrixRowAdd="matrixRowAdd" @matrixItemAdd="matrixItemAdd"/>
  </div>
  </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/Table.scss";
</style>
