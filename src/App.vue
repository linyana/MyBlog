<template>
    <div class="main"></div>
    <router-view></router-view>
</template>

<script setup>
</script>

<style>
.main {
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(@/assets/background/background1.jpg);
    background-size: 100% 100%;
}

.main::before {
    background-image: url(@/assets/home/grid.png);
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-attachment: fixed;
}
</style>