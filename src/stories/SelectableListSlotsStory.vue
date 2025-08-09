<script setup lang="ts">
import { ref } from 'vue';

import { SelectableList } from '@/components';


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
</script>

<template>
  <SelectableList
    v-model:selected="selected"
    :items="items"
    :selector="(item) => `${item.firstName} has been selected`"
    :title="(item) => `${item.firstName} ${item.lastName}`"
  >
    <template #item="{ item, items }">
      {{ `${ items.indexOf(item) +  1}.`}} {{ item.firstName }} {{ item.lastName }}
    </template>
  </SelectableList>>
</template>
