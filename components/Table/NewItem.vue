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

const emit = defineEmits(["matrixEditCell"]);
const props = defineProps<Props>();

const newMatrixItem = ref(props.value);

const itemEdit = (e, row: number, cell: number, child: number) => {
	let item :MatrixItem = {
		data: {
			value: e.target.value,
			editing: false,
		},
		row: row,
		cell: cell,
		child: child,
	};

	emit("matrixEditCell", item);
	newMatrixItem.value = null;
};
</script>

<template>
  <div>
    <input
      v-model="newMatrixItem"
      :type="type === 'String' ? 'text' : 'number'"
      @keyup.enter="itemEdit($event, rowIndex, cellIndex, childIndex)"
    >
  </div>
</template>