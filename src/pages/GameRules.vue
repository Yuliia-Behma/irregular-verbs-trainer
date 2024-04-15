<script setup>
import router from '@/router';

function backToStart() {
  router.replace('/')
}
</script>

<template>
  <div class="hello">
    <h2>Rules</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur at nam vel, rerum officiis vero explicabo quos alias quisquam veniam provident optio doloremque nostrum nulla cum obcaecati quia sequi commodi repudiandae architecto ducimus! Aut minus atque, non iure id eligendi asperiores nulla illum odio saepe, ducimus explicabo, voluptatibus fugit architecto.</p>
    <button @click="backToStart">
      <!-- <img src="#" alt="icon"> -->
      <span>Back to Start</span>
    </button>
  </div>
</template>

<style scoped>

</style>
