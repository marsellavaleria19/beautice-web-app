<template>
  <button class="bg-[#FF64AE] rounded-full h-[52px] w-[158px] text-white text-[16px] font-semibold tracking-wide">
    {{ titleButton }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    titleButton: {
      type: String,
      default: ''
    }
  }
}
</script>
