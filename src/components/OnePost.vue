<template>
  <div
    class="w-3/5 mx-auto rounded-xl bg-input shadow-2xl flex items-center flex-col"
  >
    <div class="top_card w-full flex mt-2">
      <h1 class="text-3xl self-start my-4 mr-2 text-dark-blue">
        {{ title }}
      </h1>
    </div>
    <div class="self-start flex mt-5 gap-3">
      <span
        class="border-l-2 pl-3 border-dark-blue text-xl self-start mr-2 text-dark-blue"
      >
        {{ isLike }}
      </span>
      <Icon
        icon="akar-icons:comment"
        class="text-dark-blue cursor-pointer hvr-icon-grow"
        height="30"
      />
      <span class="text-dark-blue text-lg mt-1">6</span>
    </div>
    <img
      class="rounded-2xl mt-5 h-80 w-5/6"
      src="../assets/image/vue.png"
      alt=""
    />
    <h2 class="text-xl self-start my-4 mr-2 text-dark-blue">
      {{ category }}
    </h2>
    <p class="text-l text-dark-blue leading-8 text-justify p-3">
      {{ discreption }}
    </p>
    <div class="Icon flex w-1/3 justify-around my-10" @click="like">
      <span>like</span>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "OnePost",
  props: ["id", "title", "discreption", "date", "category"],
  components: {
    Icon,
  },
  data() {
    return {
      isLike: false,
    };
  },
  methods: {
    like() {
      this.isLike = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
