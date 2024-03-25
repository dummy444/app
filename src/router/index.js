import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Portfolio from "@/views/Portfolio.vue"
import Gallery from "@/views/Gallery.vue"
import Contact from "@/views/Contact.vue"
import { createRouter, createWebHistory } from "vue-router"

//라우트(열리게될 페이지들) 정보를 배열로
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history:createWebHistory('/'),
  routes
})

export default router;