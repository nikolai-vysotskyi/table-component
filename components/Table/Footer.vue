<script setup lang="ts">
import {min,max,count} from "~/functions/aggrigation";

interface Props {
  matrix: Array<object>,
  headers: Array<{
    type: string,
  }>,
  matrixNewColumn: boolean,
}
defineProps<Props>();

const dataType = reactive({value: []});
const dataTypes = ["Max", "Min", "Count"];
</script>

<template>
  <div class="footer">
    <div
      v-for="(header, index) in headers"
      :key="index"
      class="footer_item"
    >
      <div
        v-if="header.type === 'Number'"
        class="footer_item-value"
      >
        <select v-model="dataType.value[index]">
          <option
            v-for="type in dataTypes"
            :key="type"
          >
            {{ type }}
          </option>
        </select>

        <div class="footer_item-value-value">
          <div v-if="dataType.value[index] === 'Count'">
            {{ count(matrix, index) }}
          </div>
          <div v-if="dataType.value[index] === 'Min'">
            {{ min(matrix, index) }}
          </div>
          <div v-if="dataType.value[index] === 'Max'">
            {{ max(matrix, index) }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="matrixNewColumn"
      class="footer_item"
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/scss/components/Footer";
</style>
