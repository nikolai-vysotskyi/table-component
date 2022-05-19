<script setup lang="ts">
  const props = defineProps({
    headers: Array
  });
  const emit = defineEmits(['headerItemAdd']);

  const dataType = reactive({value: ''});
  const newHeaderText = useState('newHeaderText', () => '');
  const dataTypes = ['String','Int','Max','Min','Count'];
  const newHeaderItem = ref(false);

  const saveHeader = (e) => {
    emit('headerItemAdd', { data: e.target.value, type: dataType.value })
    dataType.value = null;
    newHeaderText.value = null;
    newHeaderItem.value = false;
  }
</script>

<template>
    <div class="header">
      <div class="header_item" v-for="(header,index) in headers" :key="index">
        {{ header.data }}
      </div>
      <div class="header_item"
             v-if="!newHeaderItem"
             v-on:click="newHeaderItem = true">
          +
      </div>
      <div v-else class="header_item header_item-new">
        <select v-model="dataType.value">
          <option v-for="item in dataTypes"> {{ item }}</option>
        </select>
        <input v-model="newHeaderText" type="text" :disabled="!dataType.value"
               v-on:keyup.enter="saveHeader">
      </div>
    </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/Header";
</style>
