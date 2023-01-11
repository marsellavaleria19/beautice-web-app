<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <slot />
    <!-- <slot name="service" /> -->
  </div>
</template>

<script>

export default {
  name: 'BaseColumn',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
