import { ref } from 'vue'
import usersData from './data/users.json'

// Reactive array with initial mocked users
export const users = ref(usersData)

// Adds a new user with unique id
export function addUser(user) {
  user.id = Date.now()
  users.value.push({ ...user })
}

// Updates an existing user by id
export function updateUser(user) {
  const index = users.value.findIndex(u => u.id === user.id)
  if (index !== -1) {
    users.value[index] = { ...user }
  }
}

// Deletes users whose ids are in the array
export function deleteUsers(ids) {
  users.value = users.value.filter(u => !ids.includes(u.id))
}
