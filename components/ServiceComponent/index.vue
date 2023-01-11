<template>
  <div class="container mx-auto max-w-[1100px] pb-[50px] lg:pb-[141px]">
    <div class="text-center">
      <BaseTitle title="Our Service" />
      <BaseSubtitle title="We focus on your beauty" />
      <BaseDetail>Lorem ipsum dolor sit amet</BaseDetail>
    </div>
    <div class="mt-[70px]">
      <div class="lg:flex items-center">
        <div class="mb-5 lg:mb-0 lg:mr-[84px]">
          <img src="~/assets/image/services/service-1.svg" class="w-full" width="291" height="254">
        </div>
        <div>
          <img src="~/assets/image/services/service-2.svg" class="w-full" width="725" height="254">
        </div>
      </div>
      <div class="mb-5 lg:mb-0 lg:flex mt-5 md:mt-[68px]">
        <div class="lg:mb-0 lg:mr-[84px] mb-5 lg:mb-0">
          <img src="~/assets/image/services/service-3.svg" class="w-full" width="725" height="254">
        </div>
        <div>
          <img src="~/assets/image/services/service-4.svg" class="w-full" width="291" height="254">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServiceSection'
}
</script>
