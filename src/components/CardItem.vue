<script setup lang="ts">

import { type Card } from '@/flash.cards';
import { ref } from 'vue'
import { usePotatoStore } from '@/stores/potatoStore';

interface Props {
    card: Card
    user: string
}

const potatoStore = usePotatoStore()
const props = defineProps<Props>()
const emit = defineEmits(['collectCard'])


function flipCard() {
    emit('collectCard', props.card)
}

</script>

<template>
    <div class="card-container" @click="flipCard" :class="{ flipped: potatoStore.getCard(props.user, props.card.id) }">
        <div class="card">
            <div class="front"></div>
            <div class="back" :class="{legendary: !props.card.normal}">
                <template v-if="!props.card.normal">
                    <img :src="props.card.cardPrompt" class="legendary-card"/>
                </template>
                <template v-else>
                    {{ props.card.cardPrompt }}
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card-container {
    width: 250px;
    height: 300px;
    perspective: 550px;
}

.card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 1250ms;
    transform-style: preserve-3d;
}

.legendary-card {
    --border-angle: 0deg;
    width: 250px;
    height: auto;
    z-index: 1;
}

@property --border-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.back.legendary {
    position: relative;
    overflow: hidden;
}

.back.legendary::before {
    content: "";
    position: absolute;
    background:
        conic-gradient(
            from var(--border-angle),
            oklch(100% 100% 0deg),
            oklch(100% 100% 45deg),
            oklch(100% 100% 90deg),
            oklch(100% 100% 135deg),
            oklch(100% 100% 180deg),
            oklch(100% 100% 225deg),
            oklch(100% 100% 270deg),
            oklch(100% 100% 315deg),
            oklch(100% 100% 360deg)
        );
    width: 150%;
    height: 150%;
    animation: rotate 4s linear infinite;
    z-index: 0;
}

@keyframes rotate {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
}

.card-container.flipped .card {
    transform: rotateY(180deg);
}

.front, .back {
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    position: absolute;
    backface-visibility: hidden;
}

.card:hover {
    cursor: pointer;
    transform: rotateY(13deg);
}

.front {
    background-image: url('@/assets/images/justAPotato.png');
    background-size: cover; /* this makes sure the huge image tries to fit in to the box*/
    background-position: center;
}

.back {
    background-color: rgb(255, 231, 255);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 10px;
    text-align: center;
    font-size: larger;
}

</style>