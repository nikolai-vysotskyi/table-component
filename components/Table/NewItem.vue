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

const newMatrixItem = ref<string>(props.value);

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
  <div class="new-item_wrapper">
    <input
      v-model="newMatrixItem"
      class="new-item_input"
      :type="type === 'String' ? 'text' : 'number'"
      @keyup.enter="itemEdit($event, rowIndex, cellIndex, childIndex)"
    >
  </div>
</template>

<style lang="scss" scoped>
@import "/assets/scss/components/NewItem";
</style>
