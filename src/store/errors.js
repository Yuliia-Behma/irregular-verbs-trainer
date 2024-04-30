import { defineStore } from 'pinia';

export const useErrorsStore = defineStore({
    id: 'errors',
    state: () => ({
        errorsArray: [],
    }),
    actions: {
        addError(err) {
            this.errorsArray.push(err)
        }
    }
})