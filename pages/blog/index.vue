<template>
  <section class="mt-[36px]">
    <BlogBanner />
    <section class="mt-[108px]">
      <ArticleColumn />
    </section>
  </section>
</template>

<script>
import BlogBanner from '~/components/Blog/Banner'
import ArticleColumn from '~/components/Blog/ArticleColumn'

export default {
  components: {
    BlogBanner,
    ArticleColumn
  },
  layout: 'BaseLayout',
  mounted () {
    this.$store.commit('setActivePage', 'Blog')
  }
}
</script>
