<script setup>
      const route = useRoute()
      const slug = route.params.slug // When calling /abc the slug will be "abc"
</script>

<template>
  <h1>{{ slug }}</h1>
</template>

