<template>
    <div id="RightMenu">
        <div class="article">
            <div
                class="article_card"
                :class="{'article_card_reserve':article.reserve}"
                v-for="article in articles"
                :key="article.id"
            >
                <div class="text">
                    <div class="article_img"></div>
                    <div class="article_date">{{article.date}}</div>
                    <div class="article_title">{{article.name}}</div>
                    <div class="article_disctription">{{article.introduce}}</div>
                </div>
                <div class="article_card_left"></div>
                <div class="article_card_right" :style="{ backgroundImage: `url(${getImageUrl(article.img)})` }"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
function getImageUrl(name) {
    return new URL(`../../src/assets/article/${name}.jpg`, import.meta.url).href;
}

let articles = [
    {
        id: 0,
        name: "HTML打包工具",
        introduce: "将CSS和JS分离成单独的文件",
        img: "Article4",
        date: "2022年3月19日",
        reserve: false,
    },
    {
        id: 0,
        name: "暂时性死区问题",
        introduce: "Cannot access 'str' before initialization",
        img: "Article",
        date: "2022年3月19日",
        reserve: true,
    },
    {
        id: 3,
        name: "自定义迭代器",
        introduce: "理解迭代器底层原理",
        img: "Article8",
        date: "2022年3月18日",
        reserve: false,
    },
    {
        id: 4,
        name: "捕获路由转发的错误",
        introduce: "捕获vue router路由转发的错误,让控制台更美观",
        img: "Article7",
        date: "2022年3月17日",
        reserve: true,
    },
    {
        id: 5,
        name: "Hello blog!",
        introduce: "Welcome to my blog",
        img: "Article9",
        date: "2022年3月18日",
        reserve: false,
    },
];
</script>

<style>
#RightMenu {
    width: 920px;
}

.article .article_card {
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 20px;
    transition: margin-left 1s ease-out;
    box-shadow: 0px 0 20px rgb(0, 0, 0, 0.3);
}

.article .article_card .article_card_left {
    position: position;
    left: 0;
    top: 0;
    width: 700px;
    height: 100%;
    background-size: 100% 180%;
    background-position: 0 30%;
    backdrop-filter: blur(20px);
    background-color: rgb(255, 255, 255, 0.8);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.article .article_card .article_card_right {
    position: absolute;
    right: 0;
    top: -0.5%;
    width: 350px;
    height: 101%;
    background-size: 120% 120%;
    background-position: 50% 50%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    -webkit-clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
}

.text {
    position: relative;
    font-weight: 700;
    color: rgba(78, 74, 74, 0.5);
    text-shadow: 0 0 2px rgb(0, 0, 0, 0.3);
}

.article_img {
    position: absolute;
    z-index: 999;
    left: 80px;
    top: 50px;
    width: 25px;
    height: 25px;
    background-image: url(@/assets/home/Date.png);
    background-size: 100% 100%;
}

.article_date {
    position: absolute;
    z-index: 999;
    left: 120px;
    top: 52px;
    font-size: 1.1em;
}

.article_title {
    position: absolute;
    z-index: 999;
    left: 80px;
    top: 90px;
    font-size: 1.9em;
}

.article_disctription {
    position: absolute;
    z-index: 999;
    left: 120px;
    top: 150px;
    font-size: 1.1em;
}

/* reserve */
.article_card_reserve .text {
    margin-left: 300px;
}

.article .article_card_reserve .article_card_left {
    position: absolute;
    left: 260px;
    top: 0;
}

.article .article_card_reserve .article_card_right {
    position: absolute;
    left: 0;
    top: -0.5%;
    -webkit-clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
    border-bottom-right-radius: 0;
}
</style>