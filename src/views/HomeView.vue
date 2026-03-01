<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import PotatoButton from '@/components/PotatoButton.vue';

import { watch } from 'vue'

</script>

<template>
    <main class="home-page">

        <section class="introduction">
            <TitleCard size='big'>The Potato Website</TitleCard>

            <img src="/src/assets/images/potato.png" alt="A Potato"/>

            <div class="box-contents">
                <div class="description-box">
                    If you are interested in potatoes or maybe just curious about potatoes, and want to know what makes them so special.
                    Then this page fits perfectly for you. Welcome to the potato website where you can find info about potatoes,
                    whether it be the kind of potatoes, the history of potatoes, potato dishes/recipes, etc.
                </div>
            </div>

            <TitleCard>Explore Further</TitleCard>
        </section>
        
        <hr style="height: 5px; background-color: black; border-radius: 10px; border: none;">
        
        <section class="navigation">
            <form class="link-tabs">
                <router-link :to="{name: 'cards'}"><PotatoButton>Flash Cards</PotatoButton></router-link>
                <router-link :to="{name: 'history'}"><PotatoButton>History</PotatoButton></router-link>
                <router-link :to="{name: 'dishes'}"><PotatoButton>Recipes</PotatoButton></router-link>
                <router-link :to="{name: 'gallery'}"><PotatoButton>Gallery</PotatoButton></router-link>
            </form>
        </section>
    
    </main>
</template>

<style scoped>

main {
    margin: 50px;
}

hr {
    height: 5px;
    background-color: black;
    border-radius: 10px;
    border: none;
    max-width: 1500px;
}

.box-contents {
    display: flex;
    justify-content: center;
    background-color: plum; 
    padding: 10px;
    border-radius: 10px;
    margin: 25px 0px 25px 0px;
}

.description-box {
    font-weight: 500;
    padding: 15px;
    font-size: 20px;
}

.introduction {
    display: grid;
    justify-items: center;
}

.navigation {
    display: grid;
    justify-content: stretch;
    padding: 25px 0px 25px 0px;
}

.link-tabs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    row-gap: 35px;
    column-gap: 20px;
}

/* Phone View */
@media screen and (max-width: 350px) {

}

</style>