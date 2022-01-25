<template>
  <footer
    class="w-full border-t-2 border-medium-blue dark:border-very-light-blue"
  >
    <div class="mx-4 flex flex-col">
      <div class="">
        <h2
          class="text-3xl mt-8 text-dark-blue text-center dark:text-very-light-blue dark:text-opacity-90"
        >
          فرامس
        </h2>
        <h5
          class="text-center text-dark-blue dark:text-very-light-blue dark:text-opacity-90"
        >
          بلاگ
        </h5>
        <p
          class="mt-8 text-center text-dark-blue dark:text-very-light-blue dark:text-opacity-90 md:w-3/4 md:mx-auto"
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
      <hr class="w-full h-1 mt-6 bg-dark-blue dark:bg-yellow-200" />
      <div
        class="mt-6 md:flex text-dark-blue dark:text-very-light-blue md:justify-around lg:w-2/3 lg:mx-auto md:text-lg"
      >
        <ol>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">خانه</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/"> درباره ما</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">اتصال</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">گوگل</router-link>
          </li>
        </ol>
        <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200 md:hidden" />
        <ol>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">خانه</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/"> درباره ما</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">اتصال</router-link>
          </li>
          <li
            class="mt-5 hover:text-medium-blue dark:hover:text-main-background dark:text-opacity-90"
          >
            <router-link to="/">گوگل</router-link>
          </li>
        </ol>
      </div>
      <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200" />
      <div class="mx-auto w-2/3 flex justify-around mt-6">
        <Icon
          class="cursor-pointer text-dark-blue dark:text-very-light-blue hover:text-medium-blue"
          icon="akar-icons:instagram-fill"
          width="35"
          height="35"
        />
        <Icon
          class="cursor-pointer text-dark-blue dark:text-very-light-blue dark:text-yellow-200 hover:text-medium-blue"
          icon="fa-brands:github-square"
          width="35"
          height="35"
        />
        <Icon
          class="cursor-pointer text-dark-blue dark:text-very-light-blue dark:text-yellow-200 hover:text-medium-blue"
          icon="fa-brands:twitter-square"
          width="35"
          height="35"
        />
        <a
          class="badge-base__link LI-simple-link"
          href="https://ir.linkedin.com/in/mahdi-mohamadzadeh-7316ba225?trk=profile-badge"
          ><Icon
            class="text-dark-blue dark:text-very-light-blue dark:text-yellow-200 hover:text-medium-blue"
            icon="bi:linkedin"
            width="35"
            height="35"
        /></a>
      </div>
      <hr class="w-full h-1 mt-6 bg-gray-700 dark:bg-yellow-200" />
      <div class="flex mt-4 justify-center mb-4">
        <span class="text-dark-blue dark:text-very-light-blue">Copyright</span>
        <Icon
          class="text-dark-blue dark:text-very-light-blue"
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
