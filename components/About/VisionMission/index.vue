<template>
  <div class="lg:flex lg:justify-between items-center container mx-auto max-w-[1137px] " :class="{'flex-row-reverse':reverse}">
    <!-- <img :src="require(`~/assets/image/ilustrasion/${image}`)" :alt="typeContent" width="373.51" height="235.06px"> -->
    <slot name="mission" />
    <slot />
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
