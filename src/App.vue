<template>
    <div @click="MouseLeft">
        <router-view></router-view>
        <MouseMenu></MouseMenu>
    </div>
</template>

<script setup>
import MouseMenu from "@/components/MouseMenu.vue";


</script>

<style scoped>

</style>