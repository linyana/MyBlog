<template>
    <div id="about">
        <Title></Title>
        <div class="banner">
            <div class="banner_name">林衍</div>
        </div>
        <div class="about_content">
            <div class="img">
                <img src="https://s2.loli.net/2022/09/18/jCPwbDXz2sacN9i.jpg" alt />
            </div>
            <h1>个人简介</h1>
            <p class="introduce">在校大学生一枚 , 每天的时间都花在前端和云顶上 , 没什么远大理想 , 做自己喜欢的事情就好 。 </p>
            <p class="introduce">
                另外 , <a href="https://github.com/linyana">欢迎关注我的github</a> 来共同进步 。
            </p>

        </div>
    </div>
</template>

<script setup>
import Title from "@/components/Title.vue";
</script>

<style scoped>
#about {
    background-color: rgb(223, 222, 222);
}

.banner {
    width: 100%;
    height: 400px;
    background: url("https://s2.loli.net/2022/09/07/p5ezVoQYwk1BXJ6.gif") center
        center / cover no-repeat;
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

.about_content {
    position: relative;
    width: 850px;
    height: 400px;
    padding: 60px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 50px auto;
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    text-align: center;
}

.img {
    text-align: center;
}

.img img {
    width: 20%;
    border-radius: 500px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.4);
}

p.introduce {
    color: rgb(104, 103, 103);
    font-size: 18px;
}
</style>