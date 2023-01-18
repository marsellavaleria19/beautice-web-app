<template>
  <div class="lg:max-w-[350px] h-[65px] search-background">
    <div class="relative rounded-[50px]">
      <input v-model="searchData" type="search" placeholder="Search here ..." class="h-[65px] pl-[27px] focus:outline-none text-[#8B8B8B] text-[16px] placeholder:text-[16px] rounded-[50px]">
      <button class="bg-[#172176] w-[76px] h-[65px] absolute right-0 rounded-r-[50px] text-center" @click="searchHandle">
        <SearchIcon class="w-[25px] h-[25px] ml-[25px]" />
      </button>
    </div>
  </div>
</template>

<script>
import SearchIcon from '~/assets/icons/search.svg?inline'

export default {
  name: 'WidgetSection',
  components: {
    SearchIcon
  },
  data () {
    return {
      searchData: ''
    }
  },
  methods: {
    searchHandle () {
      this.$emit('search', this.searchData)
    }
  }
}
</script>

<style scoped>
  .search-background{
    box-shadow: -2px 4px 31px 9px #F2F4FF;
    border-radius: 50px;
  }
</style>
