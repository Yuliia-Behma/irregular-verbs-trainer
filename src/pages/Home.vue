<script setup>
import router from '@/router';

function passing() {
  router.replace('/choose-level');
}
</script>

<template>
  <div class="hello">
    <h2>Greetings, friend!</h2>
    <p>Dive into the wonderful world of English with our app!</p>
    <p>Learn irregular verbs with ease and fun. Let's make your learning enjoyable and productive together!</p>
    <button @click="passing">
      <span>Start</span>
      <img src="#" alt="icon">
    </button>
    
  </div>
</template>

<style scoped>

</style>
