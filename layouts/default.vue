<script lang="ts" setup>
const { page } = useContent()
defineOgImageStatic({ component: 'PostOgImage', description: page.description, ogtitle: page.title })
</script>

<template>
    <DocsPageLayout>
        <slot />
    </DocsPageLayout>
</template>
