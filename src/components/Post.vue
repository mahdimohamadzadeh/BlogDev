<template>
  <div class="py-3 w-full md:w-1/2 md:px-3 lg:w-1/3 xl:w-1/3 2xl:w-1/4">
    <div class="rounded overflow-hidden shadow-lg border-2 border-gray-200">
      <img
        class="w-full h-52"
        :src="require('../assets/image/' + src)"
        :alt="category"
      />
      <div class="px-6 py-4">
        پست شماره {{ id }}
        <div class="font-bold text-xl mb-2">{{ category }}</div>
        <p class="text-gray-700 text-base">
          <!-- <Icon :icon="icon" /> -->
          {{ title }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >{{ date }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["title", "discreption", "date", "src", "category", "id", "icon"],
};
</script>

<style lang="scss" scoped></style>
