<template>
  <footer class="bg-[#8b6f47] text-white mt-24">
    <div class="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

      <!-- Marca -->
      <div>
        <h3 class="font-bold text-lg mb-2">
          MUSHROOMANIA 🍄
        </h3>
        <p class="text-sm text-white/80 max-w-xs">
          Hongos naturales para tu salud y bienestar.
        </p>
      </div>

      <!-- Enlaces -->
      <div>
        <h4 class="font-semibold mb-3">Enlaces</h4>
        <ul class="space-y-2 text-sm text-white/80">
          <li><router-link to="/" class="hover:text-white">Inicio</router-link></li>
          <li><router-link to="/productos" class="hover:text-white">Productos</router-link></li>
          <li><router-link to="/recetas" class="hover:text-white">Recetas</router-link></li>
          <li><router-link to="/contacto" class="hover:text-white">Contacto</router-link></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div>
        <h4 class="font-semibold mb-3">Contáctanos</h4>
        <ul class="space-y-2 text-sm text-white/80">
          <li>WhatsApp</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>

    </div>

    <div class="border-t border-white/20 text-center py-4 text-xs text-white/70">
      © 2025 MUSHROOMANIA 🍄 — Todos los derechos reservados
    </div>
  </footer>
</template>
