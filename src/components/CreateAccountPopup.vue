<script setup lang="ts">
import { usePotatoStore } from '@/stores/potatoStore'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

const potatoStore = usePotatoStore()
const emit = defineEmits(['closeTab', 'login'])

const name = ref<string>('')
const namePassed = ref(false)
const nameWarning = ref<string>('')

const password = ref<string>('')
const passwordPassed = ref(false)
const passwordWarning = ref<string>('')

const passwordAgain = ref<string>('')
const passwordAgainPassed = ref(false)
const passwordAgainWarning = ref<string>('')

const failed = ref<string>()

const nameRules = [
    (v: string) => v.length < 5 ? 'Username should be longer then 5 characters!' : undefined,
    (v: string) => v.length > 15 ? 'Username cannot be longer then 15 characters!' : undefined
]

const passwordRules = [
    (v: string) => !/[A-Z]/.test(v) ? 'Password must contain at least 1 capital letter' : undefined,
    (v: string) => !/\d/.test(v) ? 'Password must contain at least 1 number' : undefined,
]

const passwordAgainRules = [
    (v: string) => v !== password.value ? 'Both password are currently not the same!' : undefined,
]

function watchField(
    field: Ref<string | undefined>,
    qualification: Ref<boolean>,
    warning: Ref<string>,
    rules: ((v: string) => string | undefined)[]) {
        watch(field, (val) => {
            if (!val) {
                qualification.value = false
                return
            }

            for (const rule of rules) {
                const message = rule(val)
                if (message) {
                    warning.value = message;
                    qualification.value = false
                    return
                }
            }
            qualification.value = true
            warning.value = ''
        })
}

function watchAllFields() {
    watch([namePassed, passwordPassed, passwordAgainPassed], ([np, pp, pap]) => {
        if (np === pp === pap == true) clearAllWarnings();
    })
}

watchField(name, namePassed, nameWarning, nameRules)
watchField(password, passwordPassed, passwordWarning, passwordRules)
watchField(passwordAgain, passwordAgainPassed, passwordAgainWarning, passwordAgainRules)

watchAllFields()

function tryCreateAccount() {

    if (!name.value || !password.value || !passwordAgain.value) {
        failed.value = 'Nothing can be left empty!'
        return 
    }
    
    if (namePassed.value === false || passwordPassed.value === false || passwordAgainPassed.value === false) { // if any inputs are still wrong.
        return
    }

    if (potatoStore.getUser(name.value)) {
        failed.value = 'The username is already in use'
        return
    }

    clearAllWarnings()
    potatoStore.addNewUser(name.value, password.value)
    emit('login', name.value)
}

function clearAllWarnings() {
    nameWarning.value = '';
    passwordWarning.value = ''
    passwordAgainWarning.value = ''
    failed.value = ''
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

            <form class="field-row-stacked" @submit.prevent="tryCreateAccount">
                <div class="input-boxes">
                    <label for="text18" style="font-size: 17.5px;">Enter a Username :</label>
                    <input
                        id="text18"
                        type="text"
                        name="username"
                        autocomplete="off"
                        :class="{passed: namePassed}"
                        v-model="name"
                    />
                </div>
                
                <p class="warning" v-if="nameWarning">{{ nameWarning }}</p>

                <div class="input-boxes">
                    <label for="text19" style="font-size: 17.5px;">Enter a Password :</label>
                    <input
                        id="text19"
                        type="password"
                        name="password"
                        autocomplete="off"
                        :class="{passed: passwordPassed}"
                        v-model="password"/>
                </div>

                <p class="warning" v-if="passwordWarning">{{ passwordWarning }}</p>

                <div class="input-boxes">
                    <label for="text20" style="font-size: 17.5px;">Re-enter Password :</label>
                    <input
                    id="text20"
                    type="password"
                    name="re-enter-password"
                    autocomplete="off"
                    :class="{passed: passwordAgainPassed}"
                    v-model="passwordAgain"/>
                </div>

                <p class="warning" v-if="passwordAgainWarning">{{ passwordAgainWarning }}</p>
                <p class="warning" v-if="failed">{{ failed }}</p>

                <section>
                    <button class="default" style="font-size: 17.5px;" @click="tryCreateAccount">Create Account</button>
                </section>
            </form>
        </div>
    </div>
</template>

<style scoped>
@import '98.css';

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
    background-color: plum;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    width: auto;
}

.close-button {
    display: flex;
    justify-content: flex-end;
}

.input-boxes {
    margin: 10px 0px 10px 0px;
    max-width: 250px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 250px;

}

section {
    display: flex;
    column-gap: 25px;
    margin: 10px 0px 0px 0px;
}

input#text18, input#text19, input#text20 {
    padding: 21px 20px 20px 15px;
    font-size: 20px;
    width: 100%;
}

button.default {
    padding: 10px;
    background-color: purple;
    color: white;
}

button:hover {
    cursor: pointer;
}

.passed {
    background-color: aquamarine !important;
}

.warning {
    color: red;
    font-weight: bold;
    margin: 0px;
}

</style>