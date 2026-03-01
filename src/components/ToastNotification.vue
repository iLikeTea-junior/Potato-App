<script setup lang="ts">

interface Props {
    show: boolean
}

const props = defineProps<Props>()

</script>

<template>
    <Transition name="toast">
        <div v-if="show" class="rainbow-border">
            <div class="toast-notification">
                <h2>You just found a legendary card!</h2>
            </div>
        </div>
    </Transition>
</template>

<style scoped>

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.toast-enter-to,
.toast-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.toast-enter-active,
.toast-leave-active {
    transition: all 2s ease;
}

.rainbow-border {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    border-radius: 20px;
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 300% 100%;
    animation: rainbow-flow 5.5s linear infinite;
    z-index: 1;
}

.toast-notification {
    background: rgb(255, 255, 161);
    padding: 10px 15px;
    border-radius: 16px;
    font-weight: 600;
}

@keyframes rainbow-flow {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 0%; }
}

</style>