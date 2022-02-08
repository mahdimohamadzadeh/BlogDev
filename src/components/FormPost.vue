<template>
  <div class="Add text-xl leading-loose">
    <div
      class="heading text-dark-blue text-center font-bold text-2xl m-5 text-gray-800"
    >
      {{ headerText }}
    </div>
    <div
      class="border-2 border-border editor mx-auto w-10/12 flex flex-col text-dark-blue p-4 shadow-xl max-w-2xl"
    >
      <input
        class="input input-accent input-bordered text-xl bg-main-background border border-very-light-blue p-2 mb-4 outline-none"
        autocomplete
        placeholder="دسته بندی"
        type="text"
        v-model="post.category"
      />
      <textarea
        class="textarea h-24 textarea-bordered text-xl textarea-accent bg-main-background sec p-3 border border-very-light-blue outline-none"
        spellcheck="false"
        autocomplete
        placeholder="عنوان"
        v-model="post.title"
      ></textarea>
      <textarea
        class="textarea textarea-bordered text-xl textarea-accent bg-main-background border-very-light-blue p-3 h-40 border outline-none mt-4"
        spellcheck="false"
        autocomplete
        placeholder="توضیحات"
        v-model="post.description"
      ></textarea>
      <form action="" class="flex mt-4 w-full items-center justify-between">
        <label for="fhoto" class="text-lg"
          >لطفا عکس مورد نظر را وارد کنید</label
        >
        <input
          @change="previewFiles"
          class="w-1/2"
          type="file"
          id="fhoto"
          name="avatar"
          accept="@/assets/image,image/png, image/jpeg"
        />
      </form>
      <!-- icons -->
      <div class="icons flex text-gray-500 m-2">
        <svg
          class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <svg
          class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
        <div class="count mr-auto text-gray-400 text-xs font-semibold">
          0/300
        </div>
      </div>
      <!-- buttons -->
      <div class="buttons flex mt-8">
        <!-- <div
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
        >
          Cancel
        </div> -->
        <button
          @click="$emit('closeForm')"
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
        >
          لغو
        </button>
        <button
          class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          @click="setpost"
        >
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["btnText", "headerText"],
  setup(props, { emit }) {
    onMounted(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    const route = useRoute();
    const post = ref({
      category: "",
      title: "",
      description: "",
      url: "",
    });
    const postWithId = ref({
      category: post.value.category,
      title: post.value.title,
      description: post.value.description,
      url: post.value.url,
      id: route.params.id,
    });
    const setpost = () => {
      emit("sendPost", post.value);
      emit("sendPostById", postWithId.value);
    };
    const previewFiles = (event) => {
      post.value.url = event.target.files[0].name;
    };

    return { post, postWithId, setpost, previewFiles };
  },
};
</script>

<style lang="scss" scoped></style>
