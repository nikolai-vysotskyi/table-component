<script setup lang="ts">
import {users} from "~/fetch";

let headers = ref([]);
let matrix = ref([]);

(async () => {
	try {
		const response = await users();
		headers.value = response.headers;
		matrix.value = response.matrix;
	} catch (e){
		console.log(e);
	}
})();

</script>

<template>
  <section>
    <Table
      v-if="matrix.length && matrix.length"
      :headers="headers"
      :matrix="matrix"
    />
    <Table />
  </section>
</template>

