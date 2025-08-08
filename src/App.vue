<script setup lang="ts">
import { SelectableListPrimitiveStory, SelectableListComplexStory, AppInputStory, AppInputNonGenericStory } from '@/stories';
</script>


<template>
  <section>
    <SelectableListPrimitiveStory />
  </section>

  <section>
    <SelectableListComplexStory />
  </section>

  <section>
    <AppInputStory />
  </section>

  <section>
    <AppInputNonGenericStory />
  </section>
</template>

