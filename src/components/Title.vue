<template>
  <RouterLink class="navbar-brand fs-2 flex-grow-1 flex-lg-grow-0 " to="/">
    :: Vue-<span class="text-danger">Bootstrap</span> App
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
  .navbar-brand {
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Teko', sans-serif;
  }
</style>