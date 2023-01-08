<template>
  <nav class="flex items-center justify-end border-t border-gray-200 px-4 sm:px-0 w-full">
    <div class="hidden md:-mt-px md:flex">
      <a href="#" class="inline-flex items-center bg-[#172176] rounded-full w-[35px] h-[35px] pl-[15px] py-2 text-base font-semibold text-white hover:opacity-20" aria-current="page">1</a>
      <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
      <a href="#" class="inline-flex items-center ml-[28px] py-2 text-base font-semibold text-[#C7C7C7]">2</a>
      <a href="#" class="inline-flex items-center ml-[42px] py-2 text-base font-semibold text-[#C7C7C7]">3</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BasePagination'
}
</script>
