<template>
  <div class="pt-2 relative mx-auto hidden md:block form-control">
    <input
      v-model="searchInput"
      type="text"
      placeholder="جستجو"
      class="input text-medium-blue placeholder-medium-blue lg:px-32 xl:px-44 h-10 text-sm text-center px-14 bg-input dark:bg-light-blue dark:placeholder-main-background dark:text-main-background input-info"
    />
    <button
      @click="search"
      type="submit"
      class="absolute right-0 top-4 lg:top-4 mr-4 border-l-2 border-medium-blue dark:border-very-light-blue pl-2"
    >
      <svg
        class="text-dark-blue dark:text-very-light-blue h-5 w-5 lg:w-6 lg:h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style="enable-background: new 0 0 56.966 56.966"
        xml:space="preserve"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SearchNavbar",
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
    search() {
      this.isSearch(true);
      this.inputSearch(this.searchInput);
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
