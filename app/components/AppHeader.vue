<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<NavItem[]>('navigation', [])
const links = [
  {
    label: 'Genie Builder',
    to: '/geniebuilder',
    icon: 'i-heroicons-code-bracket',
    description: ''
  },
{
  label: 'Genie Framework',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '',
  children: [
  {
    label: 'Guides',
    to: '/framework/guides',
    icon: 'i-heroicons-book-open',
    description: '',
  },
  {
    label: 'Genie.jl',
    to: '/framework/genie.jl',
    icon: 'i-heroicons-book-open',
    description: '',
  },
  {
    label: 'Stipple.jl',
    to: '/framework/stipple.jl',
    icon: 'i-heroicons-book-open',
    description: '',
  },
  {
    label: 'SearchLight.jl',
    to: '/framework/searchlight.jl',
    icon: 'i-heroicons-book-open',
    description: '',
  }
  ] },
  {
    label: 'Tutorials',
    to: '/tutorials',
    icon: 'i-heroicons-book-open',
    description: '',
  },
  {
    label: 'App gallery',
    to: '/app-gallery',
    icon: 'i-heroicons-book-open',
    description: '',
  }

  ]
const { header } = useAppConfig()
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto prefers-color-scheme" />
    </template>

    <template
      v-if="header?.search"
      #center
    >
    </template>

    <template #right>
      <div>
      <UContentSearchButton class="hidden lg:flex" label="Search"  />
      </div>

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
