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

    return{currentVerbs, getCurrentGameVerbsList}
})


// export const useVerbsStore = defineStore({
//     id: 'verb',
//     state: () => ({
//         currentVerbs: [],
//     }),
//     actions: {
//         getCurrentGameVerbsList(level) {
//             const wordsData = json;
//             // console.log(level)
//             const currentLevelArr = wordsData[`${level}`];
//             // console.log(currentLevelArr)

//             const sortedArr = currentLevelArr
//                 .map(value => ({ value, sort: Math.random() }))
//                 .sort((a, b) => a.sort - b.sort)
//                 .map(({ value }) => value)

//             // console.log(sortedArr)
//             sortedArr.length = 20;
//             this.currentVerbs = sortedArr
//             // console.log(this.currentVerbs)
//         }
//     }
// })