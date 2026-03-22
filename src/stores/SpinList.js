import { defineStore } from 'pinia'

export const useSpinListStore = defineStore('spinList', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(name) {
      this.items.push({ name })
    },
    deleteItem(index) {
      this.items.splice(index, 1)
    }
  }
})      