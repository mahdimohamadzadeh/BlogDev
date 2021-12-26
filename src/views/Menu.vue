<template>
  <div class="Menu h-screen flex flex-col justify-around items-start w-5/6">
    <div class="flex mt-16">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">صحفه اول</router-link>
    </div>
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">جدید ترین ها</router-link>
    </div>
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">جاوااسکریپت</router-link>
    </div>
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">ویو جی اس</router-link>
    </div>
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">درباره ما</router-link>
    </div>
    <hr class="w-full bg-gray-400" />
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">ورود</router-link>
    </div>
    <div class="flex">
      <Icon icon="fontisto:angle-left" class="" color="#d27c2c" height="30" />
      <router-link to="/" class="mr-3 text-darkBack">ثبت نام</router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "menu",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>
