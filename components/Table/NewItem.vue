<script setup lang="ts">
const props = defineProps({
  headers: Array,
  matrix: Array,
  cellIndex: Number
});
const emit = defineEmits(['matrixItemAdd']);
const newMatrixItem = ref('');

const saveMatrixItem = (e, cellIndex) => {
  emit('matrixItemAdd', {data: e.target.value, row: cellIndex})
  newMatrixItem.value = null;
}

console.log(props.matrix[props.cellIndex].cells.length);
</script>

<template>
  <div>
    <input
        v-model="newMatrixItem"
        v-on:keyup.enter="saveMatrixItem($event, cellIndex)"
        :type="headers[props.matrix[props.cellIndex].cells.length].type === 'String'? 'text' : 'number'"
    >
  </div>
</template>