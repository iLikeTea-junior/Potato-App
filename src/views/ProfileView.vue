<script setup lang="ts">
import Card from '@/components/Card.vue'
import SaveButton from '@/components/SaveButton.vue';
import PotatoButton from '@/components/PotatoButton.vue';

import { usePotatoStore } from '@/stores/potatoStore';

import { computed, ref } from 'vue';

interface Props {
    user: string
}

const potatoStore = usePotatoStore()
const props = defineProps<Props>()

const cardsCollected = computed(() => potatoStore.getCardsCollected(props.user))
const videosSaved = computed(() => {return potatoStore.getVideosSaved(props.user) ?? []})

const cardsDisplay = ref<HTMLElement | null>(null)
const videosDisplay = ref<HTMLElement | null>(null)

function scrollCards(event: any) {
    if (cardsDisplay.value) {
        if (event.deltaY < 0) cardsDisplay.value.scrollLeft -= 75;
        if (event.deltaY > 0) cardsDisplay.value.scrollLeft += 75;
    }
}

function scrollVideos(event:any) {
    if (videosDisplay.value) {
        if (event.deltaY < 0) videosDisplay.value.scrollLeft -= 75;
        if (event.deltaY > 0) videosDisplay.value.scrollLeft += 75
    }
}

</script>

<template>
    <main>
        <Card>
            <template #title>Your Profile 👤</template>

            <template #description>
                This is your profile. Over here you can see what cards you have collected and cooking videos you have saved.
                Of course, you can unsave some cooking videos if you feel like you don't need them no more.
            </template>
        </Card>

        <section class="cards-collected">
            <h1 class="special-title">Cards Collected:</h1>
            <div v-if="cardsCollected?.length === 0" class="empty-message">
                <div class="torn-paper">
                    <h1 class="honk-font">No cards have been collected yet</h1>
                </div>
            </div>


            <div v-else class="cards"
                @wheel.prevent="scrollCards"
                ref="cardsDisplay"
                v-dragscroll.x>
                <template v-for="card in cardsCollected">
                    <div class="card" :class="{ legendary: !card.normal }">
                        <img v-if="!card.normal" :src="card.cardPrompt" class="legendary-img"/>
                        <template v-else>{{ card.cardPrompt }}</template>
                    </div>
                </template>
            </div>
        </section>

        <section class="videos-saved">
            <div class="small-header">
                <h1 class="special-title">Videos Saved:</h1>
                <PotatoButton
                    v-if="videosSaved?.length > 0"
                    variant="danger"
                    @click="potatoStore.unSaveAllVideos(props.user)"
                >
                    Unsave All Videos
                </PotatoButton>
            </div>
        
            <div v-if="videosSaved?.length === 0" class="empty-message">
                <div class="torn-paper">
                    <h1 class="honk-font">There are currently no videos saved :(</h1>
                </div>
            </div>

            <div v-else class="videos"
                @wheel.prevent="scrollVideos"
                ref="videosDisplay">


                <template v-for="video in videosSaved">
                    <div class="video">
                        <iframe width="400" height="250" :src="video.url" allowfullscreen/>
                        <div class="save-video">
                            <SaveButton
                                :user="props.user"
                                :videoId="video.id"
                                @save-video="potatoStore.saveVideoToCollection(props.user, video)"
                            />
                            <h2>{{ video.title }}</h2>
                        </div>
                    </div>
                </template>
            </div>

        </section>
    </main>
</template>

<style scoped>

.special-title {
    color: white;
    font-size: 35px;
    font-weight: 900;
    -webkit-text-stroke: 0.4px black;
    text-shadow: 3px 3px 3px black;
}

.torn-paper {
    display: inline-block;
    padding: 20px 75px 30px 75px;

    background-image: url("/tornPaper.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}

.empty-message {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: anchor-center;
}

.honk-font {
  font-family: "Honk", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 35px;
  font-style: normal;
  font-variation-settings:
    "MORF" 15,
    "SHLN" 50;
}

.small-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.videos {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: 25%;
    justify-items: center;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 40px 0px 65px 0px;
    margin: 20px;
}

.video {
    border-radius: 35px;
    transition: transform 0.45s ease, box-shadow 0.45s;
}

.video:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 20px purple;
}

.save-video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -10px 0px 0px 0px;
    height: 100px;
    border: solid 2px purple;
    background-color: plum;
    border-radius: 0px 0px 35px 35px;
}

.legendary-img {
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

.card.legendary {
    position: relative;
    overflow: hidden;
}

.card.legendary:before {
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
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.cards {
    display: grid;
    gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: 25%;
    justify-items: center;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 40px 0px 65px 0px;
    margin: 20px;
    height: auto;
}

/* Google Scrollbar */
.cards::-webkit-scrollbar,
.videos::-webkit-scrollbar {
    height: 12px;
}

.cards::-webkit-scrollbar-track,
.videos::-webkit-scrollbar-track {
    background: rgb(209, 148, 209);
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.5);
}

.cards::-webkit-scrollbar-thumb,
.videos::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 2rem;
    border: solid 2px black;
}

.cards::-webkit-scrollbar-thumb:hover,
.videos::-webkit-scrollbar-thumb:hover {
    background: rgb(140, 0, 255);
    border: solid 2px rgb(100, 100, 100)
}
/* end */

.card {
    width: 250px;
    height: 300px;
    background-color: rgb(255, 231, 255);
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: larger;
    text-align: center;
    transition: transform 500ms linear, box-shadow 500ms linear;
}

.card:hover,
.card:focus-visible {
    cursor: pointer;
    transform: scale(1.05) rotateZ(1deg);
    box-shadow: 0 10px 20px rgba(50, 50, 50, 0.5)
}

main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 45px;
    gap: 35px;
}

iframe {
    width: 375px;
    height: 250px;
    border-radius: 35px 35px 0px 0px
}

</style>