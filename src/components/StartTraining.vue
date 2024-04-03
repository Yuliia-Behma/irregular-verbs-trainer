<template>
  <div v-if="!allow" class="choose-level-container">
    <fieldset @keyup.enter="startGameBtn">
      <legend>Choose level</legend>
      <div class="variant-box">
        <input type="radio" name="gameLevel" value="easy" id="easyLevel" v-model="level"/>
        <label for="easyLevel">Easy</label>
      </div>
      <div class="variant-box">
        <input type="radio" name="gameLevel" value="medium" id="mediumLevel" v-model="level" />
        <label for="easyLevel">Medium</label>
      </div>
      <div class="variant-box">
        <input type="radio" name="gameLevel" value="hard" id="hardLevel" v-model="level" />
        <label for="easyLevel">Hard</label>
      </div>
    </fieldset>
    
    <button @click="startGameBtn">Start</button>
  </div>
  <div
    v-else
    class="main-content"
  >
Main after choice
</div>

</template>

<script>
import { defineComponent, ref } from "vue";

import { useVerbsStore } from "@/store";

export default defineComponent({
  name: "StartTraining",

  setup() {
    const verbsStore = useVerbsStore();

    const level = ref("");
    const allow = ref(false)


    function startGameBtn() {
        allow.value = true;
        verbsStore.getCurrentGameVerbsList(level);
        console.log(level.value);
      
      // console.log(level.value);
    }

    return {
      verbsStore,
      allow,
      level,
      startGameBtn
    };
  },
});
</script>

<style scoped></style>
