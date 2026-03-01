<script setup lang="ts">
import { useAuthStore } from './stores/authenticationStore';

import ButtonTabs from './components/PotatoButton.vue';
import LoginPopup from './components/LoginPopup.vue';
import CreateAccountPopup from './components/CreateAccountPopup.vue';

import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { usePotatoStore } from './stores/potatoStore';

const potatoStore = usePotatoStore()
potatoStore.loadPotatoFromStorage()

const authStore = useAuthStore()
authStore.loadLoginFromStorage()

const route = useRoute()
console.log(route.params.catchAll)
const router = useRouter()
const activePopup = ref<'login' | 'createAccount' | null>(null)

const loggedIn = computed(() => authStore.loggedIn)
const currentUserName = computed(() => authStore.user)

const isScrolled = ref(false)

function scroll() {
  if (window.scrollY > 0) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

function closePopup() {
  activePopup.value = null
}

function switchToCreateAccount() {
  closePopup()
  activePopup.value = 'createAccount'
}

function login(userName: string) {
  authStore.login(userName)
  closePopup()
}

function logout() {
  router.push({ name: "home" })
  authStore.logout()
}

onMounted(() => {
  window.addEventListener('scroll', scroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroll)
})

</script>

<template>
  <header :class="{ sticky: route.meta.stickyHeader, transparent: route.meta.transparentHeader && isScrolled }">
    <div class="left-side">
      <router-link :to="{name: 'home'}">
        <img src="/src/assets/images/pixelatedPotato.png" alt="Clickable Potato Icon"/>
      </router-link>
      <h1>Potato World</h1>
    </div>
  
    <div class="right-side"> <!--login button on top right-->
      <ButtonTabs @click="activePopup = 'login'" v-if="!loggedIn">Login</ButtonTabs>

      <template v-else>
        <router-link :to="{name: 'profile'}">
          <h1 id="name"><span class="user-name">{{ currentUserName }}</span></h1>
        </router-link>
        <ButtonTabs @click="logout">Logout</ButtonTabs>
      </template>
    </div>
  </header>

  <LoginPopup v-if="activePopup === 'login'"
    @close-tab="closePopup"
    @create-account="switchToCreateAccount"
    @login="login"
    />
  
    <CreateAccountPopup v-if="activePopup === 'createAccount'"
      @close-tab="closePopup"
      @login="login"
    />

  <router-view :user="currentUserName"/> <!--The current page-->

</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  background-color: #d900ff;
  padding: 20px;
  max-height: 100px;
}

/* if sticky it will make the header scroll to*/
.sticky { 
  position: sticky;
  top: 0;
  z-index: 1;
  transition: opacity 0.5s;
}

/* if it starts to scroll, change the opacity*/
.transparent { 
  opacity: 70%;
}

/* when hovered make it visible again*/
header.sticky:hover{
  opacity: 1;
}

/* When reaching the top header becomes fully visible*/

.left-side {
  display: flex;
  align-items: center;
}

img {
  max-width: 100px;
  max-height: 100px;
  transition: 0.1s;
}

img:hover,
img:focus-visible {
  max-width: 103px;
  max-height: 103px;
  cursor: pointer;
  content: url("/src/assets/images/shadowPotato.png");
}

.right-side{
  display: flex;
  column-gap: 35px;
  align-items: center;
}

.user-name {
  display: inline-block;
  font-size: 45px;
  text-shadow: 4px 4px 3px black;
  color: white;
  transition: transform 0.45s ease, text-shadow 0.45s linear;
}

.user-name:hover,
.user-name:focus-visible {
  cursor: pointer;
  transform: scale(1.1);
}
</style>