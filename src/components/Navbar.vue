<template>
  <nav id="Navbar" class="flex md:justify-center overflow-hidden">
    <div
      class="fixed w-full md:w-4/5 flex h-14 bg-very-light-blue dark:bg-purple-800 justify-between shadow-xl"
    >
      <div class="right-nav flex items-center px-2 md:px-4" @click="homePage">
        <router-link v-if="theme == 'light'" to="/"
          ><img src="../assets/image/logo-normal.png" class="w-11 h-11"
        /></router-link>
        <router-link v-if="theme == 'dark'" class="text-gray-100" to="/"
          ><img src="../assets/image/iconSite.png" class="w-11 h-11"
        /></router-link>
        <router-link
          to="/"
          class="text-lg text-dark-blue dark:text-yellow-400 mr-2 md:text-xl md:mr-3"
          >فرامس</router-link
        >
      </div>
      <Search-navbar />
      <div
        class="Left-nav flex items-center w-2/5 justify-around md:w-1/5 lg:w-1/6 xl:w-40"
      >
        <button
          @click="goPageSearch"
          class="md:hidden text-dark-blue dark:text-yellow-400"
        >
          <Icon icon="akar-icons:search" height="30" />
        </button>
        <button
          @click="activeDarkTheme"
          class="text-dark-blue dark:text-yellow-400"
        >
          <Icon icon="bytesize:moon" height="30" />
        </button>
        <button>
          <Icon
            :class="menu ? 'hidden' : 'block'"
            class="text-dark-blue dark:text-yellow-400"
            @click="goPageMenu"
            icon="feather:menu"
            height="30"
          />
          <Icon
            @click="closeMenuPage"
            :class="menu ? 'block' : 'hidden'"
            icon="ant-design:close-outlined"
            class="text-dark-blue dark:text-yellow-400"
            height="35"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters, mapMutations } from "vuex";
import SearchNavbar from "./SearchNavbar.vue";
export default {
  name: "Navbar",
  components: {
    Icon,
    SearchNavbar,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    ...mapMutations({
      isSearch: "CHANGE_STATE_ISSEARCH",
      inputSearch: "CHANGE_STATE_INPUTSEARCH",
    }),
    homePage() {
      this.isSearch(false);
      this.searchInput = "";
    },
    goPageSearch() {
      this.$router.push({ path: "/search" });
      window.scrollTo(0, 0);
      this.menu = false;
    },
    goPageMenu() {
      this.$router.push({ path: "/menu" });
      window.scrollTo(0, 0);
      this.menu = true;
    },
    closeMenuPage() {
      this.$router.push({ path: "/" });
      this.menu = false;
    },
    activeDarkTheme() {
      this.$store.dispatch("toggleTheme");
    },
    search() {
      this.$store.state.posts.isSearch = true;
      this.$store.state.posts.inputSerach = this.searchInput;
      let allowedValues = this.$store.getters.AllowedValues;
      if (this.searchInput !== allowedValues) {
        this.$store.state.posts.isSearch = false;
        this.$swal({
          title: "نتیجه یافت نشد",
          type: "warning",
          icon: "warning",
          confirmButtonColor: "#ff0000",
          confirmButtonText: "OK",
        });
      }
      if (this.searchInput === "" || undefined) {
        this.$store.state.posts.isSearch = false;
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
    ...mapGetters({ theme: "getTheme" }),
  },
};
</script>

<style scoped></style>
