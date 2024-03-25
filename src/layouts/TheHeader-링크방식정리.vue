<template>
  
  <nav class="bg-warning">
    <h1>Vue Router 링크방식들</h1>
    <a href="http://www.naver.com">naver</a><br>

    <a href="/">1-Home</a> &nbsp;
    <RouterLink to="/">2-Home</RouterLink><br>

    <a href="/about">1-About me</a> &nbsp;
    <RouterLink to="/about">2-About me</RouterLink><br>

    <button @click="$router.push('/')">3-Home</button>
    <button @click="goAbout">3-About me</button>
    <router-link to="/about">3-About me(이전방식)</router-link>   
    <!-- 
  프로그래밍 방식
  $router.push('about')       - 히스토리 스택에 추가
  $router.replace('portfolio')- 히스토리 스택에 추가❌(단순한페이지전환)
  $router.go(-1)      -한단계 이전으로 가기
  -->
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

  const goAbout = ()=>{
    router.push('/about')
  }
</script>

<style lang="scss" scoped>
  
</style>