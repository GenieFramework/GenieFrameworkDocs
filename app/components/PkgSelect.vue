<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const selected_pkg = ref('Genie.jl')

const getPackageNameFromRoute = () => {
  const pathSegments = route.path.split('/').filter(Boolean);
  const basePath = '/framework/' + pathSegments[1];  // Extract the first part of the path

  const routeMap = {
    '/framework/guides': 'Guides',
    '/framework/genie.jl': 'Genie.jl',
    '/framework/stipple.jl': 'Stipple.jl',
    '/framework/searchlight.jl': 'SearchLight.jl',
  };

  return routeMap[basePath] || ''; // Default to 'Genie.jl' if no match is found
};

selected_pkg.value = getPackageNameFromRoute();

// React to route changes
watchEffect(() => {
  selected_pkg.value = getPackageNameFromRoute();
});

const items = [
   [
   {
    label: 'Guides',
    icon: 'i-heroicons-book-open-20-solid',
    shortcuts: ['U'],
    click: () => {
        router.push('/framework/guides')
    }
  },
   {
    label: 'Genie.jl',
    icon: 'i-heroicons-server-stack-20-solid',
    shortcuts: ['G'],
    click: () => {
        router.push('/framework/genie.jl')
    }
  },
   {
    label: 'Stipple.jl',
    icon: 'i-heroicons-window-20-solid',
    shortcuts: ['S'],
    click: () => {
        router.push('/framework/stipple.jl')
    }
  },
   {
    label: 'SearchLight.jl',
    icon: 'i-heroicons-circle-stack-20-solid',
    shortcuts: ['L'],
    click: () => {
        router.push('/framework/searchlight.jl')
    }
  }
]]

const item = computed(() => items[0].find(i => i.label === selected_pkg.value))
</script>

<template>
  <div class="mb-3 lg:mb-6" v-if="item">
    <UDropdown
      class="w-full"
      :items="items"
      color="gray"
      mode="hover"
      :ui="{ width: 'w-full' }"
      :popper="{ strategy: 'absolute', placement: 'bottom' }"
    >
      <UButton color="gray" class="w-full">
        <UIcon v-if="item.icon" :name="item.icon" class="w-4 h-4 flex-shrink-0 text-gray-600 dark:text-gray-300" />

        <span class="text-gray-900 dark:text-white">{{ item.label }}</span>

        <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 text-gray-400 dark:text-gray-500 ml-auto -mr-1" />
      </UButton>

      <template #item="{ item }">
        <UIcon v-if="item.icon" :name="item.icon" class="w-4 h-4 flex-shrink-0 text-gray-600 dark:text-gray-300" />

        <span>{{ item.label }}</span>

        <span class="truncate text-gray-400 dark:text-gray-500">{{ item.suffix }}</span>
      </template>
    </UDropdown>
  </div>
</template>
