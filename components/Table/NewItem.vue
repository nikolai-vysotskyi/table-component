<script setup lang="ts">
  const props = defineProps({
    matrix: Array
  });
  const emit = defineEmits(['matrixItemAdd']);

  // const newMatrixItem = useState('newMatrixItem', () => '');
  const newMatrixItem = ref('');

  const saveMatrixItem = (e) => {
    emit('matrixItemAdd', {data: e.target.value})
    newMatrixItem.value = null;
  }
</script>

<template>
  <div>
    <input type="text" v-model="newMatrixItem" v-on:keyup.enter="saveMatrixItem">
  </div>
</template>