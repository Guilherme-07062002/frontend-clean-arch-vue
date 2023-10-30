import { defineStore } from 'pinia';
import { initialState } from '.';

export const CounterStore = defineStore({
  id: 'counter',
  state: () => ({
    ...initialState,
  }),
  actions: {
    increment() {
      this.count++;
    },
    getCount() {
      return this.count;
    },
  },
});

//Export the store module type
export type CounterStore = ReturnType<typeof CounterStore>;