<script setup lang="ts">
import ButtonTabs from './PotatoButton.vue';

import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.catchAll)

</script>

<template>
    <main>
        <div class="error-message">
            <h1 class="honk-font">We couldn't find that page :(</h1>

            <router-link to="/"><ButtonTabs>Go Back Home</ButtonTabs></router-link>
        </div>
    </main>
</template>

<style scoped>

main {
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-message {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.honk-font {
    font-family: "Honk", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 40px;
    font-style: normal;
    font-variation-settings:
        "MORF" 100,
        "SHLN" 100;
}

</style>