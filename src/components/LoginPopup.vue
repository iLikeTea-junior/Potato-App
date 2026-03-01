<script setup lang="ts">
import { ref } from 'vue'
import { usePotatoStore } from '@/stores/potatoStore'

const potatoStore = usePotatoStore()
const emit = defineEmits(['closeTab', 'login', 'createAccount'])

const name = ref<string>('')
const password = ref<string>('')

const warningMessage = ref<string>('')

function login() {
    const user = potatoStore.getUser(name.value)

    if (!user) {
        warningMessage.value = 'User not found!'
        return
    }

    if (user && user.password !== password.value) {
        warningMessage.value = 'Wrong password!'
        return
    }

    emit('login', name.value)
}

</script>

<template>
    <div class="overlay">
        <div class="modal">
            <div class="close-button">
                <button aria-label="Close" style="font-weight: bolder; background-color:orangered; min-width: 20px;"
                    @click="$emit('closeTab')">
                    X
                </button>
            </div>

            <form class="field-row-stacked" @submit.prevent> <!--reason why submit.prevent works without a function, is because it reads the first button which in this case is the Login button-->
                <div class="input-box">
                    <label for="text18" style="font-size: 17.5px;">Username :</label>
                    <input id="text18" type="text" autocomplete="off" v-model="name"/>
                </div>


                <div class="input-box">
                    <label for="text19" style="font-size: 17.5px;">Password :</label>
                    <input id="text19" type="password" autocomplete="off" v-model="password"/>
                </div>

                <p v-if="warningMessage" class="warning">{{ warningMessage }}</p>

                <section>
                    <button class="default" type="submit" style="font-size: 17.5px;" @click="login">Login</button>
                    <button class="default" type="button" style="font-size: 17.5px;" @click="$emit('createAccount')">Create Account</button>
                </section>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import "98.css";

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal {
    border: 2px solid purple;
    border-radius: 10px;
    padding: 15px;
    background-color: plum;
    display: flex;
    flex-direction: column;
    padding: 25px;
}

.close-button {
    display: flex;
    justify-content: flex-end;
}

.input-box {
    width: 200px;
    margin: 10px 0px 10px 0px;
}

section {
    display: flex;
    column-gap: 25px;
    align-items: baseline;
}

input#text18, input#text19 {
    padding: 21px 20px 20px 15px;
    font-size: 20px;
    width: 118%;
}

button.default {
    padding: 10px;
    background-color: purple;
    color: white;
}

button:hover {
    cursor: pointer;
}

.warning {
    color: red;
    margin: 0px;
    font-weight: bold;
}

</style>