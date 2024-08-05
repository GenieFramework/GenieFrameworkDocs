<script setup>
const contentQuery = await queryContent('app-gallery/').sort(
    { timestamp: -1, }
).find()
</script>


<template>
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-5" >
    <div class="mb-20 space-y-2 text-center">
      <h2 class="text-5xl font-bold text-gray-800 md:text-5xl dark:text-white">
        Genie app gallery
      </h2>
    <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl">
    Complete examples of Genie apps
    </p>
    </div>
  </div>
  <div style="max-width:1400px; margin-left:auto; margin-right:auto; margin-top:30px;margin-bottom:50px">
    <UPageGrid  >
    <UCard v-for="post in contentQuery" style="width:450px;padding:0px" :ui="{ ring:' ring-2', header: {padding: ''}, body: {padding:'px-1 py-1 sm:p-4'}}" >

    <template #header>
            <NuxtLink :to="post.url" target="_blank">
      <img class="rounded-t-lg" :src="post.preview" alt="" style="height:253px;width:450px" />
            </NuxtLink>
    </template>

    <span class="text-xl font-bold" style="font-weight:500 font-size:large">{{post.title}}</span>
    <br>
    <br>

                <div class="space-x-4 mb-2">
                    <NuxtLink :to="post.url" v-if="post.url"  target="_blank" class="pr-3 text-l  text-gray-900 dark:text-white">
                        App
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <NuxtLink :href="post.repo" v-if="post.repo" target="_blank"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Code
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <NuxtLink :to="post.tutorial" v-if="post.tutorial" target="_blank"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Tutorial
                        <Icon name="ph:arrow-square-out" />
                    </NuxtLink>
                    <a :href="post.video" v-if="post.video"
                        class="pr-3 text-l tracking-tight text-gray-900 dark:text-white">
                        Tutorial
                        <Icon name="ph:arrow-square-out" />
                    </a>
                </div>
    <div style="min-height:100px">
      {{post.description}}
      </div>

    </UCard>

    </UPageGrid>
  </div>
</template>


