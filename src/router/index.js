import TopicShowCaseView from "../views/TopicShowCaseView.vue";
import CourseView from "../views/CourseView.vue";
import HomeView from "../views/HomeView.vue";
import ClassRoomView from "../views/ClassRoomView.vue";
import TopicListView from "../views/TopicListView.vue";
import AuthView from "../views/AuthView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  {
    path: "/topic",
    name: "Topic",
    component: TopicShowCaseView,
  },
  {
    path: "/course",
    name: "CourseView",
    component: CourseView,
  },
  {
    path: "/classroom",
    name: "ClassRoom",
    component: ClassRoomView,
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
