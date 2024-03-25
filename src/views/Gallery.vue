<template>
  <div class="py-5 mt-3 mt-lg-5">
    <section>
      <div class="container-xl">
        <div class="gallery-text text-center">
          <h2 class="d-inline-block page-title mb-4">gallery</h2>
          <p class="d-none d-md-block mb-5">
            Lorem ipsum dolor sit amet, Aenean et nequeeger a commodo velit, a bibendum quam. Integer faucibus purus id congue preti
          </p>
        </div>

        <section class="gallery-wrap border">
          <div class="row row-gap-4">
            <div class="col-6 col-md-4 col-xl-3" v-for="n in 20">
              <img 
                class="ratio ratio-1x1 object-fit-cover" 
                :src="`https://picsum.photos/id/${150 + n}/500/300`" 
                :lazy-src="`https://picsum.photos/id/${150 + n}/10/6`" 
                alt="" >
            </div>            
          </div>
        </section>
      </div>   
    </section>  
  </div>
  <Footer></Footer>
</template>

<script setup>
  import Footer from '../components/Footer.vue'
</script>

<style lang="scss" scoped>

</style>