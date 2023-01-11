<template>
  <div class="lg:flex lg:justify-between items-center container mx-auto max-w-[1137px] " :class="{'flex-row-reverse':reverse}">
    <slot name="mission" />
    <slot />
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
