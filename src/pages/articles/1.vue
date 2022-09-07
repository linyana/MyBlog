<template>
    <article v-highlight v-html="markdownhtml"></article>
    <div class="right_content"></div>
</template>

<script setup>
import { ref } from "vue";
import { html } from "@/assets/article/1.md";
import "@/assets/article/css/md.css";

const markdownhtml = ref(html);
</script>

<style scoped>
.right_content {
    border-radius: 10px;
    margin: 50px 0;
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
}
</style>