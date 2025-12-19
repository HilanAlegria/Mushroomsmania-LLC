import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAdmin: false
  }),

  actions: {
    entrarAdmin() {
      this.isAdmin = true;
    },
    salirAdmin() {
      this.isAdmin = false;
    }
  }
});
