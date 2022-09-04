<template>
    <div id="home">
        <Title></Title>
        <div class="banner">
            <div class="banner_text">林衍</div>
            <div class="banner_text2">个人博客</div>
        </div>
        <LeftMenu></LeftMenu>
    </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
import LeftMenu from "@/components/LeftMenu.vue";
</script>

<style scoped>
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
</style>