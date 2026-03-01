<script setup lang="ts">
import SaveButton from '@/components/SaveButton.vue';
import Card from '@/components/Card.vue';

import { cookPotatoVideos as potatoVideos, potatoDishesVideos as potatoDishes } from '@/cook.potatoes';
import { ref } from 'vue'
import { usePotatoStore } from '@/stores/potatoStore';

interface Props {
    user: string
}

const potatoStore = usePotatoStore()

const props = defineProps<Props>()
const potatoVids = ref(potatoVideos)
const potatoDishesVids = ref(potatoDishes)

</script>

<template>
    <main>
        <Card>
            <template #title>Potato Dishes 🍽️</template>

            <template #description>
                Welcome to the 'Potato Dishes' page.
                Don't know how to cook a potato? That's fine. We provide you with videos,
                showing you different types of ways to cook a potato.
                After that you can checkout all the potato dishes that we offer.
            </template>

            <p v-if="!props.user" class="remainder" style="color: #f29d00">*Log in to save videos in your collection!*</p>
            <p v-else class="positive-remainder" style="color: green">*Click the heart icon to save the video in your collection*</p>            
        </Card>

        <section class="videos1">
            <h1>How to cook potatoes:</h1>

            <div class="cook-videos">
                <template v-for="potatoVid in potatoVids">
                    <div class="video-element">
                        <iframe :src="potatoVid.url" allowfullscreen></iframe>
                        <div class="save-video">
                            <SaveButton
                                v-if="props.user"
                                :user="props.user"
                                :videoId="potatoVid.id"
                                @save-video="potatoStore.saveVideoToCollection(props.user, potatoVid)"
                            />
                            <h2>{{ potatoVid.title }}</h2>
                        </div>
                    </div>
                </template>
            </div>
        </section>

        <section class="videos2">
            <h1>Potato Dishes to cook:</h1>

            <div class="potato-dishes">
                <template v-for="(potatoDishVideo, index) in potatoDishesVids">
                    <div class="video-element">
                        <iframe width="400" height="250" :src="potatoDishVideo.url" allowfullscreen></iframe>
                        <div class="save-video">
                            <SaveButton
                                v-if="props.user"
                                :user="props.user"
                                :videoId="potatoDishVideo.id"
                                @save-video="potatoStore.saveVideoToCollection(props.user, potatoDishVideo)"
                            />
                            <h2>{{ potatoDishVideo.title }}</h2>
                        </div>
                    </div>


                    <div v-if="index === 9" class="ani-box">
                        <div class="walking">
                            <img src="@/assets/animations/walkingPotato2.gif" alt="moving potato" class="walking-potato"/>
                            <span class="walking-text">...Just walking here</span>
                        </div>
                    </div>
                </template>
            </div>
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

iframe {
    width: 375px;
    height: 250px;
    border-radius: 35px 35px 0px 0px;
}

.ani-box {
    width: 100%;
    flex-basis: 100%;
    grid-column: 1 / -1;
    padding: 20px;
    text-align: center;
    height: 200px;
    background-color: darkmagenta;
    border-radius: 4rem;
    box-shadow: inset 0px 0px 15px 5px white;

    position: relative;
    overflow: hidden;
}

.walking {
    position: absolute;
    display: flex;
    align-items: center;

    top: 50%;
    animation: walk 20s linear infinite;
}

.walking img {
    position: absolute;
    height: 200px;
    background: rgba(255, 255, 255, 0%);
}

.walking-text {
    position: absolute;
    left: 200px;
    font-weight: 800;
    font-size: 25px;
    color: white;
    white-space: nowrap;
}

@keyframes walk {
    from { left: -775px; }
    to { left: 100%; }
}

.video-element {
    border-radius: 35px;
    transition: transform 0.45s ease, box-shadow 0.45s;
}

.video-element:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 50px purple;
}

.info {
    border: 5px solid purple;
    border-radius: 15px;
    padding: 30px;
    background-color: rgb(255, 231, 255, 80%);
}

.remainder, .positive-remainder {
    margin-top: 20px;
    font-weight: 800;
    font-style: italic;
    background: white;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    width: max-content;
    border-radius: 10px;
}

.cook-videos, .potato-dishes {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 75px;
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

.walking-potato {
    background-color: white;
    height: 100%;
}

@media screen and (max-width: 1750px) {
    .cook-videos, .potato-dishes {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
    }
}

@media screen and (max-width: 1400px) {
    .cook-videos, .potato-dishes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
}

@media screen and (max-width: 950px) {
    .cook-videos, .potato-dishes {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    iframe, .video-element {
        width: 100%;
    }

    .ani-box {
        display: none;
    }
}

@media screen and (max-width: 550px) {
    .remainder, .positive-remainder {
        width: 100%;
    }
}
</style>