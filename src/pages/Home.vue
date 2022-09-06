<template>
    <div id="home">
        <Title></Title>
        <div class="main"></div>
        <div class="banner">
            <div class="banner_text">林衍</div>
            <div class="banner_text2">个人博客</div>
        </div>
        <div class="container flex">
            <LeftMenu></LeftMenu>
            <RightMenu></RightMenu>
        </div>
    </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import RightMenu from "@/components/RightMenu.vue";
</script>

<style scoped>
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

.banner {
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100vh;
}

.banner_text {
    padding-top: 40vh;
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: 700;
    text-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
}

.banner_text2 {
    color: white;
    text-align: center;
    font-size: 20px;
    text-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
}

.flex {
    display: flex;
    justify-content: space-between;
}
</style>