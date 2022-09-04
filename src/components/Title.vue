<template>
    <div id="title">
        <div class="container">
            <div class="nav">
                <ul>
                    <li>
                        <a href>首页</a>
                    </li>
                    <li>
                        <a href>友情链接</a>
                    </li>
                    <li>
                        <a href>关于我</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
}

.nav {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 70px;
    font-size: 25px;
}

ul {
    width: 350px;
    display: flex;
    justify-content: space-between;
}

li {
    list-style: none;
}

ul li a {
    color: white;
    text-decoration: none;
}
</style>