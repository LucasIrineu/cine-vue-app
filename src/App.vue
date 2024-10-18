<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGlobalStore } from './store/GlobalStore'

const store = useGlobalStore()
</script>

<template>
  <header
    class="d-flex align-items-center justify-content-center pt-2 shadow-lg"
    :onclick="store.clearRelated()"
  >
    <RouterLink to="/">
      <h1 class="text-warning fs-1 fw-light">
        <span class="text-white fs-3 fw-lighter">Cine</span>Vue
      </h1>
    </RouterLink>
  </header>
  <main class="detail-container">
    <RouterView />
  </main>
</template>

<style>
body {
  background: rgb(30, 30, 30);
}

header {
  background: rgb(10, 10, 10);
}

a {
  text-decoration: none;
}

h1:hover {
  text-decoration: underline solid white 1px;
}

.detail-container {
  animation: show 2.5s 100ms forwards;

  opacity: 0;
  transform-origin: top center;

  .detail-img {
    width: 350px;
  }
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
