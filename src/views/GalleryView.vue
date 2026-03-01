<script setup lang="ts">
import Card from '@/components/Card.vue';
import { potatoVariantImages as potatoVariants } from '@/potato.variants';
import { ref } from 'vue'

interface Props {
    user: string
}

const props = defineProps<Props>()
const potatoImages = ref(potatoVariants)

</script>

<template>
    <main>
        <Card>
            <template #title>Potato Gallery</template>

            <template #description>
                Welcome to the <b>Potato Gallery</b> page.
                Maybe you don't know yet but there are over 4000 to 5000 variants of potatoes.
                Of course we are not going to list all of them right here.
                <br><br>
                ...<span class="emoji">☻</span>
                <br><br></br>
                Instead we'll list some popular ones that you can buy or come across to.
                Go ahead, take a look and see which one catches your eye.
            </template>
        </Card>

        <section class="potato-variants">
            <h1>Potato Variants:</h1>

            <div class="all-potatoes">
                <div v-for="potatoImg in potatoImages" class="potato">
                    <img :src="potatoImg.imageUrl"/>

                    <div class="potato-type">
                        <h2>{{ potatoImg.potatoVar }}</h2>
                    </div>

                    <div class="potato-description">
                        <p style="padding: 0px 15px 15px 15px">{{ potatoImg.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <Card>
            <template #description>
                Of course there are more potato variants. There are over <span style="font-weight: bold;">4000+ variants.</span> 
                You usually see <span style="font-weight: bold;">20 around your life</span>, whether in stores or online.
                <span style="font-weight: bold;">Thousands</span> are rare, local, or protected varieties.

                If you are genuinely interested in seeing more, here's a link where you can find more.
                <a href="https://en.wikipedia.org/wiki/List_of_potato_cultivars" target="_blank">Even More Potatoes.</a>
            </template>
        </Card>
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
}

.emoji {
    color: purple;
    font-size: 40px;
}

img {
    width: 100%;
    height: 150px;
    background: white;
    border-radius: 15px 50px;
    box-shadow: 0px 0px 15px black;
    transition: border-radius 0.45s;
}

.all-potatoes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 45px;
    justify-items: center;
}

.potato {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 250px;
    gap: 20px;
    background-color: rgb(177, 0, 177);
    padding: 20px;
    border-radius: 20px;
    transition: transform 0.45s ease, box-shadow 0.45s;
}

.potato:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px black;
}

.potato:hover img {
    border-radius: 50px 15px;
}

.potato-type {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    background: plum;
    border-radius: 10em;
    border: solid 3px black;
}

@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.potato-type::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 10em;
    padding: 5px;
    pointer-events: none;
    z-index: 1;

    --angle: 0deg;

    background: conic-gradient(
        from var(--angle),
        transparent 0deg,
        rgba(255, 255, 255, 0.2) 0deg,
        white 40deg,
        rgba(255, 255, 255, 0.2) 80deg,
        rgba(255, 255, 255, 0.2) 360deg
    );

    -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
        mask-composite: exclude;

    opacity: 0;
}

.potato:hover .potato-type::before {
    opacity: 1;
    animation: shineSpin 3s linear infinite;
}

@keyframes shineSpin {
    from { --angle: 0deg; }
    to { --angle: 360deg; }
}

.potato-description {
    background-color: plum;
    border-radius: 15px;
    box-shadow: 0px 0px 15px black;
}

@media screen and (max-width: 1375px) {
    .all-potatoes {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 1050px) {
    .all-potatoes {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 700px) {
    .all-potatoes {
        grid-template-columns: 1fr;
    }
}

</style>