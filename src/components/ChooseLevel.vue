<template>
  <div v-if="!allow" class="choose-level-container">
    <fieldset @keyup.enter="startGameBtn">
      <legend>Choose level</legend>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="easy"
          id="easyLevel"
          v-model="level"
        />
        <label for="easyLevel">Easy</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="medium"
          id="mediumLevel"
          v-model="level"
        />
        <label for="easyLevel">Medium</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="hard"
          id="hardLevel"
          v-model="level"
        />
        <label for="easyLevel">Hard</label>
      </div>
    </fieldset>

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
span {
  color: rgb(6, 133, 91);
  font-weight: 800;
}
button {
  margin: 10px;
}
</style>
