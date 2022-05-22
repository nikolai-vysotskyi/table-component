<script setup lang="ts">
interface Props {
  headers: Array<{
    data: string,
  }>,
  matrixNewColumn: boolean,
}
defineProps<Props>();

const emit = defineEmits(["headerAddItem"]);

const dataType = reactive({value: ""});
const newHeaderText = ref("");
const dataTypes = ["String", "Number"];

const saveHeader = (e) => {
	emit("headerAddItem", {data: e.target.value, type: dataType.value});
	dataType.value = null;
	newHeaderText.value = null;
};
</script>

<template>
  <div class="header">
    <div
      v-for="(header, index) in headers"
      :key="index"
      class="header_item"
    >
      {{ header.data }}
    </div>
    <div
      v-if="matrixNewColumn"
      class="header_item header_item-new"
    >
      <select v-model="dataType.value">
        <option
          v-for="type in dataTypes"
          :key="type"
        >
          {{ type }}
        </option>
      </select>
      <input
        v-model="newHeaderText"
        type="text"
        :disabled="!dataType.value"
        @keyup.enter="saveHeader"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/scss/components/Header";
</style>
