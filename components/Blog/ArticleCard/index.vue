<template>
  <div class="rounded-[50px] card-article">
    <img
      :src="require(`~/assets/image/blog/${image}`)"
      loading="lazy"
      class="rounded-b-none"
      :alt="title"
      width="730"
      height="453"
    >
    <div class="bg-white container mx-auto rounded-b-[50px]">
      <div class="flex items-center mt-[56px] h-[30px]">
        <FolderIcon class="w-[25px] h-[25px] mr-[15px]" />
        <BaseTitle :title="categoryBlog" />
      </div>
      <BaseSubtitle class="mt-[20px]" :subtitle="title" />
      <BaseDetail class="mt-[12px]">
        {{ description }}
      </BaseDetail>
      <BaseButton class="mt-[13px] mb-[100px] lg:max-w-[226px] h-[58px]">
        <div class="flex items-center justify-center">
          <div class="text-[16px] tracking-widest">
            Read More
          </div>
          <CaretRightIcon class="stroke-white w-[20px] h-[20px] ml-[2px]" />
        </div>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import FolderIcon from '~/assets/icons/folder.svg?inline'
import CaretRightIcon from '~/assets/icons/caret-right.svg?inline'

export default {
  name: 'ArticleCard',
  components: {
    FolderIcon, CaretRightIcon
  },
  props: {
    // for show category of blog ex: beauty, consultation
    categoryBlog: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>
  .card-article{
    box-shadow: 10px 13px 80px 14px #F2F4FF
  }
</style>
