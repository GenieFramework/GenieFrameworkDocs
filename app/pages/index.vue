<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div class="w-2/3 mx-auto">
    <h1 class="text-4xl font-bold text-center mt-10 mb-10">{{ page.features.title }}</h1>
    <ULandingGrid>
    <ULandingSection 
    class="col-span-6 sm:py-10 "
      v-for="(section, index) in page.sections"
      :key="index"
      :headline="section.headline"
      :title="section.title"
      :description="section.description"
      align="center"
      :features="section.features"
      :links="section.links"
      :id="section.id"
      :ui="{ container:'gap-4 sm:gap-y-4', features:{wrapper: {grid:''}}}"
    >
    </ULandingSection>
    </ULandingGrid>
  </div>
</template>
