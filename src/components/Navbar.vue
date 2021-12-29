<template>
  <nav id="Navbar" class="flex md:justify-center overflow-hidden">
    <div
      class="fixed w-full md:w-4/5 flex h-14 bg-pink-300 dark:bg-purple-800 justify-between shadow-xl"
    >
      <div class="right-nav flex items-center px-2 md:px-4">
        <router-link v-if="theme == 'light'" to="/"
          ><img src="../assets/image/logo-normal.png" class="w-11 h-11"
        /></router-link>
        <router-link v-if="theme == 'dark'" class="text-gray-100" to="/"
          ><img src="../assets/image/iconSite.png" class="w-11 h-11"
        /></router-link>
        <router-link
          to="/"
          class="text-lg text-purple-900 dark:text-yellow-400 mr-2 md:text-xl md:mr-3"
          >فرامس</router-link
        >
      </div>
      <div class="pt-2 relative mx-auto hidden md:block">
        <input
          class="bg-white dark:bg-yellow-100 h-10 px-14 rounded-lg text-sm text-center lg:px-32 xl:px-44"
          type="search"
          name="search"
          placeholder="جستجو"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 lg:mt-4 mr-4">
          <svg
            class="text-gray-600 h-4 w-4 lg:w-6 lg:h-6 fill-current text-text"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
      <div
        class="Left-nav flex items-center w-2/5 justify-around md:w-1/5 lg:w-1/6 xl:w-40"
      >
        <button
          @click="goPageSearch"
          class="md:hidden text-purple-900 dark:text-yellow-400"
        >
          <Icon icon="akar-icons:search" height="30" />
        </button>
        <button
          @click="activeDarkTheme"
          class="text-purple-900 dark:text-yellow-400"
        >
          <Icon icon="bytesize:moon" height="30" />
        </button>
        <button>
          <Icon
            :class="menu ? 'hidden' : 'block'"
            class="text-purple-900 dark:text-yellow-400"
            @click="goPageMenu"
            icon="feather:menu"
            height="30"
          />
          <Icon
            @click="closeMenuPage"
            :class="menu ? 'block' : 'hidden'"
            icon="ant-design:close-outlined"
            class="text-purple-900 dark:text-yellow-400"
            height="35"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: {
    Icon,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    goPageSearch() {
      this.$router.push({ path: "/search" });
      this.menu = false;
    },
    goPageMenu() {
      this.$router.push({ path: "/menu" });
      this.menu = true;
    },
    closeMenuPage() {
      this.$router.push({ path: "/" });
      this.menu = false;
    },
    activeDarkTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>

<style scoped></style>
