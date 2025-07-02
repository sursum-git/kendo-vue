import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import UserList from '../views/UserList.vue'
import UserForm from '../views/UserForm.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/users', component: UserList },
  { path: '/users/new', component: UserForm },
  { path: '/users/:id', component: UserForm, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
