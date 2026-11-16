<template>
  <a href="#inhoud" class="skip btn btn-primary">
    {{ t(copy.skip) }}
  </a>
</template>

<script setup lang="ts">
const { t, copy } = useSite()
</script>

<style scoped>
.skip {
  position: absolute;
  left: 1rem;
  top: 0.75rem;
  z-index: 80;
  transform: translateY(-150%);
}

.skip:focus {
  transform: none;
}
</style>
