<template>
    <transition name="box">
        <div id="mouseMenu">
            <div class="boxes">
                <div class="box" v-for="item in boxes" :key="item.id">
                    <img :src="getImageUrl(item.img)" alt="图片加载错误" />
                    <div class="circle" @click.stop="ShowChildren(item.isShowChildren)"></div>
                    <div class="child_boxes">
                        <div
                            class="child_box"
                            v-show="item.isShowChildren"
                            v-for="i in item.children"
                            :key="i.id"
                        >{{i.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const boxes = [
    {
        id: 0,
        img: "1",
        isShowChildren: false,
        children: [
            {
                id: 0,
                img: "",
                title: "1",
            },
            {
                img: "",
                title: "2",
            },
            {
                img: "",
                title: "3",
            },
            {
                img: "",
                title: "4",
            },
        ],
    },
    {
        id: 1,
        img: "2",
    },
    {
        id: 2,
        img: "6",
    },
    {
        id: 3,
        img: "5",
    },
    {
        id: 4,
        img: "4",
    },
];

const ShowChildren = (a) => {
    a = true;
};

const GetImg = (name) => {
    return new URL('../../src/assets/images/mouseMenu/' + name, import.meta.url)
        .href;
};

function getImageUrl(name) {
  return new URL(`../src/assets/images/mouseMenu/${name}.png`, import.meta.url).href
}
</script>

<style scoped>
#mouseMenu {
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    width: 100px;
    height: 260px;
    transition: all 0.8s;
}

.box {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    position: relative;
    width: 34px;
    height: 34px;
    padding: 10px;
    margin: 30px auto;
    border-radius: 30px;
    background-color: rgb(154, 154, 154);
    transition: all 0.8s;
}

.box-enter-from,.box-leave-to {
    transform: translateY(-50px);
    opacity: 0;
}

.box-enter-to,.box-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.box-enter-active,.box-leave-active {
     transition-property: opacity,transform,top,left; 
     transition-duration: 0.6s,0.6s,0s,0s;
}

.box img {
    width: 35px;
    height: 35px;
}

.circle {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    position: absolute;
    left: -8px;
    top: -8px;
    width: 64px;
    height: 64px;
    border-radius: 40px;
    border: 3px solid rgb(154, 154, 154);
}

.child_boxes {
    position: absolute;
    left: 100px;
    top: 0;
    transform: translateY(calc(-50% + 24px));
}

.child_box {
    width: 100px;
    height: 30px;
    margin: 20px 0;
    background-color: #fff;
}
</style>