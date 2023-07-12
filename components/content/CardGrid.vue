<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  }
})

// let exhaustive;
// const { result, search } = useAlgoliaSearch('resources')
// onMounted(async () => {
//   exhaustive = await search({ query: 'v' })
//  console.log(exhaustive);
// })


</script>

<template>
  <section class="card-grid">
    <ContentSlot :use="$slots.root" />
    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    paddingBottom: '{space.10}',
    '@sm': {
        // paddingBottom: '{space.24}',
    },
    '@lg': {
        // paddingBottom: '{space.32}',
    },
    '.title': {
      marginBottom: '{space.8}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.color.text.primary}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      fontWeight: '{fontWeight.semibold}',
      textAlign: 'left',
      color: '{elements.color.text.primary}',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    }
  }
})
</style>

