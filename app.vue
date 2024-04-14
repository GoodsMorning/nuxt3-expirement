<script lang="ts" setup>
const { portalWeb } = useAppConfig()

useHead({
  title: "Hi Portal",
  // title: awesome.name,
  // titleTemplate: `%s - ${awesome.name}`,
})
</script>

<template>
  <body>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </body>
</template>
