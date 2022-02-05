import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Menu from "../views/Menu.vue";
import NewPosts from "../views/NewPosts.vue";
import Post from "../views/Post.vue";
import AddPost from "../views/Post.vue";
import Edit from "../views/Post.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/newposts",
    name: "newposts",
    component: NewPosts,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;