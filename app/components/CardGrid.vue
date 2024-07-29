<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  }
})
</script>

<template>
  <section class="card-grid">
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.card-grid {
  position: relative;
  padding-bottom: var(--space-10);
}
@media (min-width: 640px) {
  .card-grid {
    padding-bottom: var(--space-24);
  }
}
@media (min-width: 1024px) {
  .card-grid {
    padding-bottom: var(--space-32);
  }
}
.title {
  margin-bottom: var(--space-8);
  font-size: var(--text-3xl-fontSize);
  line-height: var(--text-3xl-lineHeight);
  font-weight: var(--fontWeight-bold);
  letter-spacing: var(--letterSpacing-tight);
  color: var(--elements-color-text-primary);
}
@media (min-width: 640px) {
  .title {
    font-size: var(--text-4xl-fontSize);
    line-height: var(--text-4xl-lineHeight);
  }
}
.layout {
  display: grid;
  gap: var(--space-4);
  font-weight: var(--fontWeight-semibold);
  text-align: left;
  color: var(--elements-color-text-primary);
}
@media (min-width: 640px) {
  .layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .layout {
    gap: var(--space-8);
  }
}
</style>
