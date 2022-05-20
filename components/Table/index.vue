<script setup lang="ts">
// toRaw(matrix.value)

const headers = reactive([]);
const matrix = ref([
	{
		cells: [],
		child: [],
		childHidden: false,
	}
]);
const matrixNewColumn = ref(false);

const headerItemAdd = (val) => {
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

const matrixAddColumn = () => {
	matrixNewColumn.value = true;
};

const matrixAddChild = (val) => {
	matrix.value[val.row].child.push({cells: []});
};

const matrixHiddenChilds = (val) => {
	matrix.value[val.row].childHidden = !matrix.value[val.row].childHidden;
};

const cellEditing = (val) => {
	if(val.child >= 0) {
		matrix.value[val.row].child[val.child].cells[val.cell].editing = val.data;
	} else {
		matrix.value[val.row].cells[val.cell].editing = val.data;
	}
};

const matrixItemEdit = (val) => {
	if(val.child >= 0) {
		matrix.value[val.row].child[val.child].cells[val.cell] = val.data;
	} else {
		matrix.value[val.row].cells[val.cell] = val.data;
	}
};

</script>

<template>
  <div class="table">
    <TableController
      :header-length="headers.length"
      @matrixAddRow="matrixAddRow"
      @matrixAddColumn="matrixAddColumn"
    />
    <div class="table_content">
      <TableHeader
        :headers="headers"
        :matrix-new-column="matrixNewColumn"
        @headerItemAdd="headerItemAdd"
      />

      <TableMatrix
        v-if="matrix.length > 0"
        :matrix="matrix"
        :headers="headers"
        @matrixItemEdit="matrixItemEdit"
        @cellEditing="cellEditing"
        @matrixAddChild="matrixAddChild"
        @matrixHiddenChilds="matrixHiddenChilds"
      />

      <!--      <TableFooter-->
      <!--        :headers="headers"-->
      <!--        :matrix="matrix"-->
      <!--      />-->
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/pages/Table";
</style>
