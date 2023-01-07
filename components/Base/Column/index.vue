<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <!-- <img :src="require(`~/assets/image/ilustrasion/${image}`)" :alt="typeContent" width="373.51" height="235.06px"> -->
    <!-- <slot name="about" /> -->
    <slot />
    <slot name="service" />
    <!-- <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <div v-html="description" /> -->
  </div>
</template>

<script>

export default {
  name: 'VisionSection',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
