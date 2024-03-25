<template>
  <div class="border-top">
    <div class="container-xl">
      <footer class="d-flex justify-content-between align-items-center py-3">
        <div class="">
          <Title v-on:click="$router.push('/')" style="filter:opacity(0.7) saturate(0.3); transform: scale(0.7);" class="fs-3"></Title>
        </div>
        <ul class="nav fs-5 d-none d-sm-flex">
          <li class="ms-3" v-for="icon in icons">
            <RouterLink to="" class="text-secondary"><i class="bi" :class="icon"></i></RouterLink>
          </li>
        </ul>       
        

      </footer>
    </div>
  </div>
</template>

<script setup>
  import Title from './Title.vue'

  const icons =[
    'bi-facebook',
    'bi-twitter',
    'bi-instagram',
    'bi-youtube'
  ]
</script>


<style lang="scss" scoped>

</style>