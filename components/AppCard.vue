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
                <NuxtLink :to="post.url" v-if="post.url">
                    <span class="mb-2 text-l tracking-tight text-gray-900 dark:text-white">Open app
                        <Icon name="ph:arrow-square-out" />
                    </span>
                </NuxtLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <a :href="post.repo" v-if="post.repo">
                    <span class="mb-2 text-l  tracking-tight text-gray-900 dark:text-white">View code
                        <Icon name="ph:arrow-square-out" />
                    </span>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                <NuxtLink :to="post.tutorial" v-if="post.tutorial">
                    <span class="mb-2 text-l  tracking-tight text-gray-900 dark:text-white">Read tutorial
                        <Icon name="ph:arrow-square-out" />
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                </NuxtLink>
                <a :href="post.video" v-if="post.video">
                    <span class="mb-2 text-l  tracking-tight text-gray-900 dark:text-white">Watch video
                        <Icon name="ph:arrow-square-out" />
                    </span>
                </a><br>
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
