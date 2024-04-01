import { defineStore } from 'pinia';
import * as fs from 'fs';

export const useVerbsStore = defineStore({
    id: 'verb',
    state: () => ({
        currentVerbs: [],
        loading: true,
    }),
    actions: {
        getCurrentGameVerbsList(level) {
            const wordsData = JSON.parse(fs.readFileSync('../jsonData/verbsData.json'));
            const currentLevelArr = wordsData[`${level}`];
            const sortedArr = currentLevelArr.sort(Math.random - 0.5);
            console.log(sortedArr);
            this.currentVerbs = sortedArr.slise(0, 20);
            this.loading = false;
        }
    }
})