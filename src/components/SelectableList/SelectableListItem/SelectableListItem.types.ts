import { type VNode } from 'vue';

export type ISelectableListItem = {
  Props: {
    title?: string;
    selected?: boolean;
  };

  Slots: {
    default?: () => VNode[];
  };
};
