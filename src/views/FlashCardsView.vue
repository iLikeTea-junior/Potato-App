<script setup lang="ts">
import ToastNotification from '@/components/ToastNotification.vue'
import CardItem from '@/components/CardItem.vue'

import { cards as rawCards} from '@/flash.cards';
import { usePotatoStore } from '@/stores/potatoStore';
import { ref } from 'vue'
import { type Card } from '../flash.cards'

interface Props {
    user: string
}

const potatoStore = usePotatoStore()
const props = defineProps<Props>()
const cards = ref(rawCards)
const showToast = ref(false)


function triggerToast() {
    showToast.value = true;

    setTimeout(() => {
        showToast.value = false
    }, 4000)
}

function collectCard(card: Card) {
    const cardAlreadyExists = potatoStore.getCard(props.user, card.id)
    if (cardAlreadyExists) return;

    potatoStore.addCardToCollection(props.user, card)
    if (!card.normal) triggerToast();
}

</script>

<template>
    <main>
        <section class="info">

            <ToastNotification :show="showToast"/>

            <h2>Potato Flashcards 🃏</h2>
    
            <p>
                Welcome to the flash cards page.
                Click one and find out what is behind a card. It can be almost anything you can imagine.
                It could be a fun fact about potatoes, a piece of history, and some info about them.
                <br>
                <span>There are also some legendary cards scattered in this page. Try to find them!</span>
            </p>
    
            <p v-if="!props.user" class="warning"><em>*Cards collected will not be saved if logged out*</em></p>
            <p v-else class="remainder"><em>*Cards collected will be saved in your collection.*</em></p>
        </section>
    
    
        <section class="flash-cards">
            <CardItem
                v-for="card in cards"
                :key="card.id"
                :card="card"
                :user="props.user"
                @collect-card="collectCard(card)"
            />
        </section>
    </main>
</template>

<style scoped>

main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 45px;
    gap: 35px;
}

p {
    font-weight: 500;
    margin: 10px 0px 10px 0px;
}

.info {
    border: 5px solid purple;
    border-radius: 15px;
    padding: 30px;
    background-color: rgb(255, 231, 255, 80%);
}

.warning, .remainder {
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    margin-top: 20px;
    font-weight: bold;
    width: max-content;
}

.warning {
    color: red;
}

.remainder {
    color: green;
}

.flash-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 85px 0px 85px 0px;
    padding: 15px;
    row-gap: 100px;
    justify-items: center;
}

@media screen and (max-width: 1450px) {
    .flash-cards {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 1050px) {
    .flash-cards {
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
}

@media screen and (max-width: 775px) {
    .flash-cards {
        grid-template-columns: 1fr;
    }
}

</style>