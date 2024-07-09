import { defineStore } from 'pinia';
import { ref } from 'vue';
import json from '../jsonData/verbsData.json'

export const useVerbsStore = defineStore('verb', () =>{
    
    const currentVerbs = ref([]);

    const getCurrentGameVerbsList = (level) => {
        const currentLevelArr = json[`${level}`];
        const sortedArr = currentLevelArr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        sortedArr.length = 20;
        currentVerbs.value = sortedArr;
    }

    const $reset = () => {
        currentVerbs.value = [];
  }

    return{currentVerbs, getCurrentGameVerbsList, $reset}
})
