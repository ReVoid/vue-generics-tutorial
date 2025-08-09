<script setup lang="ts">
import {
  SelectableListPrimitiveStory,
  SelectableListComplexStory,
  SelectableListSlotsStory,
  AppInputStory,
  AppInputNonGenericStory,
} from '@/stories'
</script>

<template>
  <section>
    <SelectableListPrimitiveStory />
  </section>

  <section>
    <SelectableListComplexStory />
  </section>

  <section>
    <SelectableListSlotsStory />
  </section>

  <section>
    <AppInputStory />
  </section>

  <section>
    <AppInputNonGenericStory />
  </section>
</template>
