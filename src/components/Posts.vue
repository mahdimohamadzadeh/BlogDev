<template>
  <div class="py-3 w-full md:w-1/2 md:px-3 lg:w-1/3 xl:w-1/3 2xl:w-1/4">
    <div
      class="rounded overflow-hidden shadow-2xl border-2 dark:border-light-blue border-gray-200"
    >
      <img
        class="rounded-xl px-4 pt-4 w-full h-52"
        :src="img"
        :alt="category"
      />
      <!-- <img
        v-if="theme === 'dark' && category === ' ویو جی اس'"
        class="rounded-xl px-4 pt-4 w-full h-52"
        src="../assets/image/vue-yellow.png"
        :alt="category"
      />
      <img
        v-if="theme === 'light' && category === ' ویو جی اس'"
        class="rounded-xl px-4 pt-4 w-full h-52"
        src="../assets/image/vue.png"
        :alt="category"
      />
      <img
        v-if="theme === 'light' && category === 'جاوا اسکریپت'"
        class="rounded-xl px-4 pt-4 w-full h-52"
        src="../assets/image/JavaScript.png"
        :alt="category"
      /> -->
      <Scroll-top />
      <div class="px-6 py-4">
        <div class="flex">
          <Icon
            v-if="category === 'javascript'"
            class="ml-3 mt-1"
            icon="grommet-icons:js"
          />
          <Icon v-if="category === 'vue'" class="ml-3 mt-1" icon="logos:vue" />
          <h2
            class="font-bold text-dark-blue dark:text-very-light-blue text-xl mb-2"
          >
            {{ title }}
          </h2>
        </div>
        <p
          class="text-medium-blue text-gray-700 text-base dark:text-very-light-blue dark:text-opacity-90"
        >
          {{ category }}
        </p>
      </div>
      <div class="justify-center card-actions">
        <router-link :to="`/post/${id}`"
          ><button
            class="btn btn-outline btn-accent hover:scale-125 transition duration-300 transform"
          >
            مشاهده پست
          </button>
        </router-link>
      </div>
      <div
        class="flex flex-col h-28 lg:flex-row lg:justify-between lg:h-14 justify-around items-center mb-6 mt-8"
      >
        <span
          class="mr-4 text-xl xl:text-xl lg:text-sm text-medium-blue dark:text-very-light-blue dark:text-white dark:text-opacity-90 rounded-full font-semibold text-gray-700"
          >{{ date }}</span
        >
        <Star-rating :rate="4.5" />
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "./StarRating.vue";
import { Icon } from "@iconify/vue";
import ScrollTop from "./ScrollTop.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "Posts",
  components: {
    Icon,
    ScrollTop,
    StarRating,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    date: {
      type: [String, Number],
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    id: {
      type: [Number],
      default: "",
    },
    theme: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const img = ref("http://localhost:3000/src/assets/image/" + props.url);

    return { img };
  },
};
</script>

<style lang="scss" scoped></style>
