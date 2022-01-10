<template>
  <div
    id="SearchMobile"
    class="mx-auto h-screen w-3/4 flex flex-col justify-center items-center"
  >
    <button
      @click="closePageSearch"
      class="absolute top-16 right-4 md:right-36 text-gray-800 dark:text-yellow-300"
    >
      <Icon icon="carbon:close-outline" height="40" />
    </button>

    <h1
      class="text-center font-bold text-purple-900 dark:text-yellow-300 text-2xl mb-8 text-text"
    >
      جستجو در فرامس
    </h1>
    <input
      class="h-12 rounded-2xl text-center mb-5 border-2 border-pink-400"
      type="text"
      placeholder="جستجو"
      v-model="searchInput"
    />
    <button
      class="px-12 py-1 block rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-yellow-500 hover:bg-green-500 focus:ring-blue-300"
      @click="searchByCategory"
    >
      <Icon icon="akar-icons:search" color="white" height="40" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "SearchMobile",
  components: {
    Icon,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    closePageSearch() {
      this.$router.push({ path: "/" });
    },
    searchByCategory() {
      this.$store.state.posts.isSearch = true;
      this.$store.state.posts.inputSerach = this.searchInput;
      this.$store.getters.AllowedValues;
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
