<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Grid, GridColumn } from '@progress/kendo-vue-grid'
import { Button } from '@progress/kendo-vue-buttons'
import { users, deleteUsers } from '../store'

const router = useRouter()
const filterName = ref('')
const selectedField = 'selected'

// Computes the data displayed in the grid applying the filter
const gridData = computed(() => {
  if (!filterName.value) return users.value
  const term = filterName.value.toLowerCase()
  return users.value.filter(u => u.name.toLowerCase().includes(term))
})

function onSelectionChange(event) {
  event.dataItem[selectedField] = !event.dataItem[selectedField]
}

function removeSelected() {
  const ids = users.value.filter(u => u[selectedField]).map(u => u.id)
  deleteUsers(ids)
}
</script>

<template>
  <div>
    <h2>Usuários</h2>
    <div class="toolbar">
      <input v-model="filterName" placeholder="Filtrar por nome" />
      <Button @click="removeSelected" :disabled="!users.value.some(u => u[selectedField])">Excluir Selecionados</Button>
      <Button @click="() => router.push('/users/new')">Novo</Button>
    </div>
    <Grid
      :style="{height: '400px'}"
      :data-items="gridData"
      :selectable="{ enabled: true, mode: 'multiple', checkboxOnly: true }"
      :selected-field="selectedField"
      @selectionchange="onSelectionChange"
    >
      <GridColumn field="id" title="ID" width="50" />
      <GridColumn field="name" title="Nome" />
      <GridColumn field="email" title="Email" />
      <GridColumn
        field="edit"
        :width="100"
        title="Editar"
      >
        <template #cell="{ dataItem }">
          <a @click.prevent="router.push(`/users/${dataItem.id}`)">Editar</a>
        </template>
      </GridColumn>
    </Grid>
  </div>
</template>

<style scoped>
.toolbar { margin-bottom: 10px; }
.toolbar input { margin-right: 8px; }
</style>
