<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const password = ref('')
function doLogin() {
  // This is just a mock login. Any credentials will work.
  router.push('/users')
}
</script>

<template>
  <div class="login">
    <h2>Login</h2>
    <div class="field">
      <label>Usuário:</label>
      <input v-model="username" />
    </div>
    <div class="field">
      <label>Senha:</label>
      <input type="password" v-model="password" />
    </div>
    <button @click="doLogin">Entrar</button>
  </div>
</template>

<style scoped>
.login { max-width: 300px; margin: 100px auto; }
.field { margin-bottom: 10px; }
</style>
