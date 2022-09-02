<template>
    <div id="home">
        <div class="banner">
            <div class="banner_text">林衍</div>
            <div class="banner_text2">个人博客</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.banner {
    width: 100vw;
    height: 100vh;
    background-image: url(@/assets/background/background1.jpg);
    background-size: 100% 100%;
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