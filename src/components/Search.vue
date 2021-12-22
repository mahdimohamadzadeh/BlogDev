<template>
  <div id="Search">
    <div class="absolute top-48 left-24 w-1/2">
      <div class="bg-indigo-500 rounded-lg justify-center flex">
        <form>
          <h1 class="text-center font-bold text-white text-3xl text-text">
            جستجو در فرامس
          </h1>
          <input
            class="mt-8 h-10 px-4 rounded-2xl text-center"
            type="text"
            placeholder="جستجو"
          />
          <button
            class="block mr-10 mt-8 px-4 py-2 w-36 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-yellowDark hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
            type="submit"
          >
            <Icon
              icon="akar-icons:search"
              color="white"
              class="mx-auto"
              height="40"
            />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Search",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped></style>
