<template>
    <div id="leftmenu">
        <div class="individual_label">
            <div class="individual_label_image"></div>
            <div class="individual_label_user_image"></div>
            <div class="individual_label_user_name">林衍</div>
            <div class="individual_label_position_image"></div>
            <div class="individual_label_position_name">四川</div>
            <div class="individual_label_information">
                <div class="individual_label_information_box">
                    <div class="individual_label_information_box_name">评论</div>
                    <div class="individual_label_information_box_number">23</div>
                </div>
                <div class="individual_label_information_box">
                    <div class="individual_label_information_box_name">文章</div>
                    <div class="individual_label_information_box_number">2</div>
                </div>
                <div class="individual_label_information_box">
                    <div class="individual_label_information_box_name">关注</div>
                    <div class="individual_label_information_box_number">56</div>
                </div>
                <div class="individual_label_information_box">
                    <div class="individual_label_information_box_name">粉丝</div>
                    <div class="individual_label_information_box_number">7</div>
                </div>
            </div>
            <div class="individual_label_contact">Contact information</div>
            <div class="individual_label_contact_line">
                <div @click="Opentarget('http://wpa.qq.com/msgrd?v=3&uin=1439713475&site=qq&menu=yes')" class="individual_label_contact_line_QQ"></div>
                <div @click="Opentarget('https://s2.loli.net/2022/09/18/WNqR1UjAgYikcXm.png')" class="individual_label_contact_line_Wechat"></div>
                <div @click="Opentarget('https://github.com/linyana')" class="individual_label_contact_line_Github"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const Opentarget = (target) => {
     window.open(target);
};
</script>

<style>
#leftmenu {
    width: 384px;
}

.individual_label {
    position: relative;
    width: 384px;
    height: 600px;
    border-radius: 10px;
    transition: top 0.9s ease-out;
    box-shadow: 0 0 30px rgb(0, 0, 0, 0.5);
    text-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
    color: rgba(56, 54, 54, 0.8);
    background-color: rgb(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
}

.individual_label_image {
    width: 100%;
    height: 180px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url(@/assets/home/IndividualLabel.jpg);
    background-size: 150% 150%;
    background-position: 40% 70%;
}

.individual_label_user_image {
    position: absolute;
    top: 110px;
    left: calc(50% - 60px);
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-image: url(https://s2.loli.net/2022/09/18/jCPwbDXz2sacN9i.jpg);
    background-size: 100% 100%;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.6);
}

.individual_label_user_name {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    cursor: pointer;
    position: absolute;
    top: 250px;
    left: calc(50% - 100px);
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 2.2em;
    font-weight: 600;
    text-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
}

.individual_label_position_image {
    position: absolute;
    top: 312px;
    left: calc(50% - 60px);
    width: 25px;
    height: 25px;
    background-image: url(@/assets/home/Position.png);
    background-size: 100% 100%;
}

.individual_label_position_name {
    position: absolute;
    top: 310px;
    left: calc(50% - 50px);
    width: 100px;
    height: 30px;
    text-align: center;
    font-size: 1.3em;
    text-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
}

.individual_label_information {
    display: flex;
    position: absolute;
    left: 10%;
    top: 375px;
    width: 80%;
    height: 60px;
}

.individual_label_information_box {
    position: relative;
    width: 25%;
}

.individual_label_information_box_name {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    cursor: pointer;
    position: absolute;
    top: 2px;
    left: calc(50% - 25px);
    width: 50px;
    height: 30px;
    text-align: center;
    font-size: 1.2em;
}

.individual_label_information_box_number {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    cursor: pointer;
    position: absolute;
    top: 35px;
    left: calc(50% - 20px);
    width: 40px;
    height: 30px;
    text-align: center;
    font-size: 1em;
}

.individual_label_contact {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    cursor: pointer;
    position: absolute;
    top: 450px;
    left: calc(50% - 160px);
    width: 320px;
    height: 40px;
    border-radius: 10px;
    font-size: 1.2em;
    line-height: 40px;
    text-align: center;
    background-color: rgb(25, 224, 158);
    color: white;
}

.individual_label_contact_line {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 515px;
    left: calc(50% - 150px);
    width: 300px;
    height: 50px;
}

.individual_label_contact_line > div {
    cursor: url(@/assets/cur/x2.cur), auto !important;
    width: 40px;
    height: 40px;
    background-size: 100% 100%;
}

.individual_label_contact_line_QQ {
    background-image: url(@/assets/home/QQ.png);
}

.individual_label_contact_line_Wechat {
    background-image: url(@/assets/home/Wechat.png);
}

.individual_label_contact_line_Github {
    background-image: url(@/assets/home/Github.png);
}
</style>