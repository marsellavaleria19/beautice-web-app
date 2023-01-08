<template>
  <button class="bg-[#FF64AE] rounded-full h-[52px] w-full text-white text-[16px] font-semibold tracking-wide">
    <!-- {{ titleButton }} -->
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
  // props: {
  //   titleButton: {
  //     type: String,
  //     default: ''
  //   }
  // }
}
</script>
