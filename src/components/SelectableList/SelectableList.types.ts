import { type VNode } from 'vue';

export type ISelectableList<T, R> = {
  Props: {
    items?: T[];
    selector?: (item: T) => R;
    selected?: R;
    title?: (keyof T & string) | ((item: T) => string);
  };

  Emits: {
    (e: 'update:selected', payload: R): void;
  };

  Slots: {
    default?: (props: { items: T[] }) => VNode[];
    item?: (props: { item: T; items: T[] }) => VNode[];
  };
};
