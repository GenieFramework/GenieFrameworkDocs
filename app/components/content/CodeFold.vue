<script>
export default {
    data() {
        return {
            isFolded: true,
        };
    },
    methods: {
        toggleFold() {
            this.isFolded = !this.isFolded;
        },
    },
};
</script>

<!-- components/CodeFold.vue -->
<template>
    <div class="bg-white-100 border border-gray-300 rounded overflow-hidden dark:bg-slate-800">
        <div class="bg-gray-200 p-4 h-10 flex items-center cursor-pointer dark:bg-slate-800" @click="toggleFold">
            <ContentSlot :use="$slots.header" />
            <span class="text-lg font-bold mr-2 right-0 absolute">{{ isFolded ? '+&nbsp;&nbsp;' : '&#8211;&nbsp;&nbsp;'
            }}</span>
        </div>
        <div class="p-1" v-show="!isFolded">
            <ContentSlot :use="$slots.content" />
        </div>
    </div>
</template>


<style scoped>
/* Custom styles, if needed */
</style>
