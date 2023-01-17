<template>
  <form>
    <div class="mb-[38px] md:flex">
      <BaseInput placeholder="Firstname" class="mr-[36px] md:w-1/2 mb-[38px] md:mb-0" />
      <BaseInput placeholder="Lastname" class="md:w-1/2" />
    </div>
    <div class="mb-[38px]">
      <BaseInput placeholder="Email Address" />
    </div>
    <div class="mb-[38px]">
      <BaseInput placeholder="Subject Message" />
    </div>
    <div class="mb-[38px]">
      <BaseInput placeholder="Email Address" />
    </div>
    <div class="mb-[38px]">
      <BaseTextArea placeholder="Your inquiry here" class="h-[239px]" />
    </div>
    <BaseButton class="w-full lg:max-w-[248px] h-[58px]">
      Send Message
    </BaseButton>
  </form>
</template>

<script>

export default {
  name: 'BaseContactForm'
}
</script>
