<template>
  <BaseColumn class="container mx-auto max-w-[1400px] md:gap-[60px]">
    <section>
      <ArticleCard
        v-for="item in articleBlogData"
        :key="item.category"
        :category-blog="item.category"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        class="mb-[50px] lg:mb-[133px]"
      />
      <BasePagination class="text-end" />
    </section>
    <section>
      <WidgetSection />
      <RecentPostWidget class="mt-[76px]" />
      <CategoryWidget class="mt-[83px]" />
      <TagWidget class="mt-[83px]" />
      <SocialMediaWidget class="mt-[83px]" />
    </section>
  </BaseColumn>
</template>

<script>
import { articleBlogData } from '~/constant/blog-page-data.ts'
import ArticleCard from '~/components/Blog/ArticleCard'
import WidgetSection from '~/components/Blog/SearchWidget'
import RecentPostWidget from '~/components/Blog/RecentPostWidget'
import CategoryWidget from '~/components/Blog/CategoryWidget'
import TagWidget from '~/components/Blog/TagWidget'
import SocialMediaWidget from '~/components/Blog/SocialMediaWidget'

export default {
  name: 'ArticleColumn',
  components: {
    ArticleCard,
    WidgetSection,
    RecentPostWidget,
    CategoryWidget,
    TagWidget,
    SocialMediaWidget
  },
  data () {
    return {
      articleBlogData
    }
  }
}
</script>
