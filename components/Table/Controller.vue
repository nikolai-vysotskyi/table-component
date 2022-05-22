<script setup lang="ts">
interface Props {
  headerLength: number,
}
defineProps<Props>();

const emit = defineEmits(["matrixAddRow", "matrixAddColumn"]);

const newRow = () => emit("matrixAddRow");
const newColumn = () => emit("matrixAddColumn");
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

<style lang="scss" scoped>
  @import "/assets/scss/components/Controller";
</style>
