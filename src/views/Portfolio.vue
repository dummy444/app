<template>
  <div class="py-5 mt-3 mt-lg-5">
    <section>
      <div class="container-xl">        
        <div class="portfolio-text text-center">
          <h2 class="d-inline-block page-title mb-4">portfolio</h2>
          <p class="d-none d-md-block  mb-5">
            Lorem ipsum dolor sit amet, Aenean et nequeeger a commodo velit, a bibendum quam. Integer faucibus purus id congue preti
          </p>
        </div>
        <section class="portfolio-tab mb-5">
          <div class="d-flex gap-1 gap-md-4 justify-content-center">
            <button 
              class="btn"
              @click="activePf = 'mobileApp'"
              :class="activePf==='mobileApp' ? 'btn-danger' : 'btn-outline-secondary' "
              >
              Mobile App
            </button>
            <button 
              class="btn"
              @click="activePf = 'resWeb'"
              :class="activePf==='resWeb' ? 'btn-danger' : 'btn-outline-secondary' "
              >
              Responsive Web
            </button>
            <button 
              class="btn"
              @click="activePf = 'frontWeb'"
              :class="activePf==='frontWeb' ? 'btn-danger' : 'btn-outline-secondary' "
              >
              Frontend Web
            </button>
          </div>
        </section>
        <div class="">
          <div class="row row-gap-4">           
            <slot v-if="activePf === 'mobileApp'">
              <div class="col-sm-6 col-lg-4 col-xl-3"
                v-for="(item,idx) in mobileApps" :key="idx"
                data-bs-toggle="modal" :data-bs-target="`#item${idx}`" >
                <div class="card" style="cursor:pointer;">
                  <div class="card-img-wrap">
                    <img :src="item.image" class="card-img-top h-100 object-fit-cover" alt="image">
                  </div>               
                  <div class="card-img-overlay"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">Some quick example text to build on the card's content.</p>
                  </div>
                </div> 
                <div class="modal" :id="`item${idx}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">                      
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ item.title }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img :src="item.image" alt="">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div> 
            </slot>

            <slot v-if="activePf === 'resWeb'">
              <div class="col-sm-6 col-lg-4 col-xl-3"
                v-for="(res,resIdx) in resWebs" :key="resIdx" >
                <div class="card">
                  <div class="card-img-wrap">
                    <img :src="res.image" class="card-img-top h-100 object-fit-cover" alt="image">
                  </div>               
                  <div class="card-img-overlay"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{ res.title }}</h5>
                    <p class="card-text">Some quick example text to build on the card's content.</p>
                  </div>
                </div> 
              </div> 
            </slot>

            <slot v-if="activePf === 'frontWeb'">
              <div class="col-sm-6 col-lg-4 col-xl-3"
                v-for="(front,frontIdx) in frontWebs" :key="frontIdx" >
                <div class="card">
                  <div class="card-img-wrap">
                    <img :src="front.image" class="card-img-top h-100 object-fit-cover" alt="image">
                  </div>               
                  <div class="card-img-overlay"></div>
                  <div class="card-body">
                    <h5 class="card-title">{{ front.title }}</h5>
                    <p class="card-text">Some quick example text to build on the card's content.</p>
                  </div>
                </div> 
              </div> 
            </slot>                   
          </div>
        </div>        
      </div>
    </section>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '../components/Footer.vue'

const activePf = ref('mobileApp')

const mobileAppImg = 'https://developermedia.com/wp-content/uploads/2014/01/iStock_000019780418Small.jpg';
const responsiveWebImg = 'https://cdn.dcodegroup.com/5afbc259dbdccdcode-group-responsive-web-designpng.png'
const frontWebImg = 'https://kilistra.eu/img/blog/07-01.png'


const mobileApps = [
  { title: 'Mobile App1', image:'https://developermedia.com/wp-content/uploads/2014/01/iStock_000019780418Small.jpg' },
  { title: 'Mobile App2', image: "https://cdn.acodez.in/wp-content/uploads/2022/03/What-is-a-mobile-app-feature-image.jpg" },
  { title: 'Mobile App3', image: "https://strategypeak.com/wp-content/uploads/2015/05/smart-phone-apps-e1431787301463.jpg" },
  { title: 'Mobile App4', image: mobileAppImg },
  { title: 'Mobile App5', image: mobileAppImg }
]

const resWebs = [
  { title: 'Responsive Web1', image: responsiveWebImg },
  { title: 'Responsive Web2', image: responsiveWebImg },
  { title: 'Responsive Web3', image: responsiveWebImg },
  { title: 'Responsive Web4', image: responsiveWebImg },
  { title: 'Responsive Web5', image: responsiveWebImg },
  { title: 'Responsive Web6', image: responsiveWebImg },
  { title: 'Responsive Web7', image: responsiveWebImg }
]

const frontWebs = [
  { title: 'Frontend Web1', image: frontWebImg },
  { title: 'Frontend Web2', image: frontWebImg },
  { title: 'Frontend Web3', image: frontWebImg },
  { title: 'Frontend Web4', image: frontWebImg },
  { title: 'Frontend Web5', image: frontWebImg },
]
</script>

<style lang="scss" scoped>
  .card-img-wrap{
    width:100%;
    height: 300px;
    //padding-bottom: 100%;
    overflow: hidden;
  }
  .card-img-overlay {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.18) 90%, rgba(0,0,0,0.5) 100%);}



.modal {
      --bs-modal-width: 70%;
      text-align: center;
  img {
      max-width:100%
    }
}

  @media (max-width:576px) {
    .btn { font-size: 14px; line-height: 1;
    }
  }



</style>