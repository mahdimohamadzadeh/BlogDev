<template>
  <div class="Menu h-screen flex flex-col justify-around items-start w-5/6">
    <div class="flex mt-16">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >صحفه اول</router-link
      >
    </div>
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >جدید ترین ها</router-link
      >
    </div>
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >جاوااسکریپت</router-link
      >
    </div>
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >ویو جی اس</router-link
      >
    </div>
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >درباره ما</router-link
      >
    </div>
    <hr class="w-full text-dark-blue" />
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >ورود</router-link
      >
    </div>
    <div class="flex">
      <Icon
        icon="fontisto:angle-left"
        class="text-medium-blue dark:text-yellow-400"
        height="30"
      />
      <router-link
        to="/"
        class="mr-3 text-dark-blue dark:text-yellow-200 md:text-xl xl:text-3xl lg:text-2xl"
        >ثبت نام</router-link
      >
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Menu",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>
