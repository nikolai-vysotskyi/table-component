<script setup lang="ts">
interface Props {
  matrix?: Array<{
    cells: Array<{
      value: string,
      editing: boolean,
    }>,
    child: Array<{
      cells: Array<{
        value: string,
        editing: boolean,
      }>
    }>,
    childHidden: boolean,
  }>,
  headers?: Array<{
    data: string,
    type: string,
  }>,
}

const prop = defineProps<Props>();

const headers = reactive(prop.headers || []);
const matrix = ref(prop.matrix || [
	{
		cells: [],
		child: [],
		childHidden: false,
	}
]);

const matrixNewColumn = ref<boolean>(false);

const headerAddItem = (val) => {
	headers.push(val);
	matrixNewColumn.value = false;
};

const matrixAddRow = () => {
	matrix.value.push({
		cells: [],
		child: [],
		childHidden: false,
	});
};

const matrixAddChild = (val) => matrix.value[val.row].child.push({cells: []});
const matrixAddColumn = () => matrixNewColumn.value = true;
const matrixHiddenChild = (val) => matrix.value[val.row].childHidden = !matrix.value[val.row].childHidden;

const matrixEditCell = (val) => {
	if(val.child >= 0) matrix.value[val.row].child[val.child].cells[val.cell] = val.data;
	else matrix.value[val.row].cells[val.cell] = val.data;
};

const matrixEditingCell = (val) => {
	if(val.child >= 0) matrix.value[val.row].child[val.child].cells[val.cell].editing = val.data;
	else matrix.value[val.row].cells[val.cell].editing = val.data;
};
</script>

<template>
  <div class="table">
    <TableController
      :header-length="headers.length"
      @matrix-add-row="matrixAddRow"
      @matrix-add-column="matrixAddColumn"
    />
    <div class="table_content">
      <TableHeader
        :headers="headers"
        :matrix-new-column="matrixNewColumn"
        @header-add-item="headerAddItem"
      />

      <TableMatrix
        v-if="matrix.length > 0"
        :matrix="matrix"
        :headers="headers"
        :matrix-new-column="matrixNewColumn"
        @matrix-edit-cell="matrixEditCell"
        @matrix-editing-cell="matrixEditingCell"
        @matrix-add-child="matrixAddChild"
        @matrix-hidden-child="matrixHiddenChild"
      />

      <TableFooter
        v-if="matrix.length > 0"
        :headers="headers"
        :matrix-new-column="matrixNewColumn"
        :matrix="matrix"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/scss/components";
</style>
