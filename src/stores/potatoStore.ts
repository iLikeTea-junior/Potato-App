import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Card } from '../flash.cards'
import { type PotatoVideos } from '../cook.potatoes'


export const usePotatoStore = defineStore('PotatoStore', {
  state: () => ({
    users: [] as {
      name: string,
      password: string,
      cardsCollected: Card[],
      videosSaved: PotatoVideos[]
    }[]
  }),

  getters: {
    getUser: (state) => {
      return (name: string) => state.users.find(u => u.name === name);
    },

    getCardsCollected: (state) => {
      return (name: string) => state.users.find(u => u.name === name)?.cardsCollected
    },

    getVideosSaved: (state) => {
      return (name: string) => state.users.find(u => u.name === name)?.videosSaved
    },
    
    getCard: (state) => {
      return (user: string, cardId: number) => state.users.find(u => u.name === user)?.cardsCollected.find(c => c.id == cardId);
    },

    getVideo: (state) => {
      return (user: string, videoId: number) => state.users.find(u => u.name === user)?.videosSaved.find(v => v.id === videoId);
    }
  },

  actions: {
    loadPotatoFromStorage() {
      const saved = localStorage.getItem("users");
      this.users = saved ? JSON.parse(saved) : [];
    },

    updatePotatoStorage() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },

    addNewUser(name: string, password: string) {
      this.users.push({name: name, password: password, cardsCollected: [], videosSaved: []})
      this.updatePotatoStorage()
    },

    addCardToCollection(user: string, card: Card) {
      const currentUser = this.getUser(user)
      if (currentUser) {
        const exists = currentUser.cardsCollected.find(c => c.id === card.id)
        if (!exists) currentUser.cardsCollected.push(card);
      }
      this.updatePotatoStorage()
    },

    saveVideoToCollection(user: string, video: PotatoVideos) {
      const currentUser = this.getUser(user);
      if (currentUser) {
        const videoAlreadySaved = currentUser.videosSaved.find(v => v.id === video.id)

        if (videoAlreadySaved) {
          currentUser.videosSaved = currentUser.videosSaved.filter(v => v.id !== video.id) 
        } else {
          currentUser.videosSaved.push(video)
        }
        this.updatePotatoStorage()
      }
    },

    unSaveAllVideos(user: string) {
      const currentUser = this.users.find(u => u.name === user);
      if (currentUser) currentUser.videosSaved.length = 0;
      this.updatePotatoStorage()
    }
  }
})
