import { defineStore } from "pinia";

export const useAuthStore = defineStore('authenticationStore', {
    state: () => ({
        loggedIn: false as boolean,
        user: '' as string | ''
    }),

    actions: {
        loadLoginFromStorage() {
            const user = localStorage.getItem("user")
            const loggedIn = localStorage.getItem("loggedIn")

            this.loggedIn = loggedIn ? JSON.parse(loggedIn) : false
            this.user = user ? JSON.parse(user) : ''
        },

        saveLoginToStorage() {
            localStorage.setItem("loggedIn", JSON.stringify(this.loggedIn))
            localStorage.setItem("user", JSON.stringify(this.user))
        },

        login(userName: string) {
            this.loggedIn = true;
            this.user = userName
            this.saveLoginToStorage()
        },

        logout() {
            this.loggedIn = false;
            this.user = '';
            this.saveLoginToStorage()
        }
    }
})