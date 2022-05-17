<script setup lang="ts">
  const props = defineProps({
    matrix: Array
  });
</script>

<template>
  <div class="matrix">
    <div v-for="(row, index) in matrix" :key="index">
      <div v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
        {{ cell }}
      </div>
      <div v-if="row.children">
        <div v-for="(child, childIndex) in row.children" :key="childIndex">
          <div v-for="(cell, cellIndex) in child.cells" :key="cellIndex">
            {{ cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>