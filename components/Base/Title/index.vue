<template>
  <h1 class="text-[16px] text-[#FF64AE] font-semibold">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
