<template>
    <div @click="isMouseMenu = false;">
        <router-view></router-view>
        <MouseMenu v-show="isMouseMenu" :style="mouseMenuStyle"></MouseMenu>
        <transition name="cover">
            <div class="cover_box" v-show="isMouseMenu"></div>
        </transition>
    </div>
</template>

<script setup>
import MouseMenu from "@/components/MouseMenu.vue";
import { ref } from "vue";

let isMouseMenu = ref(false);

let mouseMenuStyle = ref("");

window.oncontextmenu = (event) => {
    event.preventDefault();
    mouseMenuStyle.value = `left: ${event.clientX + 25}px;top: ${
        event.clientY - 100
    }px`;
    isMouseMenu.value = true;
};


</script>

<style scoped>
.cover_box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
}

.cover-enter-from,.cover-leave-to {
    opacity: 0;
}

.cover-leave-from,.cover-enter-to {
    opacity: 1;
}

.cover-enter-active,.cover-leave-active {
    transition: opacity 0.5s;
}
</style>