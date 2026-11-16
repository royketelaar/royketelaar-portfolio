<template>
  <NuxtLayout>
    <p class="text-sm tracking-[0.16em] text-accent uppercase">{{ error?.statusCode ?? 404 }}</p>
    <h1 class="mt-4 text-[clamp(2.7rem,6vw,4.8rem)] leading-[0.98]">
      {{ error?.statusCode === 404 ? t(copy.missing.title) : t(copy.missing.other) }}
    </h1>
    <p class="mt-6 max-w-xl text-lg text-muted">{{ t(copy.missing.body) }}</p>
    <button type="button" class="btn btn-primary mt-8" @click="goHome">
      {{ t(copy.missing.home) }}
    </button>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { copy } from '~/data/site'

const props = defineProps<{ error: NuxtError }>()
const { t } = useSite()
const localePath = useLocalePath()

const goHome = () => clearError({ redirect: localePath('/') })

usePageMeta(
  () => (props.error?.statusCode === 404 ? t(copy.missing.title) : t(copy.missing.other)),
  () => t(copy.missing.body)
)
</script>
