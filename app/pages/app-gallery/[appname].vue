<script setup>
import { ref, nextTick } from 'vue';

const {page} = useContent()
console.log("page")
console.log(page._id)
console.log("page")

const contentQuery = await queryContent('app-gallery/').sort(
    { timestamp: -1, }
).find()
const route = useRoute()
const appname = route.params.appname // When calling /abc the slug will be "abc"

const selectedApp = contentQuery.find(app => app._path.split('/').pop() === appname);
const pageTitle = selectedApp ? `Genie App Gallery - ${selectedApp.title}` : 'Genie App Gallery';

useHead(() => ({
    title: pageTitle,
    meta: [
      {
        property: 'og:title',
        content: selectedApp.title + " - Genie Cloud Resource Hub"
      },
      {
        property: 'og:description',
        content: selectedApp.description
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: selectedApp.preview  // Provide a default image URL if desired
      },
      {
        property: 'og:image',
        content: selectedApp.preview  // Provide a default image URL if desired
      },
    ],
}));

const cardRefs = contentQuery.map(() => ref(null));

onMounted(async () => {
  await nextTick();
  const selectedIndex = queryContent.findIndex(app => app._path.split('/').pop() === appname);
  if (selectedIndex !== -1) {
    cardRefs[selectedIndex].value.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

if (process.client) {
/* window.location.href = selectedApp.url; */

}
</script>

<template>
    <Container>
        <div class="relative min-h-[89vh]">
            <div class="pt-12">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="mb-20 space-y-2 text-center">
                        <h2 class="text-3xl font-bold text-gray-800 md:text-7xl dark:text-white">
                            Genie app gallery
                        </h2>
                        <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl">
                            Complete examples of Genie apps
                        </p>
                    </div>
                </div>
                <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 mx-4 pb-12">
                    <CardGrid>
                         <AppCard v-for="(post, index) in contentQuery" :post="post" :key="post._id" :ref="cardRefs[index]" :highlighted="post._path.split('/').pop() === appname" />
                    </CardGrid>
                </div>
            </div>
        </div>
    </Container>
</template>

