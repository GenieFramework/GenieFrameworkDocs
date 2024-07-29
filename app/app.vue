<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/public/assets/icon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://learn.genieframework.com/assets/meta.png',
  twitterImage: 'https://learn.genieframework.com/assets/meta.png',
  twitterCard: 'summary_large_image'
})

const links =  [{
    label: 'Pro',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/pro',
  }, {
    label: 'Pricing',
    icon: 'i-heroicons-ticket',
    to: '/pro/pricing'
  }, {
    label: 'Templates',
    icon: 'i-heroicons-computer-desktop',
    to: '/pro/templates'
  }]

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
        <NuxtPage />
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
