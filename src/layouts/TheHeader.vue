<template>
  <nav class="navbar navbar-expand-lg bg-white shadow" aria-label="Offcanvas navbar large">
    <div class="container-xl">
      <Title class="me-5"></Title>      

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
            <span>WELCOME</span><br>
            <Title></Title> 
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li v-for="(menu,idx) in menus" class="nav-item" :key="idx">
              <RouterLink :to="menu.route" class="nav-link" aria-current="page" >{{ menu.title  }}</RouterLink>
            </li>
          </ul>
      <!-- form 있던곳 -->
        </div>
      </div> <!-- offcanvas END -->

      <div class="icons d-none d-sm-flex column-gap-2 column-gap-lg-4">
        <routerLink to="/"><i class="bi bi-person-circle"></i></routerLink>
        <routerLink to="/"><i class="bi bi-wechat"></i></routerLink>
        <routerLink to="/"><i class="bi bi-bell-fill"></i></routerLink>
      </div>

      <button class="navbar-toggler border-0 ps-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    </div>
  </nav>  
</template>

<script setup>
import Title from '@/components/Title.vue';

// 배열
const menus = [
  { route: "/", title: "Home" },
  { route: "about", title: "About" },
  { route: "portfolio", title: "Portfolio" },
  { route: "gallery", title: "Gallery" },
  { route: "contact", title: "Contact" },
]



</script>

<style lang="scss" scoped>
  .navbar-toggler:focus {
    box-shadow: none;
  }
.nav-item{
margin:0 3px;
text-transform: uppercase;

  .nav-link{
    font-weight: 600;

    &:hover {color: var(--bs-danger) };
    &.router-link-exact-active {color: var(--bs-danger) }
  }

  @media (max-width:992px){
    font-size: 22px;
  }
}

  .icons a { color:var(--bs-secondary)}
</style>