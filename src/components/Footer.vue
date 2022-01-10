<template>
  <footer
    class="w-full bg-gray-200 border-t-2 border-gray-200 dark:border-yellow-400"
  >
    <div class="mx-4 flex flex-col">
      <div class="">
        <h2
          class="text-3xl mt-8 text-center dark:text-white dark:text-opacity-90"
        >
          فرامس
        </h2>
        <h5 class="text-center dark:text-white dark:text-opacity-70">بلاگ</h5>
        <p
          class="mt-8 text-center dark:text-white dark:text-opacity-70 md:w-3/4 md:mx-auto"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
        </p>
      </div>
      <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200" />
      <div
        class="mt-6 md:flex md:justify-around lg:w-2/3 lg:mx-auto md:text-lg"
      >
        <ol>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">خانه</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/"> درباره ما</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">اتصال</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">گوگل</router-link>
          </li>
        </ol>
        <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200 md:hidden" />
        <ol>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">خانه</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/"> درباره ما</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">اتصال</router-link>
          </li>
          <li class="mt-5 dark:text-white dark:text-opacity-70">
            <router-link to="/">گوگل</router-link>
          </li>
        </ol>
      </div>
      <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200" />
      <div class="mx-auto w-2/3 flex justify-around mt-6">
        <Icon
          class="dark:text-yellow-200 dark:hover:text-yellow-500"
          icon="akar-icons:instagram-fill"
          width="35"
          height="35"
        />
        <Icon
          class="dark:text-yellow-200 dark:hover:text-yellow-500"
          icon="fa-brands:github-square"
          width="35"
          height="35"
        />
        <Icon
          class="dark:text-yellow-200 dark:hover:text-yellow-500"
          icon="fa-brands:twitter-square"
          width="35"
          height="35"
        />
        <a
          class="badge-base__link LI-simple-link"
          href="https://ir.linkedin.com/in/mahdi-mohamadzadeh-7316ba225?trk=profile-badge"
          ><Icon
            class="dark:text-yellow-200 dark:hover:text-yellow-500"
            icon="bi:linkedin"
            width="35"
            height="35"
        /></a>
      </div>
      <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200" />
      <div class="flex mt-4 justify-center">
        <span class="dark:text-white dark:text-opacity-90">Copyright</span>
        <Icon
          class="dark:text-white"
          icon="fa-regular:copyright"
          width="20"
          height="20"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped></style>
