<template>
  <BaseColumn class="container mx-auto max-w-[1137px] lg:gap-[50px]" :class="{'flex-row-reverse':reverse}">
    <slot name="mission" />
    <slot />
  </BaseColumn>
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
