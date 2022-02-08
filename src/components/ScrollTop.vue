<template>
  <transition name="fade">
    <div
      id="pagetop"
      class="fixed right-2 bottom-0 rounded-md cursor-pointer bg-dark-blue dark:bg-very-light-blue"
      v-show="scY > 300"
      @click="toTop"
    >
      <svg
        class=""
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="theme === 'dark' ? '#072227' : '#EEFBFC'"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="arcs"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  </transition>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "ScroollTop",
  setup() {
    const scTimer = ref(0);
    const scY = ref(0);
    const store = useStore();
    const handleScroll = () => {
      if (scTimer.value) return;
      scTimer.value = setTimeout(() => {
        scY.value = window.scrollY;
        clearTimeout(scTimer.value);
        scTimer.value = 0;
      }, 100);
    };
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const theme = computed(() => store.getters.getTheme);
    return { scTimer, scY, store, handleScroll, toTop, theme };
  },
};
</script>

<style lang="scss" scoped></style>
