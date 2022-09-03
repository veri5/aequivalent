<template>
  <template v-if="currentRow">
    <el-button
      type="danger"
      plain
      :icon="Delete" 
      @click="openRemoveBox"
    >
      Remove
    </el-button>
    <el-button v-if="currentRow.status !== 'Processing'"
      :icon="View"
      @click="viewSelected"
    >
      View
    </el-button>
    <el-button
      :icon="CircleClose"
      @click="clearSelection"
    >
      Clear selection
    </el-button>
  </template>
  <div v-else
    :style="`font-size: var(--el-font-size-small)`"
  >
    Please select a request to start reviewing
  </div>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Edit, Delete, Share, View, CircleClose } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const currentRow = computed(() => store.getters[`${namespace}/requests/currentRow`])


function removeSelected() {
  store.dispatch(`${namespace}/requests/removeCurrentRow`)
}
function viewSelected() {
  store.dispatch(`${namespace}/requests/viewCurrentRow`)
}
function clearSelection() {
  store.dispatch(`${namespace}/requests/clearSelection`)
}
function openRemoveBox(){
  ElMessageBox.confirm(
    'Issuance will permanently be remove. Continue?',
    'Warning',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Issuance removed successfully',
      type: 'success',
      position: 'top-left'
    })
    removeSelected()
  })
}
</script>