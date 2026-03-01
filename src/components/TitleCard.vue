<script setup lang="ts">
const props = defineProps<{
    size?: 'big' | 'small'
}>()

</script>

<template>
    <h2 v-if="props.size == 'small'"><slot/></h2>
    <h1 v-else><slot/></h1>
</template>

<style scoped>

h1 {
    font-size: 45px;
}

</style>
