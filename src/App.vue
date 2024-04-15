<template>
  <header>
    <RouterLink to="/">
      <img src="#" alt="main-icon">
    </RouterLink>
    <h1>VerbFit Trainer</h1>
  </header>
  <RouterView></RouterView>
  <footer>
    <nav>
      <RouterLink to="/">
        <div class="icon"></div>
        <p class="link-name">Home</p>
      </RouterLink>
      <RouterLink to="/rules">
        <div class="icon"></div>
        <p class="link-name">Rules</p>
      </RouterLink>
      <RouterLink to="/verbs-list"
        ><div class="icon"></div>
        <p class="link-name">Catalog</p></RouterLink
      >
    </nav>
  </footer>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
