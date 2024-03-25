<template>
  <div class="py-5 mt-3 mt-lg-5">
    <section>
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-5 d-flex align-items-center justify-content-center mb-5 mb-lg-0">
            <img class="aboutImg w-100" src="./../assets/about.png" alt="">
          </div>
          <div class="col-lg-7 ps-lg-5">
            <h2 class="about-text page-title">about us</h2>
            <p class="mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nequeeger a commodo velit, a bibendum quam. Integer faucibus purus id congue preti
            </p>
            <article>            
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-all text-success me-2"></i>An item</li>
                <li class="list-group-item"><i class="bi bi-check-all text-success me-2"></i>A second item</li>
                <li class="list-group-item"><i class="bi bi-check-all text-success me-2"></i>A third item</li>
                <li class="list-group-item"><i class="bi bi-check-all text-success me-2"></i>A fourth item</li>
                <li class="list-group-item"><i class="bi bi-check-all text-success me-2"></i>And a fifth one</li>
              </ul>
            </article>

            <p class="mt-4 text-body-tertiary fs-7">
              Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit. Aenean et nequeeger<br> a commodo velitamet, consectetur adipiscin<br>g elit. Aenean et nequeeger a commodo velit, a bibendum quam. Integer faucibus purus id congue preti
            </p>

          </div>          
        </div>
      </div>
    </section>    
  </div>
  <Footer></Footer>
</template>

<script setup>
  import Footer from '../components/Footer.vue'
</script>

<style lang="scss" scoped>
  .aboutImg {
    @media (max-width:992px){
      width:75% !important;
    }
  }
</style>