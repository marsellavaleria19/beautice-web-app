<template>
  <div class="w-[82px] h-[26px] tag-backgrond flex justify-center py-[2px]">
    <nuxt-link to="#" class="text-[#8B8B8B] text-[14px] tracking-widest">
      {{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TagWidgetList',
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .tag-backgrond{
    box-shadow: 0px 4px 17px #EEF0FF;
    border-radius: 50px;
  }
</style>
