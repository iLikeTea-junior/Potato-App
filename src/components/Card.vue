
<template>
    <section class="info">
        <h1 v-if="$slots.title"><slot name="title"/></h1>
    
        <p>
            <slot name="description"/>
        </p>

        <slot/>
    </section>
</template>

<style scoped>

.info {
    border: 5px solid purple;
    border-radius: 15px;
    padding: 30px;
    background-color: rgb(255, 231, 255, 80%);
}

p {
    font-weight: 500;
    margin: 10px 0px 10px 0px;
}

@media screen and (max-width: 550px) {
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}

</style>