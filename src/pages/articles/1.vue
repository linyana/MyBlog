<template>
    <article v-highlight v-html="markdownhtml"></article>
</template>

<script setup>
import { ref } from "vue";
import { html } from "@/assets/article/1.md";
import "@/assets/article/css/md.css";

const markdownhtml = ref(html);
</script>

<style scoped>
</style>