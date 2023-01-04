import TopicShowCaseView from "../views/TopicShowCaseView.vue";
import CourseView from "../views/CourseView.vue";
import HomeView from "../views/HomeView.vue";
import ClassRoomView from "../views/ClassRoomView.vue";
import TopicListView from "../views/TopicListView.vue";
import AuthView from "../views/AuthView.vue";
import { createRouter, createWebHistory } from "vue-router";
import supabase from "../db/db"
const routes = [
  { path: "/", component: HomeView,name:"Home" },
  {
    path: "/topic/:id",
    name: "Topic",
    component: TopicShowCaseView,
  },
  {
    path: "/course/:id",
    name: "CourseView",
    component: CourseView,
  },
  {
    path: "/classroom/:id/:classid",
    name: "ClassRoom",
    component: ClassRoomView,
    beforeEnter: async () => {

      const {data,error} = await supabase.auth.getUser()

      if(error || !data.user) {
        return {
          name:'Auth'
        }
      }

    }
  },
  {
    path: "/topics",
    name: "Topics",
    component: TopicListView,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
