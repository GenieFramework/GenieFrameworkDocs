<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div style="background: white" class="w-full h-full flex flex-row text-black relative">
        <div class=" px-20 flex flex-col" style="color: #000E55;margin-top:240px">
            <p :style="{ fontSize: '55px', lineHeight: '1.5em' }" class="font-bold " v-html="title"></p>
            <p :style="{ fontSize: '35px', lineHeight: '1.5em' }" class="" v-html="description"></p>
        </div>
        <div class="flex items-center flex-row absolute left-20 top-20" :style="{ width: '1000px', left: '85px' }">
            <img src="/assets/logo.svg" width="120" height="110" class="rounded-xl mr-5">
        </div>
    </div>
</template>
