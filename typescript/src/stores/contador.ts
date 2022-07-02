import { defineStore } from 'pinia'

export const almacenContador = defineStore({
  id: 'contador',
  state: () => ({
    contador: 0
  }),
  getters: {
    doubleCount: (state) => state.contador * 2
  },
  actions: {
    increment() {
      this.contador++
    }
  }
})
