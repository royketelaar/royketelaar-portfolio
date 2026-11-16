<template>
  <div class="flex min-h-screen flex-col">
    <SkipLink />
    <SiteHeader />
    <main id="inhoud" ref="content" tabindex="-1" class="flex-1">
      <div class="mx-auto w-full max-w-[70rem] px-5 py-12 md:px-8 md:py-16">
        <slot />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const content = useTemplateRef<HTMLElement>('content')
const ready = ref(false)

onMounted(() => {
  ready.value = true
})

watch(
  () => route.path,
  async () => {
    if (!ready.value || route.hash) return
    await nextTick()
    content.value?.focus()
  }
)
</script>
