<template>
  <Container>
    <a v-for="thread in threadsMeta" :key="thread.id" :href="`/forum/${thread.id}`">
      <div class="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 class="text-xl font-semibold">{{ thread.title }}</h2>
      </div>
    </a>
  </Container>
</template>

<script>
import threadsMeta from '~/static/threads-meta.json'
export default {
  data() {
    return {
      threadsMeta
    }
  }
}
</script>
