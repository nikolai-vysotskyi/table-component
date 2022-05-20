<script setup lang="ts">
interface Props {
  rowIndex: number,
  cellIndex: number,
  childIndex: number,
  value?: string,
  type: string,
}

interface MatrixItem {
  data: object;
  row: number;
  cell: number;
  child: number;
}

const emit = defineEmits(["matrixItemAdd"]);
const props = defineProps<Props>();

const newMatrixItem = ref(props.value);

const saveMatrixItem = (e, row: number, cell: number) => {
	let item :MatrixItem = {
		data: {
			value: e.target.value,
			editing: false,
		},
		row: row,
		cell: cell,
		child: props.childIndex,
	};

	emit("matrixItemAdd", item);
	newMatrixItem.value = null;
};
</script>

<template>
  <div>
    <input
      v-model="newMatrixItem"
      :type="type === 'String'? 'text' : 'number'"
      @keyup.enter="saveMatrixItem($event, rowIndex, cellIndex)"
    >
  </div>
</template>