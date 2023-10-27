<template>
    <div>
        <ul class="docs-aside-tree">
            <li v-for="link in links" :key="link.label" class="mb-2">
                <nuxt-link :to="link.to" :class="{ 'highlighted-link': isLinkActive(link.to) }">
                    <Icon :name="link.icon" class="text-xl pb-1" />
                    {{ link.label }}
                </nuxt-link>
            </li>
        </ul>
    </div>
    <hr class="mt-4">
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const links = [
    {
        label: 'Get started',
        icon: 'ph:rocket-launch',
        to: '/docs/guides',
    },
    {
        label: 'Reference',
        icon: 'ph:books',
        to: '/docs/reference',
    },
    {
        label: 'Code examples',
        icon: 'ph:code',
        to: '/docs/examples',
    },
    {
        label: 'API',
        icon: 'ph:puzzle-piece',
        to: '/docs/api',
    },
];

const route = useRoute();
const currentSection = ref('');

onMounted(() => {
    setCurrentSection();
});

watch(route, () => {
    setCurrentSection();
});

function setCurrentSection() {
    const pathParts = route.path.split('/');
    currentSection.value = pathParts[2];
}

function isLinkActive(path) {
    const pathParts = path.split('/');
    return currentSection.value === pathParts[2];
}
</script>

<style scoped>
.highlighted-link {
    /* Set any styles you'd like for the active link */
    font-weight: bold;
    background: #F6F5F4;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 7px;
    padding-top: 4px;
    padding-bottom: 4px;
}
</style>

