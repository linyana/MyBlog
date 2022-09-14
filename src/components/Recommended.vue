<template>
    <div class="recommended">
        <div class="title">推荐文章</div>
        <div
            class="article_card"
            v-for="article in articles"
            :key="article.id"
            @click="ToTarget(article.src)"
        >
            <div class="article_img" :class="article.class"></div>
            <div class="article_text">
                <div class="article_title">{{article.name}}</div>
                <div class="article_date">{{article.date}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

// router
const router = useRouter();
const ToTarget = (target) => {
    router.push(target);
};

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
</script>

<style scoped>
.article_card {
    width: 100%;
    height: 70px;
    margin: 30px 0;
    display: flex;
    cursor: pointer;
    cursor: url(@/assets/cur/x2.cur), auto !important;
}

.article_img {
    width: 40%;
    height: 100%;
    background-size: 100% 100%;
}

.article_text {
    padding-left: 5%;
    width: 50%;
    font-size: 12px;
}

.article_title {
    font-size: 15px;
    line-height: 30px;
    font-weight: 700;
    color: rgb(82, 81, 83);
}

.article_date {
    color: rgb(172, 171, 171) !important;
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
</style>