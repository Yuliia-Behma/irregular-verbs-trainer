<template>
  <div v-if="!allow" class="choose-level-container" @keyup.enter="startGameBtn">
      <h2>To start training, choose a level</h2>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="easy"
          id="easyLevel"
          v-model="level"
        />
        <label for="easyLevel">Beginner</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="medium"
          id="mediumLevel"
          v-model="level"
        />
        <label for="mediumLevel">Intermediate</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="hard"
          id="hardLevel"
          v-model="level"
        />
        <label for="hardLevel">Advanced</label>
      </div>

    <button @click="startGameBtn" :disabled="!level">Start</button>
  </div>
  
    <GameCard @restart="refresh" v-if="level && allow" :level="level"></GameCard>
</template>

<script>
import { defineComponent, ref } from "vue";
import GameCard from "./GameCard.vue";

export default defineComponent({
  name: "ChooseLevel",
  components: {GameCard},

  setup() {
    const level = ref("");
    const allow = ref(false);
    
    function startGameBtn() {
      allow.value = true;
    }

    function refresh() {
      level.value = "";
      allow.value = false
    }

    return {
      allow,
      level,
      startGameBtn,
      refresh
    };
  },
});
</script>

<style scoped>
button{
  margin: 10px;
}

label{
  display: block;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 7px;
  margin: 8px;
}
input{
  display: none;
}
#easyLevel:checked + label{
  background-color: rgb(97, 211, 173);
}
#mediumLevel:checked + label{
  background-color: rgb(253, 203, 3);
}
#hardLevel:checked + label{
  background-color: rgb(234, 131, 120);
}
</style>
