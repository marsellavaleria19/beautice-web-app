<template>
  <CardWidget title-widget="Cloud Tags" class="pb-[49px]">
    <template #tag>
      <div class="mt-[23px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[14px] gap-y-[19px]">
          <TagWidgetList v-for="(item,index) in tagWidget" :key="index" :tag="item" />
        </div>
      </div>
    </template>
  </CardWidget>
</template>

<script>
import CardWidget from '~/components/Blog/CardWidget'
import { tagWidget } from '~/constant/blog-page-data'
import TagWidgetList from '~/components/Blog/TagWidget/List'

export default {
  name: 'CategoryWidget',
  components: {
    CardWidget, TagWidgetList
  },
  data () {
    return {
      tagWidget
    }
  }
}
</script>
