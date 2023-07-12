<script setup lang="ts">
defineProps({
    tag: {
        type: String,
        required: true
    },
})
</script>
<template>
    <!--! <NuxtLink class="..." :to="`/tutorials/tags/${tag}`"> -->
    <span
        class="bg-gray-200 text-black-800 text-xs font-medium mr-4 px-2.5 py-1.5 rounded-full dark:bg-black-900 dark:text-gray-300"
        style="padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px;">{{ tag }}</span>

    <!-- </NuxtLink> -->
</template>
