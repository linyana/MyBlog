<template>
    <div id="article">
        <Title></Title>
        <div class="banner">
            <div class="banner_name">林衍</div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
</script>

<style scoped>
#article {
    background-color: rgb(223, 222, 222);
}

.banner {
    width: 100%;
    height: 400px;
    background: url("https://s2.loli.net/2022/09/07/p5ezVoQYwk1BXJ6.gif") center center / cover no-repeat;
}

.banner::before {
    background-image: url(@/assets/home/grid.png);
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: 400px;
    background-attachment: fixed;
}

.banner_name {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 20px;
    color: white;
}

.content {
    width: 1350px;
    display: flex;
    justify-content: space-between;
    margin: auto;
}

</style>