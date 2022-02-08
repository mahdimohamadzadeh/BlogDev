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
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { inject } from "vue";
export default {
  components: {
    Icon,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const swal = inject("$swal");
    const searchInput = ref("");
    const isSearch = (bol) => {
      store.commit("CHANGE_STATE_ISSEARCH", bol);
    };
    const inputSearch = (value) => {
      store.commit("CHANGE_STATE_INPUTSEARCH", value);
    };
    const allowedValues = computed(() => store.getters.allowedValues);
    const closePageSearch = () => {
      router.push({ path: "/" });
    };
    const search = () => {
      isSearch(true);
      inputSearch(searchInput.value);
      // router.push({ path: "/" });
      if (searchInput.value !== allowedValues) {
        isSearch(false);
        swal({
          title: "نتیجه یافت نشد",
          type: "warning",
          icon: "warning",
          confirmButtonColor: "#ff0000",
          confirmButtonText: "OK",
        });
      }
      if (searchInput.value === "" || undefined) {
        isSearch(false);
        swal({
          title: "لطفا مقداری را وارد کنید",
          type: "warning",
          icon: "warning",
          confirmButtonColor: "#ff0000",
          confirmButtonText: "OK",
        });
      }
    };

    return { closePageSearch, search, searchInput };
  },
};
</script>

<style lang="scss" scoped></style>
