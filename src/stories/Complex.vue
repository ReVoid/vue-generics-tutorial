<script setup lang="ts">
import { ref } from 'vue';

import {
  SelectableList,
} from '@/components/SelectableList';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

type People = Person[];

const items: People = [
  { firstName: 'Homer', lastName: 'Simpson', age: 39 },
  { firstName: 'Marge', lastName: 'Simpson', age: 36 },
  { firstName: 'Bart', lastName: 'Simpson', age: 10 },
];

const selected = ref<string>();

function onUpdateSelected(payload: typeof selected.value): void {
  return console.log(`update:selected: ${payload}`);
}
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
    :selector="(item) => `${item.firstName} has been selected`"
    :title="(item) => `${item.firstName} ${item.lastName} (${item.age})`"
    @update:selected="onUpdateSelected"
  />
</template>


