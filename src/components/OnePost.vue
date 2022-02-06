<template>
  <div class="flex flex-col rounded-xl bg-input shadow-2xl md:mx-10 xl:mx-40">
    <div class="text-xl md:text-3xl xl:text-4xl md:m-8 m-4">
      <h1 class="text-dark-blue">
        {{ title }}
      </h1>
    </div>
    <div class="self-start mr-2 flex my-5 gap-3 md:mt-1 md:mr-4 xl:mr-8">
      <span
        class="border-l-2 pl-3 mt-1 border-dark-blue text-lg self-start mr-2 text-dark-blue md:text-xl xl:text-2xl"
      >
        {{ date }}
      </span>
      <Icon
        icon="akar-icons:comment"
        class="text-dark-blue cursor-pointer hvr-icon-grow xl:mt-1"
        height="30"
      />
    </div>
    <img
      class="rounded-2xl mt-5 h-56 w-full px-2 self-center md:px-14 md:h-60 xl:w-11/12 xl:h-80"
      :src="img"
      :alt="category"
    />
    <p
      class="text-lg text-dark-blue leading-8 text-justify p-4 xl:leading-10 xl:p-8"
    >
      {{ discreption }}
    </p>
    <div
      class="Icon flex self-center flex-row w-1/4 items-center justify-around md:w-2/12 md:px-4 md:justify-around xl:px-10"
    >
      <Icon
        @click="$emit('incrementLike')"
        icon="ant-design:heart-filled"
        class="hvr-icon-up text-heart cursor-pointer w-32 h-32"
      />
      <span class="text-dark-blue text-xl">{{ like }}</span>
    </div>
    <div class="self-center">
      ><button
        @click="$emit('showEdit')"
        class="btn btn-secondary hvr-icon-grow w-28 h-16"
      >
        ویرایش پست
      </button>
      <button
        class="rounded-xl bg-heart mr-8 hvr-icon-grow w-28 h-16 my-10 text-main-background"
      >
        حذف
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "OnePost",
  props: ["id", "title", "discreption", "date", "category", "like", "url"],
  components: {
    Icon,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  data() {
    return {
      isLike: false,
      img: "http://localhost:3000/src/assets/image/" + this.url,
    };
  },
  methods: {
    islike() {
      this.isLike = !this.isLike;
    },
  },
};
</script>

<style lang="scss" scoped></style>
