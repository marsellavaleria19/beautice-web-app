<template>
  <div class="container mx-auto max-w-[962px] text-center">
    <BaseTitle title="Our Client" class="mb-[12px]" />
    <BaseSubtitle subtitle=" Well-known agencies" class="mb-[12px]" />
    <BaseDetail>Lorem ipsum dolor sit amet, consectetur adipiscing elit</BaseDetail>
    <div class="flex flex-wrap mt-[94px] justify-center">
      <div v-for="item in client" :key="item.name" class="mr-8">
        <img :src="require(`~/assets/logo/${item.logo}`)" :alt="item.name" width="147" height="80">
      </div>
    </div>
  </div>
</template>

<script>
import { client } from '~/constant/about-page-data'

export default {
  name: 'ClientSection',
  data () {
    return {
      client
    }
  }
}
</script>
