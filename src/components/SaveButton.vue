<script setup lang="ts">
import { usePotatoStore } from '@/stores/potatoStore';

interface Props {
  user: string,
  videoId: number
}

const props = defineProps<Props>()
const emit = defineEmits(['saveVideo'])
const potatoStore = usePotatoStore()

</script>

<template>
    <div class="container">
        <div class="toggle">
            <input type="checkbox"
              :checked="!!potatoStore.getVideo(props.user, props.videoId)"
              @change="emit('saveVideo')">
            <span class="button"></span>
            <span class="label" style="font-size: 35px">♥︎</span>
        </div>
    </div>
</template>

<style scoped>

.toggle {
  display: inline-block;
}

.toggle {
  position: relative;
  height: 100px;
  width: 100px;
}

.toggle:before {
  box-shadow: 0;
  border-radius: 84.5px;
  background: #fff;
  position: absolute;
  margin-left: -36px;
  margin-top: -36px;
  opacity: 0.2;
  height: 72px;
  width: 72px;
  left: 50%;
  top: 50%;
}

.toggle input:checked~.label {
  color: rgba(255,0,0,0.8);
}

.toggle .button {
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  border-radius: 68.8px;
  position: absolute;
  background: plum;
  margin-left: -34.4px;
  margin-top: -34.4px;
  display: block;
  height: 68.8px;
  width: 68.8px;
  left: 50%;
  top: 50%;
}

.toggle .label {
  transition: color 300ms ease-out;
  line-height: 101px;
  text-align: center;
  position: absolute;
  font-weight: 700;
  font-size: 28px;
  display: block;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  color: rgba(0, 0, 0, 0.9);
}

.toggle input {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.toggle input:active ~ .button {
  filter: blur(0.5px);
  box-shadow: 0 12px 25px -4px rgba(0, 0, 0, 0.4);
}

.toggle input:active ~ .label {
  font-size: 26px;
  color: rgba(0, 0, 0, 0.45);
}

.toggle input:checked ~ .button {
  filter: blur(0.5px);
  background: rgba(255, 255, 255, 0.7)
}

.toggle input:checked ~ .label {
  color: red;
}   

</style>