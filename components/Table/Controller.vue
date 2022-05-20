<script setup lang="ts">
defineProps({
	headerLength: Number,
	matrixLength: Number
});
const emit = defineEmits(["matrixAddRow", "matrixAddColumn"]);

const newRow = (e) => {
	emit("matrixAddRow");
};
const newColumn = (e) => {
	emit("matrixAddColumn");
};
</script>

<template>
  <div class="controller">
    <button
      class="controller_item"
      @click="newColumn"
    >
      <span v-if="headerLength > 0">
        Add column
      </span>
      <span v-else>
        Create table
      </span>
    </button>

    <div class="controller_item">
      <button
        v-if="headerLength > 0"
        class="controller_item"
        @click="newRow"
      >
        Add row
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/components/Controller";
</style>
