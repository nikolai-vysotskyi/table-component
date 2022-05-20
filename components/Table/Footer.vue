<script setup lang="ts">
import {min,max,count} from "~/functions/aggrigation";

interface Props {
  matrix: Array<object>,
  headers: Array<object>,
}
defineProps<Props>();

const dataType = reactive({value: []});
const dataTypes = ["Max", "Min", "Count"];
</script>

<template>
  <div class="footer">
    <div
      v-for="(header,index) in headers"
      :key="index"
      class="footer_item"
    >
      <div v-if="headers[index].type === 'Number'">
        <select v-model="dataType.value[index]">
          <option
            v-for="type in dataTypes"
            :key="'footer_'+type"
          >
            {{ type }}
          </option>
        </select>

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
</template>

<style lang="scss">
@import "/assets/scss/components/Footer";
</style>
