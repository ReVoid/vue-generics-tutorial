<script setup lang="ts">
const inputValue = defineModel<string | number>();
</script>

<template>
  <input v-model="inputValue" />
</template>
