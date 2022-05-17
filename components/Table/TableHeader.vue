<script setup lang="ts">
  const props = defineProps({
    headers: Array
  });
  const emit = defineEmits(['headerItemAdd']);

  const dataType = useState('dataType', () => null);
  const newHeaderText = useState('newHeaderText', () => '');
  const dataTypes = ['String','Int','Max','Min','Count'];

  const saveHeader = (e) => {
    emit('headerItemAdd', { data: e.target.value, type: dataType })
    dataType.value = null;
    newHeaderText.value = null;
  }
</script>

<template>
    <div class="header">
      <div class="header_item" v-for="(header,index) in headers" :key="index">
        {{ header.data }}
      </div>
      <select class="header_item" v-model="dataType">
        <option v-for="item in dataTypes"> {{ item }}</option>
      </select>
      <input v-model="newHeaderText"
          class="header_item" type="text" :disabled="!dataType"
             v-on:keyup.enter="saveHeader">
    </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/TableHeader.scss";
</style>
