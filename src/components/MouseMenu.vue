<template>
    <div @click="MouseLeft">
        <transition name="box">
            <div id="mouseMenu" v-show="isMouseMenu" :style="mouseMenuStyle">
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
                                    @click.stop="Middleware(i.functionName,i.target)"
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
        <transition name="cover">
            <div class="cover_box" v-show="isMouseMenu"></div>
        </transition>
    </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";
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
                target: "/",
                functionName: "ToTarget",
            },
            {
                id: 1,
                img: "8.png",
                title: "友情链接",
                target: "/FriendlyLink",
                functionName: "ToTarget",
            },
            {
                id: 2,
                img: "7.png",
                title: "关于我",
                target: "/About",
                functionName: "ToTarget",
            },
        ],
    },
    {
        id: 1,
        img: "16.png",
        children: [
            {
                id: 0,
                img: "15.png",
                title: "回到顶部",
                target: "/",
                functionName: "BackToTop",
            },
        ],
    },
    {
        id: 2,
        img: "6.png",
        children: [
            {
                id: 0,
                img: "19.png",
                title: "刷新页面",
                target: "",
                functionName: "Reload",
            },
            {
                id: 1,
                img: "18.png",
                title: "关闭退出",
                target: "",
                functionName: "CloseThisPage",
            },
        ],
    },
    {
        id: 3,
        img: "5.png",
        isShowChildren: false,
        children: [
            {
                id: 0,
                img: "13.png",
                title: "保存本页",
                target: "",
                functionName: "SaveThisPage",
            },
            {
                id: 1,
                img: "12.png",
                title: "保存整站",
                target: "",
                functionName: "SaveAllPages",
            },
        ],
    },
    {
        id: 4,
        img: "1.png",
        children: [
            {
                id: 0,
                img: "10.png",
                title: "QQ",
                target: "http://wpa.qq.com/msgrd?v=3&uin=1439713475&site=qq&menu=yes",
                functionName: "OpenTarget",
            },
            {
                id: 1,
                img: "11.png",
                title: "WeChat",
                target: "https://s2.loli.net/2022/09/18/WNqR1UjAgYikcXm.png",
                functionName: "OpenTarget",
            },
            {
                id: 2,
                img: "9.png",
                title: "Github",
                target: "https://github.com/linyana",
                functionName: "OpenTarget",
            },
        ],
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

// 中间件
const Middleware = (name, target) => {
    if (name === "ToTarget") {
        ToTarget(target);
    }
    if (name === "SaveThisPage") {
        SaveThisPage();
    }
    if (name === "SaveAllPages") {
        SaveAllPages();
    }
    if (name === "OpenTarget") {
        OpenTarget(target);
    }
    if (name === "BackToTop") {
        BackToTop();
        ReSet();
    }
    if (name === "CloseThisPage") {
        CloseThisPage();
    }
    if (name === "Reload") {
        Reload();
    }
};

// 跳转页面
const router = new useRouter();

const ToTarget = (target) => {
    router.push(target);
    ReSet();
    MouseLeft();
};

// 保存本页

const fake_click = (obj) => {
    let ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
    );
    obj.dispatchEvent(ev);
};

const export_raw = (name, data) => {
    let urlObject = window.URL || window.webkitURL || window;
    let export_blob = new Blob([data]);
    let save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
    );
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fake_click(save_link);
};

const SaveThisPage = () => {
    const demo = document.getElementsByTagName("html")[0].outerHTML;
    export_raw("Demo.html", demo);
};

// 保存整站

const SaveAllPages = () => {
    window.open(
        "https://github.com/linyana/MyBlog/archive/refs/heads/master.zip"
    );
};

// 打开页面(联系方式)

const OpenTarget = (target) => {
    window.open(target);
};

// 回到顶部

const BackToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    isMouseMenu.value = false;
};

// 关闭本页

const CloseThisPage = () => {
    window.open("about:blank", "_self");
    window.close();
};

// 刷新本页

const Reload = () => {
    location.reload();
};

// 鼠标
let isMouseMenu = ref(false);

let mouseMenuStyle = ref("");

window.oncontextmenu = (event) => {
    event.preventDefault();
    mouseMenuStyle.value = `left: ${event.clientX + 25}px;top: ${
        event.clientY - 100
    }px`;
    isMouseMenu.value = true;
};

const MouseLeft = () => {
    isMouseMenu.value = false;
    ReSet();
};
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
    transition: all 0.3s;
}

.box:hover {
    background-color: rgba(182, 179, 179, 0.9);
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
    transition: all 0.3s;
}

.circle:hover {
    border: 3px solid rgba(182, 179, 179, 0.9);
}

.child_boxes {
    position: absolute;
    left: 112px;
    top: 0;
    transform: translateY(calc(-50% + 26px));
}

.child_box {
    position: relative;
    width: 130px;
    height: 40px;
    margin: 8px 0;
    background-color: rgb(154, 154, 154, 0.9);
    border-radius: 5px;
    transition: all 0.3s;
}

.child_box:hover {
    background-color: rgba(182, 179, 179, 0.9);
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

.cover_box {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
}

.cover-enter-from,
.cover-leave-to {
    opacity: 0;
}

.cover-leave-from,
.cover-enter-to {
    opacity: 1;
}

.cover-enter-active,
.cover-leave-active {
    transition: opacity 0.5s;
}
</style>