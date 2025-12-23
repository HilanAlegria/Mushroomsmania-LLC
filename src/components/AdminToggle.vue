<template>
  <button
    v-if="!enAdmin || esAdmin"
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

  computed: {
    enAdmin() {
      return this.$route.path.startsWith("/admin");
    }
  },

  mounted() {
    this.esAdmin = localStorage.getItem("adminMode") === "true";
  },

  methods: {
    toggleAdmin() {
      this.esAdmin = !this.esAdmin;
      localStorage.setItem("adminMode", this.esAdmin);

      this.$router.push(this.esAdmin ? "/admin" : "/");
    }
  }
};
</script>

<style scoped>
.admin-toggle {
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 1001;

  padding: 10px 18px;
  border-radius: 999px;

  background: #39ff14;
  color: #0b0f0c;
  font-weight: 700;

  box-shadow: 0 0 18px rgba(57, 255, 20, 0.6);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.admin-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.9);
}
</style>
