<template>
  <div class="py-3 w-full md:w-1/2 md:px-3 lg:w-1/3 xl:w-1/3 2xl:w-1/4">
    <div
      class="rounded overflow-hidden shadow-lg border-2 dark:border-yellow-600 border-gray-200"
    >
      <img
        v-if="theme === 'dark' && category === 'javascript'"
        class="w-full h-52"
        src="../assets/image/JavaScript-dark-yellow.png"
        :alt="category"
      />
      <img
        v-if="theme === 'dark' && category === 'vue'"
        class="w-full h-52"
        src="../assets/image/vue-yellow.png"
        :alt="category"
      />
      <img
        v-if="theme === 'light' && category === 'vue'"
        class="w-full h-52"
        src="../assets/image/vue.png"
        :alt="category"
      />
      <img
        v-if="theme === 'light' && category === 'javascript'"
        class="w-full h-52"
        src="../assets/image/JavaScript.png"
        :alt="category"
      />
      <div class="px-6 py-4">
        <div class="flex">
          <Icon
            v-if="category === 'javascript'"
            class="ml-3 mt-1"
            icon="grommet-icons:js"
          />
          <Icon v-if="category === 'vue'" class="ml-3 mt-1" icon="logos:vue" />
          <h2
            class="font-bold dark:text-white dark:text-opacity-70 text-xl mb-2"
          >
            {{ category }}
          </h2>
        </div>
        <p class="text-gray-700 text-base dark:text-white dark:text-opacity-70">
          {{ title }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-white dark:text-opacity-70 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >{{ date }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Post",
  props: ["title", "discreption", "date", "src", "category", "id", "theme"],
  components: {
    Icon,
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
