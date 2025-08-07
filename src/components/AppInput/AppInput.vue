<script setup lang="ts" generic="T">
const inputValue = defineModel<T>();
</script>

<template>
  <input v-model="inputValue" />
</template>
