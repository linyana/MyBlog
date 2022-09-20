<template>
    <div id="RightMenu">
        <div class="article">
            <div
                class="article_card"
                :class="{'article_card_reserve':article.reserve}"
                v-for="article in articles"
                :key="article.id"
                @click="ToTarget(article.src)"
            >
                <div class="text">
                    <div class="article_img"></div>
                    <div class="article_date">{{article.date}}</div>
                    <div class="article_title">{{article.name}}</div>
                    <div class="article_disctription">{{article.introduce}}</div>
                </div>
                <div class="article_card_left"></div>
                <div class="article_card_right" :class="article.class"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

let articles = [
    {
        id: 0,
        name: "Hello blog!",
        introduce: "Welcome to my blog",
        class: "article_img9",
        date: "2022年3月18日",
        src: "/article/0",
        reserve: false,
    },
    {
        id: 1,
        name: "自定义迭代器",
        introduce: "理解迭代器底层原理",
        class: "article_img7",
        date: "2022年3月18日",
        src: "/article/3",
        reserve: true,
    },
    {
        id: 2,
        name: "HTML打包工具",
        introduce: "将CSS和JS分离成单独的文件",
        class: "article_img4",
        date: "2022年3月19日",
        src: "/article/1",
        reserve: false,
    },
    {
        id: 3,
        name: "暂时性死区问题",
        introduce: "Cannot access 'str' before initialization",
        class: "article_img1",
        date: "2022年3月19日",
        src: "/article/2",
        reserve: true,
    },
    {
        id: 4,
        name: "捕获路由转发的错误",
        introduce: "捕获vue router路由转发的错误,让控制台更美观",
        class: "article_img8",
        date: "2022年3月17日",
        src: "/article/4",
        reserve: false,
    },
];

// router
const router = useRouter();
const ToTarget = (target) => {
    router.push(target);
};
</script>

<style scoped>
#RightMenu {
    width: 920px;
}

.article_img1 {
    background-image: url(@/assets/images/article/Article.jpg);
}

.article_img2 {
    background-image: url(@/assets/images/article/Article2.jpg);
}

.article_img3 {
    background-image: url(@/assets/images/article/Article3.jpg);
}

.article_img4 {
    background-image: url(@/assets/images/article/Article4.jpg);
}

.article_img5 {
    background-image: url(@/assets/images/article/Article5.jpg);
}

.article_img6 {
    background-image: url(@/assets/images/article/Article6.jpg);
}

.article_img7 {
    background-image: url(@/assets/images/article/Article7.jpg);
}

.article_img8 {
    background-image: url(@/assets/images/article/Article8.jpg);
}

.article_img9 {
    background-image: url(@/assets/images/article/Article9.jpg);
}

.article .article_card {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    cursor: pointer;
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 20px;
    transition: margin-left 1s ease-out;
    box-shadow: 0px 0 20px rgb(0, 0, 0, 0.3);
    transition: all 0.8s;
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
    transition: all 0.8s;
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

.article_card_right:hover {
    transform: scale(1.05);
}

.article_card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}

@media screen and (max-width: 800px) {
    .article .article_card .article_card_left {
        width: 80%;
        left: 30%;
    }

    .article_disctription {
        display: none;
    }

    .article .article_card .article_card_right {
        -webkit-clip-path: polygon(60% 0, 100% 0, 100% 100%, 60% 100%);
        clip-path: polygon(60% 0, 100% 0, 100% 100%, 60% 100%);
    }

    .article .article_card_reserve .article_card_right {
        -webkit-clip-path: polygon(0 0, 40% 0, 40% 100%, 0 100%);
        clip-path: polygon(0 0, 40% 0, 40% 100%, 0 100%);
    }

    .article .article_card {
        width: 90%;
        height: 200px;
        margin: 50px auto;
    }

    .article_title {
        left: 30px;
        font-size: 5vw;
    }

    .article_date {
        left: 70px;
    }

    .article_img {
        left: 30px;
    }

    .article .article_card_reserve .article_title {
        left: -130px;
    }

    .article .article_card_reserve .article_date {
        left: -90px;
    }

    .article .article_card_reserve .article_img {
        left: -130px;
    }
}
</style>