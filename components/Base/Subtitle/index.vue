<template>
  <h2 class="text-[36px] text-[#091156] font-semibold">
    {{ subtitle }}
  </h2>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
