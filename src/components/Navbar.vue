<template>
  <nav id="Navbar">
    <div
      id="Nav"
      class="w-full md:w-4/5 flex mx-auto h-14 bg-back justify-between shadow-xl"
    >
      <div class="right-nav flex items-center px-2">
        <router-link to="/"
          ><img src="../assets/image/iconSite.png" class="w-11 h-11"
        /></router-link>
        <router-link to="/" class="text-lg mr-2">مهدی</router-link>
      </div>
      <div class="left-nav flex items-center w-2/5 justify-around">
        <button @click="serch">
          <Icon icon="akar-icons:search" color="#3c1642" height="30" />
        </button>
        <button @click="serch">
          <Icon icon="bytesize:moon" color="#3c1642" height="30" />
        </button>
        <button @click="serch">
          <Icon icon="feather:menu" color="#3c1642" height="30" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Navbar",
  components: {
    Icon,
  },
};
</script>

<style scoped></style>
