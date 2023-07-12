<script setup lang="ts">
defineProps({
    post: {
        type: Object as PropType<ParsedContent>,
        required: true
    },
})
</script>

<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        v-if="post.published && !post.video">
        <NuxtLink :to="post._path">
            <img class="rounded-t-lg" :src="post.image" alt="" style="height:200px;width:100%" />
        </NuxtLink>
        <div class="p-5">
            <NuxtLink :to="post._path">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
            </NuxtLink>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.description }}</p>
            <div class="flex">
                <div v-for="(tag, idx) of post.tags" :key="idx">
                    <!-- The Tag component -->
                    <Tag :tag="tag"></Tag>
                </div>
            </div>
        </div>
    </div>
</template>

