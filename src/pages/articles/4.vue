<template>
    <div class="left_content">
        <article v-highlight v-html="markdownhtml"></article>
    </div>
    <div class="right_content">
        <div class="menu">
            <div class="title">目录</div>
        </div>
        <Recommended></Recommended>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { html } from "@/assets/article/md/4.md";
import Recommended from "@/components/Recommended.vue";
import "@/assets/article/css/md.css";
import "@/assets/article/css/article.css";

const markdownhtml = ref(html);
</script>

<style scoped>

</style>