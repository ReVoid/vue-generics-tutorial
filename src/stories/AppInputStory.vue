<script setup lang="ts">
import { ref } from 'vue'

import { AppInput } from '@/components'


const output = ref<string>();

// ✅ The type has been narrowed down correctly
function onChange(payload: string | undefined): boolean {
  return payload ? payload.startsWith('x') : false;
}
</script>

<template>
  <AppInput
    v-model="output"
    @update:model-value="onChange"
  />
  Value: {{ output }}
</template>
