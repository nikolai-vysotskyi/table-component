<script setup lang="ts">
  const props = defineProps({
    matrix: Array,
    cellIndex: Number
  });
  const emit = defineEmits(['matrixItemAdd']);
  const newMatrixItem = ref('');

  const saveMatrixItem = (e, cellIndex) => {
    emit('matrixItemAdd', {data: e.target.value, row: cellIndex})
    newMatrixItem.value = null;
  }
</script>

<template>
  <div>
    <input type="text" v-model="newMatrixItem" v-on:keyup.enter="saveMatrixItem($event, cellIndex)">
  </div>
</template>