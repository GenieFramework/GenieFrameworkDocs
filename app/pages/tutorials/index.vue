<script setup>
const contentQuery = await queryContent("tutorials/")
  .sort({ timestamp: -1 })
  .find();

definePageMeta({
  layout: "framework",
});
useSeoMeta({
  titleTemplate: "Tutorials",
  title: "Tutorials",
  ogTitle: "Tutorials",
  description: "Step-by-step guides to building Genie apps",
  ogDescription: "Step-by-step guides to building Genie apps",
});
</script>

<template>
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-5">
    <div class="mb-20 space-y-2 text-center">
      <h2 class="text-5xl font-bold text-gray-800 md:text-5xl dark:text-white">
        Tutorials
      </h2>
      <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl">
        Learn to build Genie apps step by step
      </p>
    </div>
  </div>
  <div
    style="
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    "
  >
    <UPageGrid :ui="{ wrapper: 'p-4' }">
      <UCard
        v-for="post in contentQuery"
        :ui="{ header: { padding: '' }, body: { padding: 'px-1 py-1 sm:p-4' } }"
      >
        <template #header>
          <NuxtLink :to="post._path">
            <img
              class="rounded-t-lg"
              :src="post.image"
              alt=""
              style="height: 253px; width: 450px"
            />
          </NuxtLink>
        </template>

        <NuxtLink :to="post._path">
          <span
            class="text-xl font-bold"
            style="font-weight:500 font-size:large"
            >{{ post.title }}</span
          >
        </NuxtLink>
        <br />
        <br />

        {{ post.description }}
      </UCard>
    </UPageGrid>
  </div>
</template>
