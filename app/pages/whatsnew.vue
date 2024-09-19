<script setup>
const whatsnew = await queryContent().where({ title: "What's new" }).findOne()

</script>

<template>
  <UContainer>
  <UPage>
  <UPageBody prose>
  <ContentRenderer :value="whatsnew" />
  </UPageBody>
  </UPage>
  </UContainer>
</template>

