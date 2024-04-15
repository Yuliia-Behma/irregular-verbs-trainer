<template>
  <header>
    <img src="#" alt="main-icon" @click="passingToHome"/>
    <h1>VerbFit Trainer</h1>
    <div class="burger-menu"></div>
  </header>
  <RouterView></RouterView>
  <footer>
    <nav>
      <RouterLink to="/">
        <div class="icon"></div>
        <span class="link-name">Home</span>
      </RouterLink>

      <RouterLink to="/rules">
        <div class="icon"></div>
        <span class="link-name">Rules</span>
      </RouterLink>

      <RouterLink to="/verbs-list"
        ><div class="icon"></div>
        <span class="link-name">Catalog</span>
      </RouterLink
      >
    </nav>
  </footer>
</template>

<script>
import router from '@/router';

export default {
  name: "App",
  setup() {
    function passingToHome() {
      router.replace('/');
    }
    return {
      passingToHome
    }
  }
};
</script>

<style>
.router-link-active{
  color: rgb(64, 153, 235);
}
header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
footer nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}

</style>
