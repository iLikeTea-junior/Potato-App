<script setup lang="ts">
</script>

<template>
    <main>
        <div class="left-side">
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
        </div>

        <article>
            
            <h2>🥔 Welcome to the World of the Potatoes</h2>
            <p>
                Imagine a small, humble tuber, tucked away under the soil in the high <a href="https://www.britannica.com/place/Andes-Mountains" target="_blank">Andes mountains</a> thousands of years ago.
                Few could have guessed that this unassuming root would travel the globe, survive oceans and centuries, and become one of the most important foods on Earth.

                From feeding ancient <a href="https://www.ebsco.com/research-starters/history/andean-civilizations" target="_blank">Andean civilizations</a> to sparking <span class="tooltip"><i>famine</i><span class="tooltip-text">A <i style="font-weight: bold">famine</i> is a long period where many people don’t have enough food, often leading to hunger and death.</span></span> in <a href="https://www.tourismireland.com/" target="_blank"><i>Ireland</i></a>,
                from curious European gardens to kitchens around the world, the potato has a story full of adventure,
                survival, and resilience. Join us as we dig into the history of this remarkable little tuber.
            </p>

            <h2>Born in the Andes</h2>
            <p>
                The potato got its start high in the mountains of what is now <a href="https://peru.info/en-us/" target="_blank">Peru</a> and <a href="https://www.geodyssey.co.uk/bolivia/bolivia-holidays.aspx" target="_blank">Bolivia</a>. Indigenous farmers domesticated wild potatoes thousands of years ago,
                creating hundreds of varieties suited to different climates, altitudes, and soils. They didn’t just eat them—they celebrated them in festivals,
                traded them, and even used them for medicine. One of the most fascinating innovations was <a href="https://specialtyproduce.com/produce/Chuo_Potatoes_17068.php" target="_blank"><em>chuño</em></a>, a freeze-dried potato that could last for years,
                allowing Andean people to store food for long winters and crop failures.
            </p>

            <h2>A Journey Across the Ocean</h2>
            <p>
                When Spanish explorers arrived in <a href="https://sahistory.org.za/article/americas-1500s" target="_blank"><i>South America in the 1500s</i></a>, they encountered potatoes and recognized their potential.
                By the late 16th century, potatoes had been brought back to Europe. At first, they were considered strange and sometimes even poisonous,
                because people didn’t understand how to cook them and they looked nothing like traditional European vegetables.
            </p>
            <p>
                Slowly, people began to experiment. French, Spanish, and English farmers started growing potatoes in gardens, then on farms.
                They discovered that potatoes were highly nutritious, could grow in poor soils, and produced more food per acre than wheat or barley.
                This made them an essential crop, especially in regions where other crops failed.
            </p>

            <h2>🇮🇪 A Crop That Changed a Nation</h2>
            <p>
                <a href="https://www.tourismireland.com/" target="_blank"><i>Ireland</i></a> became one of the countries most dependent on potatoes. Many families relied on potatoes as their main source of calories.
                But this dependence came at a cost. In the 1840s, a devastating plant disease called <a href="https://bioprotectionportal.com/resources/late-blight-causes-symptoms-and-solutions/" target="_blank"><i>late blight</i></a> destroyed potato crops across the country,
                leading to the Irish Potato <span class="tooltip"><i>Famine</i><span class="tooltip-text">A <i style="font-weight: bold">famine</i> is a long period where many people don’t have enough food, often leading to hunger and death.</span></span>. Millions of people starved, thousands emigrated, and the social and economic impact lasted decades.
            </p>

            <h2>🌱 Beyond Europe</h2>
            <p>
                As the potato spread across Europe, it also traveled to Asia, Africa, and eventually North America.
                Farmers in new regions experimented with cultivation techniques and developed local varieties to adapt to different climates.
                Potatoes became central to diets, especially in colder regions where other crops were harder to grow.
            </p>
            <p>
                In addition to feeding populations, the potato influenced agricultural practices. Its ability to grow in poor soils and on land previously considered unusable
                helped expand arable land and stabilize communities that had struggled with food shortages.
            </p>

            <h2>🍽 From Table to Table</h2>
            <p>
                Over the centuries, the potato worked its way into global cuisine. From French fries and mashed potatoes to gnocchi, stews, soups, and curries,
                almost every culture has found a way to use this versatile tuber. Its ability to be stored, cooked, and preserved made it a kitchen staple,
                and even today it continues to feed millions around the world.
            </p>

            <h2>🥔 A Tuber With Staying Power</h2>
            <p>
                The history of the potato is a story of adaptation, survival, and resilience. From the high Andes to European <span class='tooltip'><i>famine</i><span class="tooltip-text">A <i style="font-weight: bold">famine</i> is a long period where many people don’t have enough food, often leading to hunger and death.</span></span>, from ocean <span class="tooltip"><i>voyages</i><span class="tooltip-text">A <i style="font-weight: bold;">voyage</i> is a long journey involving travel by sea or in space.</span></span> to modern kitchens,
                this small tuber has left a giant mark on humanity. It reminds us that even the simplest foods can have extraordinary journeys and lasting importance.
            </p>

        </article>

        <div class="right-side">
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
            <img src="@/assets/animations/dancingPotato.gif" alt="A dancing potato"/>
        </div>
    </main>
</template>

<style scoped>

main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 5px solid purple;
    border-radius: 15px;
    margin: 45px;
    padding: 30px;
    background-color: rgb(255, 231, 255);
    width: 1000px;
}

p {
    font-weight: 500;
    margin: 10px 0px 10px 0px;
}

a {
    color: purple;
    font-weight: 900;
}

h2 {
    margin: 25px 0px 5px 0px;
}

img {
    width: 250px;
    height: 250px;
}

.left-side, .right-side {
    display: grid;
    row-gap: 250px;
}

.tooltip {
    position: relative;
    color: purple;
    cursor: help;
    font-weight: 700;
}

.tooltip-text {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;

    background: white;
    color: black;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease;
    z-index: 10;

    font-weight: 100;
}

.tooltip:hover .tooltip-text {
    opacity: 1;
    visibility: visible;
}

@media screen and (max-width: 1300px)  {
    .left-side, .right-side {
        display: none;
    }
}

</style>