<template>
    <Container>
        <div class="pt-8">
            <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-7xl dark:text-white text-center"> Genie Discord forum
            </h1>
            <div class="space-y-4">
                <a v-for="thread in threadsMeta" :key="thread.id" :href="`/forum/${thread.id}`"
                    class="block bg-gray-100 mt-1 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-200">
                    <h2 class="text-lg font-medium  border-gray-300  flex items-center">{{ thread.title }}</h2>
                </a>
            </div>
        </div>
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
