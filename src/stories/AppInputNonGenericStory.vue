<script setup lang="ts">
import { ref } from 'vue'

import { AppInputNonGeneric } from '@/components'

const output = ref<string>();

// ❌ You can't use it that way because `payload` provided by the component means `string | number | undefined`
function onChange(payload: string | undefined): boolean {
  return payload ? payload.startsWith('x') : false;
}
</script>

<template>
  <!-- @vue-ignore for demo purpose only -->
  <AppInputNonGeneric
    v-model="output"
    @update:model-value="onChange"
  />

  Value: {{ output }}
</template>

