<template>
    <div id="mouseMenu">
        <div class="boxes">
            <div class="box" v-for="item in boxes" :key="item.id">
                <img :src="item.img" alt />
                <div class="circle" @click.stop="showChildren(item.isShowChildren)"></div>
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
</template>

<script setup>
const boxes = [
    {
        id: 0,
        img: "./src/assets/images/mouseMenu/1.png",
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
        img: "./src/assets/images/mouseMenu/2.png",
    },
    {
        id: 2,
        img: "./src/assets/images/mouseMenu/6.png",
    },
    {
        id: 3,
        img: "./src/assets/images/mouseMenu/5.png",
    },
    {
        id: 4,
        img: "./src/assets/images/mouseMenu/4.png",
    },
];

const showChildren = (a) => {
    a = true;
    console.log(a)
};
</script>

<style scoped>
#mouseMenu {
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    width: 100px;
    height: 260px;
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