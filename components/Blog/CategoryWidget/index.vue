<template>
  <CardWidget title-widget="Category" class="pb-[49px]">
    <template #category>
      <div class="mt-[22px]">
        <div v-for="(item,index) in categoryWidget" :key="index" class="mb-[3px]">
          <button class="text-[#8B8B8B] text-[14px] tracking-widest" @click="categoryHandle(item)">
            {{ item }}
          </button>
        </div>
      </div>
    </template>
  </CardWidget>
</template>

<script>
import CardWidget from '~/components/Blog/CardWidget'
import { categoryWidget } from '~/constant/blog-page-data'

export default {
  name: 'CategoryWidget',
  components: {
    CardWidget
  },
  data () {
    return {
      categoryWidget
    }
  },
  methods: {
    categoryHandle (value) {
      this.$emit('category', value)
    }
  }
}
</script>
