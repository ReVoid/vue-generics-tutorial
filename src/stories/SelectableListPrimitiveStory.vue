<script setup lang="ts">
import { ref } from 'vue';

import { SelectableList } from '@/components';

const items = [1, 2, 3];

const selected = ref<number>();
</script>

<template>
  <p>
    Items: {{ items }}
  </p>
  <p>
    Selected: {{ selected }}
  </p>
  <SelectableList
    v-model:selected="selected"
    :items="items"
  />
</template>


