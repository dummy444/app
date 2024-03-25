<template>
  <div class="py-5 mt-3 mt-lg-5">
    <section>
      <div class="container-xl">
        <div class="gallery-text text-center">
          <h2 class="d-inline-block page-title mb-4">Contact</h2>
          <p class="d-none d-md-block mb-5">
            구글맵에서 원하는 지역 검색후 공유->지도퍼가기
          </p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4467.003943881762!2d126.76522990936802!3d37.657460443085704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8541726f44d1%3A0xe2a7cae3a3b21eed!2z7J287IKw7Zi47IiY6rO17JuQ!5e0!3m2!1sko!2skr!4v1711332964195!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-lg-6">
            <form @submit.prevent = "reset">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="contactInfo.email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                v-model="contactInfo.password">
              </div>              
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                v-model="contactInfo.message"></textarea>
              </div>
              <select class="form-select mb-3" aria-label="Default select example"
              v-model="contactInfo.select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="flexCheckChecked" 
                v-model="contactInfo.check" >
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-danger">submit</button>
              </div>              
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { reactive } from 'vue';
import Footer from '../components/Footer.vue'

const reset =()=>{
  contactInfo.email='',
  contactInfo.password='',
  contactInfo.message='',
  contactInfo.select='',
  contactInfo.check=false
}
const contactInfo = reactive({
  email:'',
  password:'',
  message:'',
  select:'',
  check:false
})
</script>

<style lang="scss" scoped>

</style>