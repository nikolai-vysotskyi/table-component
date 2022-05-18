<script setup lang="ts">
  const props = defineProps({
    headers: Array
  });

  const dataType = useState('dataType', () => null);
  const newHeaderText = useState('newHeaderText', () => '');
  const dataTypes = ['String','Int','Max','Min','Count'];
</script>

<template>
    <div class="footer">
      <div class="footer_item" v-for="(header,index) in headers" :key="index">
        {{ header.data }}
      </div>
    </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/Header";
</style>
