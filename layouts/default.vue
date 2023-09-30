<script lang="ts" setup>
const { page } = useContent()
defineOgImageStatic({ component: 'PostOgImage', description: page.description, ogtitle: page.title })
import { onMounted } from 'vue';
import hljs from 'highlight.js'; // Import highlight.js if needed

onMounted(() => {
    console.log("mounted")
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});
</script>

<template>
    <DocsPageLayout>
        <slot />
    </DocsPageLayout>
</template>

<style>
.hljs {
    width: 100%
}
</style>
