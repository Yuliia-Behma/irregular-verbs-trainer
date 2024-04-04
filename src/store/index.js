import { defineStore } from 'pinia';
import json from '../jsonData/verbsData.json'

export const useVerbsStore = defineStore({
    id: 'verb',
    state: () => ({
        currentVerbs: [],
    }),
    actions: {
        getCurrentGameVerbsList(level) {
            const wordsData = json;
            console.log(level.value)
            const currentLevelArr = wordsData[`${level.value}`];
            console.log(currentLevelArr)

            const sortedArr = currentLevelArr
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)

            console.log(sortedArr)
            sortedArr.length = 20;
            this.currentVerbs = sortedArr
            console.log(this.currentVerbs)
        }
    }
})