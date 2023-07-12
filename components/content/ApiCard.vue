<script setup>
defineProps(['object', 'category'])
</script>

<template>
    <div
        class="block max-w-xm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <span class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ object }}</span> -
        <span>{{ category }}</span>
        <hr>
        <div class="font-normal text-gray-700 dark:text-gray-400">
            <ContentSlot :use="$slots.docstring" unwrap="div">
            </ContentSlot>
        </div>
    </div>
    <br>
</template>

<style scoped></style>
