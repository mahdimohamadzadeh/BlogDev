<template>
  <div
    id="SearchMobile"
    class="mx-auto h-screen w-3/4 flex flex-col justify-center items-center"
  >
    <button
      @click="closePageSearch"
      class="absolute top-16 right-4 md:right-36 text-dark-blue dark:text-medium-blue"
    >
      <Icon icon="carbon:close-outline" height="40" />
    </button>

    <h1
      class="text-center font-bold text-dark-blue dark:text-medium-blue text-2xl mb-8 text-text"
    >
      جستجو در فرامس
    </h1>
    <input
      class="input bg-input input-info text-medium-blue placeholder-medium-blue dark:bg-light-blue dark:placeholder-main-background dark:text-main-background h-12 rounded-2xl text-center mb-5 border-2 border-pink-400"
      type="text"
      placeholder="جستجو"
      v-model="searchInput"
    />
    <button
      class="px-12 py-1 block btn btn-accent rounded-md text-sm font-medium border-0 focus:outline-none focus:ring text-white"
      @click="search"
    >
      <Icon
        icon="akar-icons:search"
        class="dark:text-very-light-blue"
        height="40"
      />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    ...mapMutations({
      isSearch: "CHANGE_STATE_ISSEARCH",
      inputSearch: "CHANGE_STATE_INPUTSEARCH",
    }),
    closePageSearch() {
      this.$router.push({ path: "/" });
    },
    search() {
      this.isSearch(true);
      this.inputSearch(this.searchInput);
      this.$router.push({ path: "/" });
      if (this.searchInput !== this.allowedValues) {
        this.isSearch(false);
        this.$swal({
          title: "نتیجه یافت نشد",
          type: "warning",
          icon: "warning",
          confirmButtonColor: "#ff0000",
          confirmButtonText: "OK",
        });
      }
      if (this.searchInput === "" || undefined) {
        this.isSearch(false);
        this.$swal({
          title: "لطفا مقداری را وارد کنید",
          type: "warning",
          icon: "warning",
          confirmButtonColor: "#ff0000",
          confirmButtonText: "OK",
        });
      }
    },
  },
  computed: {
    ...mapGetters(["allowedValues"]),
  },
};
</script>

<style lang="scss" scoped></style>
