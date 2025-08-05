<script setup lang="ts">
import { type ISelectableListItem } from './index.ts'

const props = withDefaults(defineProps<ISelectableListItem['Props']>(), {
  title: '',
  selected: false,
});
</script>

<template>
  <button :class="[
    'selectable-list-item',
    { 'selectable-list-item--selected': props.selected },
  ]">
    <!-- Slot "Default" -->
    <slot name="default">
      {{ props.title }}
    </slot>
  </button>
</template>

<style lang="scss">
.selectable-list-item {
  background: white;
  color: black;
  height: fit-content;
  width: fit-content;
  min-width: 100px;
  padding: 4px;

  &--selected {
    background: black;
    color: white;
  }
}
</style>
