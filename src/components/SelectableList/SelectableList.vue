<script setup lang="ts" generic="T, R">
import {
  SelectableListItem,
  type ISelectableList,
} from './index';

import { isEqual } from 'lodash';
import { isString, isNumber, isObject, isFunction } from '@sniptt/guards';

type Types = ISelectableList<T, R>;

const props = withDefaults(defineProps<Types['Props']>(), {
  items: () => [] as T[],
  selector: (item: T) => item as unknown as R,
});

defineEmits<Types['Emits']>();

const slots = defineSlots<Types['Slots']>();

const selected = defineModel<Types['Props']['selected']>('selected', {
  required: false,
  default: undefined,
});

function title(item: typeof props.items[number]): string {
  // Ключ элемента
  if (isString(props.title) && isObject(item) && props.title in item) {
    return item[props.title] as string ?? '';
  }

  // Кастомный компаратор
  if (isFunction(props.title)) {
    return props.title(item);
  }

  // Примитив
  if (isString(item) || isNumber(item)) {
    return `${item}`;
  }

  return '';
}

function select(item: typeof props.items[number]): void {
  selected.value = props.selector(item);
}

function isSelected(item: typeof props.items[number]): boolean {
  return isEqual(props.selector(item), selected.value);
}
</script>
<template>
  <nav class="selectable-list">
    <!-- Slot "Default" -->
    <template v-if="!slots.item">
      <slot
        name="default"
        :items="props.items"
      >
        <SelectableListItem
          v-for="(item, index) in items"
          :key="index"
          :title="title(item)"
          :selected="isSelected(item)"
          @click="select(item)"
        />
      </slot>
    </template>

    <!-- Slot "Item" -->
    <template v-else>
      <SelectableListItem
        v-for="(item, index) in props.items"
        :key="index"
        :title="title(item)"
        :selected:="isSelected(item)"
        @click="select(item)"
      >
        <slot
          name="item"
          :item="item"
          :items="props.items"
        />
      </SelectableListItem>
    </template>
  </nav>
</template>

<style lang="scss">
.selectable-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
