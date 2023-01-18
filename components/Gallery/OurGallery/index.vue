<template>
  <div class="container mx-auto max-w-[1140px]">
    <div class="md:flex justify-start items-center">
      <div class="mb-3 md:mb-0">
        <BaseTitle title="Our Gallery" class="mb-[12px]" />
        <BaseSubtitle subtitle="Check out the collection pictures from our clinic" class="md:max-w-[615px] md:mr-[68px]" />
      </div>
      <BaseDetail class="md:max-w-[407px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </BaseDetail>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[72px] justify-items-center place-items-stretch gap-9">
      <div v-for="index in 9" :key="index">
        <img :src="require(`~/assets/image/gallery/${index}.svg`)" alt="gallery" loading="lazy" width="356" height="210">
      </div>
    </div>
    <BaseDetail class="mt-[66px] lg:max-w-[660px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,
      <nuxt-link to="#" class="font-semibold text-[#091156]">
        our teams
      </nuxt-link>
    </BaseDetail>
  </div>
</template>

<script>
export default {
  name: 'OurGallerySection'
}
</script>
