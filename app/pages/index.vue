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
  <div>
  <ULandingSection :title="page.features.title">
    <ULandingGrid>
    <ULandingSection 
      class="col-span-12 sm:py-10"
      v-for="(section, index) in page.sections"
      :key="index"
      :headline="section.headline"
      :title="section.title"
      :description="section.description"
      align="left"
      :features="section.features"
      :links="section.links"
      :id="section.id"
    >
    </ULandingSection>
    </ULandingGrid>
  </ULandingSection>
  </div>
</template>
