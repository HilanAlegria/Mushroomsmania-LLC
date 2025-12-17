<template>
  <button
    class="admin-toggle"
    @click="toggleAdmin"
  >
    {{ esAdmin ? "Salir Admin" : "Entrar Admin" }}
  </button>
</template>

<script>
export default {
  name: "AdminToggle",

  data() {
    return {
      esAdmin: false
    };
  },

  mounted() {
    this.esAdmin = localStorage.getItem("adminMode") === "true";
  },

  methods: {
    toggleAdmin() {
      this.esAdmin = !this.esAdmin;
      localStorage.setItem("adminMode", this.esAdmin);

      if (this.esAdmin) {
        this.$router.push("/admin");
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.admin-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;

  padding: 12px 18px;
  border-radius: 999px;

  background: #39ff14;
  color: #0b0f0c;
  font-weight: 700;

  box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
  transition: all 0.25s ease;
}

.admin-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.7);
}
</style>
