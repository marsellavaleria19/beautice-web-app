<template>
  <h1 class="text-white text-[36px]">
    {{ title }}
  </h1>
</template>

<script>

export default {
  name: 'BannerTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
