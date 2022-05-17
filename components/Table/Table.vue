<script setup lang="ts">
const headers = reactive([]);
const matrix = reactive([]);

const headerItemAdd = (val) => {
  headers.push(val);
};
</script>

<template>
  <div class="table">
    <div class="table_content">
    <TableHeader :headers="headers" @headerItemAdd="headerItemAdd"/>
<!--    <TableMatrix :matrix="matrix"/>-->
  </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Table.scss";
</style>
