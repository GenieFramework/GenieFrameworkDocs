<script setup lang="ts">
defineProps({
    post: {
        type: Object as PropType<ParsedContent>,
        required: true
    },
    highlighted: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div :class="['app-card', { 'highlighted': highlighted }]">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style="height:100%" v-if="post.published">

            <NuxtLink :to="post.url">
                <img class="rounded-t-lg" :src="post.preview" alt="" style="height:200px;width:100%" />
            </NuxtLink>
            <div class="p-5">
                <a :href="post.url">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
                </a>
                <div class="space-x-4 mb-2">
                    <NuxtLink :to="post.url" v-if="post.url" class="pr-3 text-l  text-gray-900 dark:text-white">
                        App
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <NuxtLink :href="post.repo" v-if="post.repo"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Code
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <NuxtLink :to="post.tutorial" v-if="post.tutorial"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Tutorial
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <a :href="post.video" v-if="post.video"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Video
                        <Icon name="ph:arrow-square-out" />
                    </a>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.description }}</p>
                <div class="flex">
                    <div v-for="(tag, idx) of post.tags" :key="idx">
                        <!-- The Tag component -->
                        <Tag :tag="tag">aaa</Tag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.highlighted {
    /* Add the desired highlight styles here */
    /* border: 3px solid lightblue; */
    /* border-radius: 10px; */
}
</style>
