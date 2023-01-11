
<template>
  <CardWidget class="pb-[60px]" title-widget="Recent Post">
    <div class="mt-[30px]">
      <ListRecentPost
        v-for="(item,index) in recentPostWidget"
        :key="index"
        :image="item.image"
        :date-post="item.date"
        :description="item.description"
        class="mb-[9px]"
      />
    </div>
  </CardWidget>
</template>

<script>
import ListRecentPost from '~/components/Blog/RecentPostWidget/List'
import CardWidget from '~/components/Blog/CardWidget'
import { recentPostWidget } from '~/constant/blog-page-data'

export default {
  name: 'RecentPostWidget',
  components: {
    ListRecentPost, CardWidget
  },
  data () {
    return {
      recentPostWidget
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
