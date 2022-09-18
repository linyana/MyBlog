<template>
    <div id="friendlylink">
        <Title></Title>
        <div class="banner">
            <div class="banner_name">林衍</div>
        </div>
        <div class="link_content">
            <h1>友情链接</h1>
            <div class="link_boxes">
                <div
                    class="link_box"
                    v-for="item in linkArr"
                    :key="item.id"
                    @click="Opentarget(item.link)"
                >
                    <img :src="item.bcImg" />
                    <div class="hover_link_box">
                        <div class="hover_link_userimg">
                            <img :src="item.userImg" />
                        </div>
                        <div class="hover_link_box_footer">
                            <div class="hover_link_box_footer_text">{{item.userName}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from "@/components/Title.vue";

const linkArr = [
    {
        id: 0,
        userName: "小冰博客",
        bcImg: "https://s2.loli.net/2022/09/18/xeyOrNUHKCDFviW.png",
        userImg: "https://zfe.space/images/headimage.png",
        link: "https://zfe.one",
    },
    {
        id: 1,
        userName: "お前はどこまで見えている",
        bcImg: "https://s2.loli.net/2022/09/18/OEbIlyiLQPdTB5K.png",
        userImg: "https://hotarugali.github.io/img/hotarugali.jpg",
        link: "https://hotarugali.github.io/",
    },
];

const Opentarget = (target) => {
    window.open(target);
};
</script>

<style scoped>
#friendlylink {
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

.link_content {
    position: relative;
    width: 850px;
    height: 600px;
    padding: 60px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 50px auto;
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
}

h1 {
    text-align: center;
    line-height: 50px;
}

.link_boxes {
    margin: 50px 0;
}

.link_box {
    position: relative;
    cursor: url(@/assets/cur/x2.cur), auto !important;
    display: inline-block;
    width: 260px;
    height: 150px;
    margin: 11.5px;
    box-shadow: 0 0 5px rgb(0, 0, 0, 0.3);
    border-radius: 10px;
    overflow: hidden;
}

.link_box img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.link_box:hover .hover_link_box {
    top: -150px;
}

.hover_link_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 150px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.6);
    transition: all 0.8s;
}

.hover_link_userimg img {
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 60px);
    width: 80px;
    height: 80px;
    border-radius: 40px;
}

.hover_link_box_footer {
    width: 100%;
    height: 80px;
    margin-top: 70px;
    background-color: rgb(255, 255, 255, 0.8);
}

.hover_link_box_footer_text {
    text-align: center;
    line-height: 95px;
    font-size: 21px;
}
</style>