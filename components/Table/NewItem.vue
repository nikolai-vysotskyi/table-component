<script setup lang="ts">
defineProps({
	headers: Array,
	matrix: Array,
	cellIndex: Number
});
const emit = defineEmits(["matrixItemAdd"]);
const newMatrixItem = ref("");

const saveMatrixItem = (e, cellIndex) => {
	emit("matrixItemAdd", {data: e.target.value, row: cellIndex});
	newMatrixItem.value = null;
};

// console.log(props.matrix[props.cellIndex].cells.length);
</script>

<template>
  <div>
    <input
      v-model="newMatrixItem"
      :type="headers[matrix[cellIndex].cells.length].type === 'String'? 'text' : 'number'"
      @keyup.enter="saveMatrixItem($event, cellIndex)"
    >
  </div>
</template>