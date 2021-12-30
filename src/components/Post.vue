<template>
  <div class="p-4 md:w-1/2">
    <div class="bg-white p-6 rounded-lg shadow-2xl">
      <img
        class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
        src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg"
        alt="Image Size 720x400"
      />
      <h3
        class="tracking-widest text-indigo-500 text-xs font-medium title-font"
      >
        {{ category }}
      </h3>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
        {{ title }}
      </h2>
      <p class="leading-relaxed text-base">
        {{ discreption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["title", "discreption", "date", "url", "category"],
};
</script>

<style lang="scss" scoped></style>
