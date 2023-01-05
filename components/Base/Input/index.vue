<template>
  <input type="text" class="border border-[#D9DDFE] rounded-[15px] h-[62px]  w-full placeholder:text-[16px] tracking-widest py-[17px] px-[24px] text-[#C5C5C5] focus:outline-none" :placeholder="placeholder">
</template>

<script>

export default {
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
