<script setup lang="ts">

interface Props {
  variant?: "danger" | "default"
}

const props = defineProps<Props>()

</script>

<template>
    <button :class="['btn', props.variant ? props.variant : 'default']">
      <slot/>
      </button>
</template>

<style scoped>

.danger {
  background-color: crimson;
  color: white;
}

.default {
  background-color: plum;
}

.btn {
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

.btn:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};

</style>