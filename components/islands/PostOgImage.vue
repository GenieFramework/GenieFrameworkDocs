<script setup lang="ts">
const props = defineProps({
    path: String,
    title: String,
    description: String,
})
const containerStyles = {
    padding: '0 60px',
    backgroundImage: 'linear-gradient(to bottom right, #111827, #0E262C)',
}

const initialStyles = {
    background: 'linear-gradient(90deg, rgb(17, 153, 142), rgb(56, 239, 125) 75%)',
    'background-clip': 'text',
    '-webkit-background-clip': 'text',
    color: 'transparent',
    fontSize: '45px',
}
</script>

<template>
    <div style="background: white" class="w-full h-full flex flex-row text-black relative">
        <div class=" px-20 flex flex-col" style="color: #000E55;margin-top:240px">
            <p :style="{ fontSize: '55px', lineHeight: '1.5em' }" class="font-bold " v-html="title"></p>
            <p :style="{ fontSize: '35px', lineHeight: '1.5em' }" class="" v-html="description"></p>
        </div>
        <div class="flex items-center flex-row absolute left-25 top-20" :style="{ width: '1000px', left: '85px' }">
            <img src="/assets/genie-cloud.svg" width="160" height="65" class="rounded-xl mr-5">
        </div>
    </div>
</template>
