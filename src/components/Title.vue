<template>
    <div id="title" :class="titleClass">
        <div class="container">
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="../FriendlyLink">友情链接</router-link>
                    </li>
                    <li>
                        <router-link to="About">关于我</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let titleClass = ref("titleFalse");

document.addEventListener("scroll", () => {
    if (
        Math.floor(
            document.documentElement.scrollTop || document.body.scrollTop
        ) >= document.documentElement.clientHeight
    ) {
        titleClass.value = "titleTrue";
    } else {
        titleClass.value = "titleFalse";
    }
});
</script>

<style scoped>
#title {
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    transition: all 0.8s;
}

.titleTrue {
    background-color: rgba(226, 229, 229);
    color: black !important;
}

.titleFalse {
    background-color: transparent;
}

.nav {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 50px;
    font-size: 18px;
}

ul {
    margin: 0;
    width: 350px;
    display: flex;
    justify-content: space-between;
}

li {
    list-style: none;
}

ul li a {
    text-decoration: none;
    line-height: 50px;
}

.titleFalse a {
    color: white;
}

.titleTrue a {
    color: rgb(90, 90, 90, 0.8);
}

@media screen and (max-width: 800px) {
    .nav {
        right: 50px;
    }
}
</style>