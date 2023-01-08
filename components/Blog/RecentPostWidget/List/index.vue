<template>
  <div class="flex">
    <img :src="require(`~/assets/image/recent-post/${image}`)" :alt="datePost" width="82" height="82">
    <div class="ml-[26px]">
      <h1 class="text-[14px] tracking-widest">
        {{ datePost }}
      </h1>
      <p class="text-[12px] tracking-widest">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListRecentPost',
  props: {
    image: {
      type: String,
      default: 'post-1.svg'
    },
    datePost: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
