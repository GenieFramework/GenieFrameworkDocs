<script setup>
defineProps(['object', 'category'])
</script>

<template>
    <div
        class="block max-w-xm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <a style="display:block;position:relative;top:-100px;visibility:hidden" :id="object"></a>
        <a class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white" :href="'#'+object">{{ object }}</a> -
        <span>{{ category }}</span>
        <div class="font-normal text-gray-700 dark:text-gray-400">
            <ContentSlot :use="$slots.docstring" unwrap="div">
            </ContentSlot>
        </div>
    </div>
    <br>
</template>

<style scoped></style>
