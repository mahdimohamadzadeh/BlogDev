<template>
  <nav id="Navbar" class="flex md:justify-center overflow-hidden">
    <div
      class="fixed w-full md:w-4/5 flex h-14 bg-very-light-blue rounded-b-xl border-r-2 border-l-2 border-b-2 border-very-light-blue dark:border-border dark:bg-dark-blue justify-between shadow-xl"
    >
      <div class="right-nav flex cursor-pointer items-center px-2 md:px-4" @click="homePage">
        <img
          v-if="theme == 'light'"
          src="../assets/image/logo-normal.png"
          alt="mainIcon"
          class="w-11 h-11"
        />
        <img
          v-if="theme == 'dark'"
          src="../assets/image/iconSite.png"
          alt="mainIcon"
          class="w-11 h-11 opacity-90"
        />
        <h1
          class="text-lg text-dark-blue dark:text-border mr-2 md:text-xl md:mr-3"
        >
          فرامس
        </h1>
      </div>
      <Search-navbar />
      <div
        class="Left-nav flex items-center w-2/5 justify-around md:w-1/5 lg:w-1/6 xl:w-40"
      >
        <button
          @click="goPageSearch"
          class="md:hidden text-dark-blue dark:text-border"
        >
          <Icon icon="akar-icons:search" height="30" />
        </button>
        <button
          @click="activeDarkTheme"
          class="text-dark-blue dark:text-border"
        >
          <Icon icon="bytesize:moon" height="30" />
        </button>
        <button>
          <Icon
            :class="menu ? 'hidden' : 'block'"
            class="text-dark-blue md:hidden dark:text-border"
            @click="goPageMenu"
            icon="feather:menu"
            height="30"
          />
          <Icon
            @click="closeMenuPage"
            :class="menu ? 'block' : 'hidden'"
            icon="ant-design:close-outlined"
            class="text-dark-blue dark:text-border"
            height="35"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useStore } from "vuex";
import SearchNavbar from "./SearchNavbar.vue";
import { computed, reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  name: "Navbar",
  components: {
    Icon,
    SearchNavbar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const menu = ref(false);
    const isSearch = ref(store.state.search.isSearch);
    const theme = computed(() => store.getters.getTheme);
    const homePage = () => {
      isSearch.value = false;
      router.push({ path: "/" });
    };
    const goPageSearch = () => {
      router.push({ path: "/search" });
      window.scrollTo(0, 0);
      menu.value = false;
    };
    const goPageMenu = () => {
      router.push({ path: "/menu" });
      window.scrollTo(0, 0);
      menu.value = true;
    };
    const closeMenuPage = () => {
      router.push({ path: "/" });
      menu.value = false;
    };
    const activeDarkTheme = () => {
      store.dispatch("toggleTheme");
    };
    return {
      menu,
      theme,
      isSearch,
      homePage,
      goPageSearch,
      goPageMenu,
      closeMenuPage,
      activeDarkTheme,
    };
  },
};
</script>

<style scoped></style>
