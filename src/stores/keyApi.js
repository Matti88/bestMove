//store for the API_Key

import { defineStore } from 'pinia'

export const useKeyApi = defineStore({
  id: 'keyApi',
  state: () => ({
    InsertedAPIstring : "6ff1e1cca8fa4e248e37d74ae59144af",
    ConfirmedAPIstring: "6ff1e1cca8fa4e248e37d74ae59144af"
  }),
  actions: {
    confirmKey(){
      console.log("key was confirmed");
      this.$patch(
        {
          ConfirmedAPIstring: this.$state.InsertedAPIstring
        }      )
    },
    getConfirmation(){
      const confirmation = !(this.$state.ConfirmedAPIstring == "");
      return confirmation
      
    },
    resetKey(){
      console.log("key was reset");
      this.$patch(
        {
          InsertedAPIstring : "",
          ConfirmedAPIstring: ""
        }
      )
    }
  }
})
