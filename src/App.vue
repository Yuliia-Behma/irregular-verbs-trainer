<template>
  <nav>
    <RouterLink to="/">Start training</RouterLink> | 
    <RouterLink to="/verbs-list">Verbs List</RouterLink>
  </nav>
 
  <RouterView></RouterView>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>

</style>
