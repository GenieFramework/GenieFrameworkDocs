<script setup lang="ts">
import type { NavItem } from "@nuxt/content";

const navigation = inject<Ref<NavItem[]>>("navigation");
definePageMeta({
  layout: "framework",
});

useSeoMeta({
  title: "Genie documentation",
  ogTitle: "Genie documentation",
  description: "Everything you need to start developing Genie apps.",
  ogDescription: "Everything you need to start developing Genie apps.",
});
</script>

<template>
  <UContainer>
    <UPage>
      <slot />
    </UPage>
  </UContainer>
</template>
