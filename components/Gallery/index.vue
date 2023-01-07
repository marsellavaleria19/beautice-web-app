<template>
  <div class="container mx-auto max-w-[1140px]">
    <h1>
      Our Gallery
    </h1>
    <div class="md:flex justify-start mt-[12px]">
      <h2 class="md:max-w-[615px] md:mr-[68px] mb-3 md:mb-0">
        Check out the collection pictures from our clinic
      </h2>
      <p class="md:max-w-[407px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[72px] justify-items-center place-items-stretch gap-9">
      <div v-for="index in 9" :key="index">
        <img :src="require(`~/assets/image/gallery/${index}.svg`)" alt="gallery" width="356" height="210">
      </div>
    </div>
    <p class="mt-[66px] lg:max-w-[660px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <nuxt-link to="#" class="font-semibold text-[#091156]">
        our teams
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'GallerySection'
}
</script>
