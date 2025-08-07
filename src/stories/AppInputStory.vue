<script setup lang="ts">
import { ref } from 'vue'

import AppInput from '@/components/AppInput/AppInput.vue'

const output = ref<string>();

// ✅ The type has been narrowed down correctly.
function onChange(payload: string): boolean {
  return payload.startsWith('x');
}
</script>

<template>
  <AppInput
    v-model="output"
    @update:model-value="onChange"
  />
  Value: {{ output }}
</template>
