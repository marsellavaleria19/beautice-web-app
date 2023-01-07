<template>
  <div class="pt-[41px]">
    <BaseNavbar />
    <container class="h-full">
      <Nuxt />
    </container>

    <BaseFooter class="bottom-0" />
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>
