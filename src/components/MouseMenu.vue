<template>
    <transition name="box">
        <div id="mouseMenu">
            <div class="boxes">
                <div class="box" v-for="item in boxes" :key="item.id">
                    <img :src="getImageUrl(item.img)" alt="图片加载错误" />
                    <div class="circle" @click.stop="ReSet();item.isShowChildren = true;"></div>
                    <transition name="childBox">
                        <div class="sanjiao" v-if="item.isShowChildren"></div>
                    </transition>
                    <transition name="childBox">
                        <div class="child_boxes" v-if="item.isShowChildren">
                            <div
                                class="child_box"
                                @click.stop="ToTarget(i.src)"
                                v-for="i in item.children"
                                :key="i.id"
                            >
                                <img :src="getImageUrl(i.img)" alt="图片加载错误" />
                                <div class="child_box_text">{{i.title}}</div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

const boxes = reactive([
    {
        id: 0,
        img: "4.png",
        isShowChildren: false,
        children: [
            {
                id: 0,
                img: "3.png",
                title: "首页",
                src: "/",
            },
            {
                img: "8.png",
                title: "友情链接",
                src: "/FriendlyLink",
            },
            {
                img: "7.png",
                title: "关于我",
                src: "/About",
            },
        ],
    },
    {
        id: 1,
        img: "2.png",
    },
    {
        id: 2,
        img: "6.png",
    },
    {
        id: 3,
        img: "5.png",
    },
    {
        id: 4,
        img: "1.png",
    },
]);

function getImageUrl(name) {
    return new URL(`../assets/images/mouseMenu/${name}`, import.meta.url).href;
}

// 清除二级菜单
const ReSet = () => {
    for (let i of boxes) {
        i.isShowChildren = false;
    }
};

const props = defineProps({
    mouse: Boolean,
    MouseLeft: {
        type: Function,
        required: true,
    },
});

// 跳转页面
const router = new useRouter();

const ToTarget = (target) => {
    router.push(target);
    ReSet();
    props.MouseLeft();
};

watch(
    () => props.mouse,
    (newValue) => {
        if (newValue) {
            ReSet();
        }
    }
);
</script>

<style scoped>
#mouseMenu {
    position: fixed;
    z-index: 9999999999999;
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
    background-color: rgb(154, 154, 154, 0.9);
    transition: all 0.8s;
}

.box-enter-from,
.box-leave-to {
    transform: translateY(-50px);
    opacity: 0;
}

.box-enter-to,
.box-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.box-enter-active,
.box-leave-active {
    transition-property: opacity, transform, top, left;
    transition-duration: 0.6s, 0.6s, 0s, 0s;
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
    border: 3px solid rgb(154, 154, 154, 0.9);
}

.child_boxes {
    position: absolute;
    left: 112px;
    top: 0;
    transform: translateY(calc(-50% + 24px));
}

.child_box {
    position: relative;
    width: 130px;
    height: 40px;
    margin: 8px 0;
    background-color: rgb(154, 154, 154, 0.9);
    border-radius: 5px;
}

.sanjiao {
    position: absolute;
    content: "";
    border-right: 20px solid rgb(154, 154, 154, 0.9);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    left: 80px;
    top: calc(50% - 20px);
}

.child_box img {
    position: absolute;
    left: 10px;
    top: 5px;
    width: 30px;
    height: 30px;
}

.child_box_text {
    padding-left: 30px;
    line-height: 40px;
    text-align: center;
    font-weight: 700;
    color: rgba(82, 79, 79, 0.9);
}

.childBox-enter-from,
.childBox-leave-to {
    opacity: 0;
}

.childBox-enter-to,
.childBox-leave-from {
    opacity: 1;
}

.childBox-enter-active,
.childBox-leave-active {
    transition: all 0.8s;
}
</style>