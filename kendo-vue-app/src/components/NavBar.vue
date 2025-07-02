<script setup>
import { AppBar, AppBarSection } from '@progress/kendo-vue-layout'
import { Button } from '@progress/kendo-vue-buttons'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <AppBar>
    <AppBarSection>
      <Button look="flat" @click="() => router.push('/users')">Consulta</Button>
    </AppBarSection>
    <AppBarSection>
      <Button look="flat" @click="() => router.push('/users/new')">Novo Usuário</Button>
    </AppBarSection>
  </AppBar>
</template>
