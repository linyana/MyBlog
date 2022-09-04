<template>
    <div id="RightMenu">
        <div class="article">
            <div class="article_card">
                <div class="text">
                    <div class="article_img"></div>
                    <div class="article_date">2022年3月19日</div>
                    <div class="article_title">HTML打包工具</div>
                    <div class="article_disctription">将CSS和JS分离成单独的文件</div>
                </div>
                <div class="article_card_left"></div>
                <div class="article_card_right"></div>
            </div>
            <div class="article_card">
                <div class="text text_reverse">
                    <div class="article_img"></div>
                    <div class="article_date">2022年3月19日</div>
                    <div class="article_title">暂时性死区问题</div>
                    <div class="article_disctription">Cannot access 'str' before initialization</div>
                </div>
                <div class="article_card_left article_card_left_reverse article_img2"></div>
                <div class="article_card_right article_card_right_reverse article_img2"></div>
            </div>
            <div class="article_card">
                <div class="text text">
                    <div class="article_img"></div>
                    <div class="article_date">2022年3月18日</div>
                    <div class="article_title">自定义迭代器</div>
                    <div class="article_disctription">理解迭代器底层原理</div>
                </div>
                <div class="article_card_left article_img3"></div>
                <div class="article_card_right article_img3"></div>
            </div>
            <div class="article_card">
                <div class="text text_reverse">
                    <div class="article_img"></div>
                    <div class="article_date">2022年3月17日</div>
                    <div class="article_title">捕获路由转发的错误</div>
                    <div class="article_disctription">捕获vue router路由转发的错误，让控制台更美观</div>
                </div>
                <div class="article_card_left article_card_left_reverse article_img4"></div>
                <div class="article_card_right article_card_right_reverse article_img4"></div>
            </div>
            <div class="article_card">
                <div class="text text">
                    <div class="article_img"></div>
                    <div class="article_date">2022年3月15日</div>
                    <div class="article_title">Hello blog!</div>
                    <div class="article_disctription">Welcome to my blog</div>
                </div>
                <div class="article_card_left article_img5"></div>
                <div class="article_card_right article_img5"></div>
            </div>
        </div>
    </div>
</template>

<script>
import App from "../App.vue";
export default {
    components: { App },
};
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
    background-image: url(@/assets/article/Article4.jpg);
    background-size: 100% 180%;
    background-position: 0 30%;
    -webkit-filter: blur(0.8em);
    filter: blur(0.8em);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.article .article_card .article_card_right {
    position: absolute;
    right: 0;
    top: -0.5%;
    width: 350px;
    height: 101%;
    background-image: url(@/assets/article/Article4.jpg);
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
    color: rgb(255, 225, 255);
    text-shadow: 0 0 2px rgb(0, 0, 0, 0.5);
}

.article_img {
    position: absolute;
    z-index: 999;
    left: 80px;
    top: 50px;
    width: 25px;
    height: 25px;
    background-image: urL(/src/Images/Date.png);
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
.text_reverse {
    margin-left: 300px;
}

.article .article_card .article_card_left_reverse {
    position: absolute;
    left: 260px;
    top: 0;
}

.article .article_card .article_card_right_reverse {
    position: absolute;
    left: 0;
    top: -0.5%;
    -webkit-clip-path: polygon(0 0,80% 0,100% 100%,0 100%);
    clip-path: polygon(0 0,80% 0,100% 100%,0 100%);
    border-bottom-right-radius: 0;
}

.article .article_card .article_img2 {
    background-image: url(@/assets/article/Article.jpg);
}

.article .article_card .article_img3 {
    background-image: url(@/assets/article/Article3.jpg);
}

.article .article_card .article_img4 {
    background-image: url(@/assets/article/Article6.jpg);
}

.article .article_card .article_img5 {
    background-image: url(@/assets/article/Article5.jpg);
}
</style>