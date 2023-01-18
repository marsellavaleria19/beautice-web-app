<template>
  <BaseColumn class="container mx-auto max-w-[1140px] gap-x-[60px]">
    <section>
      <ArticleCard
        v-for="item in getArticleBlogData"
        :key="item.category"
        :category-blog="item.category"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        class="mb-[50px] lg:mb-[133px]"
      />
      <div class="mr-[97px]">
        <BasePagination class="text-end" />
      </div>
    </section>
    <section>
      <SearchWidget @search="searchHandle" />
      <RecentPostWidget class="mt-[76px]" />
      <CategoryWidget class="mt-[83px]" @category="categoryHandle" />
      <TagWidget class="mt-[83px]" />
      <SocialMediaWidget class="mt-[83px]" />
    </section>
  </BaseColumn>
</template>

<script>
import { articleBlogData } from '~/constant/blog-page-data.ts'
import ArticleCard from '~/components/Blog/ArticleCard'
import SearchWidget from '~/components/Blog/SearchWidget'
import RecentPostWidget from '~/components/Blog/RecentPostWidget'
import CategoryWidget from '~/components/Blog/CategoryWidget'
import TagWidget from '~/components/Blog/TagWidget'
import SocialMediaWidget from '~/components/Blog/SocialMediaWidget'

export default {
  name: 'ArticleColumn',
  components: {
    ArticleCard,
    SearchWidget,
    RecentPostWidget,
    CategoryWidget,
    TagWidget,
    SocialMediaWidget
  },
  data () {
    return {
      articleBlogData,
      search: '',
      category: ''
    }
  },
  computed: {
    getArticleBlogData () {
      return this.search !== '' ? articleBlogData.filter(item => item.title.includes(this.search)) : this.category !== '' ? articleBlogData.filter(item => item.category.includes(this.category)) : articleBlogData
    }
    // getArticleBlogDataByCategory () {
    //   return articleBlogData.filter(item => item.category.includes(this.category))
    // }
  },
  methods: {
    searchHandle (value) {
      this.search = value
    },
    categoryHandle (value) {
      this.category = value
      console.log(value)
    }
  }
}
</script>
