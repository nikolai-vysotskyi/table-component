<script setup lang="ts">
  const props = defineProps({
    headers: Array,
    matrix: Array
  });

  const dataType = useState('dataType', () => null);
  const newHeaderText = useState('newHeaderText', () => '');
  const dataTypes = ['String','Int','Max','Min','Count'];

  const max = (arr, index) => {
    return arr.reduce(
        (max, p) =>
            parseInt(p.cells[index]) > max
            ? parseInt(p.cells[index])
            : max,
        parseInt(arr[0].cells[index])
    ) || ''
  }

  const min = (arr, index) => {
    return arr.reduce(
        (min, p) =>
            parseInt(p.cells[index]) < min
            ? parseInt(p.cells[index])
            : min,
        parseInt( arr[0].cells[index])
    ) || ''
  }
</script>

<template>
    <div class="footer">
      <div class="footer_item" v-for="(header,index) in headers" :key="index">
        <div v-if="header.type === 'Count'">
          {{header.type}}:
          {{
            matrix.reduce(function(sum, elem) {
              if(parseInt(elem.cells[index])) return sum + parseInt(elem.cells[index]);
              return sum
            }, 0)
          }}
        </div>
        <div v-if="header.type === 'Min'">
          {{ header.type + ' ' + min(matrix, index) }}
        </div>
        <div v-if="header.type === 'Max'">
          {{ header.type + ' ' + max(matrix, index) }}
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  @import "/assets/scss/components/Footer";
</style>
