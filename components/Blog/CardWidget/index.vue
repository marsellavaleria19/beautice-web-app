
<template>
  <div class="rounded-[50px] card-background bg-white md:max-w-[350px] pt-[50px]">
    <div class="container mx-auto">
      <h1 class="text-[16px] text-[#091156] font-semibold">
        {{ titleWidget }}
      </h1>
      <slot />
      <slot name="category" />
      <slot name="tag" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardWidget',
  props: {
    titleWidget: {
      type: String,
      default: ''
    }
  }
}
</script>

  <style scoped>
    .card-background{
    box-shadow: -2px 4px 31px 9px #F2F4FF
    }
  </style>
</template>
