<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Input } from '@progress/kendo-vue-inputs'
import { Button } from '@progress/kendo-vue-buttons'
import { users, addUser, updateUser } from '../store'

const router = useRouter()
const route = useRoute()

const isEdit = ref(false)
const user = ref({ id: null, name: '', email: '' })

// When editing, load the user by id from the route params
if (route.params.id) {
  const existing = users.value.find(u => u.id === Number(route.params.id))
  if (existing) {
    user.value = { ...existing }
    isEdit.value = true
  }
}

function save() {
  if (isEdit.value) {
    updateUser(user.value)
  } else {
    addUser(user.value)
  }
  router.push('/users')
}
</script>

<template>
  <div>
    <h2>{{ isEdit ? 'Editar Usuário' : 'Novo Usuário' }}</h2>
    <div class="field">
      <label>Nome:</label>
      <Input v-model="user.name" />
    </div>
    <div class="field">
      <label>Email:</label>
      <Input v-model="user.email" />
    </div>
    <Button theme-color="primary" @click="save">Salvar</Button>
  </div>
</template>

<style scoped>
.field { margin-bottom: 10px; }
</style>
