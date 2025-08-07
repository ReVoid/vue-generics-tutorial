<script setup lang="ts">
import { ref } from 'vue'

import AppInputNonGeneric from '@/components/AppInputNonGeneric/AppInputNonGeneric.vue'

const output = ref<string>();

// ❌ You can't use it that way because payload provided by component is `string | number | undefined`
function onChange(payload: string): boolean {
  return payload.startsWith('x');
}
</script>

<template>
    <AppInputNonGeneric
      v-model="output"
      @update:model-value="onChange"
    />

    Value: {{ output }}
</template>

