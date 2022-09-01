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
    <el-button v-if="currentRow.status !== 'Pending'"
      :icon="Share" 
    >
      Share
    </el-button>
    <el-button v-if="currentRow.status !== 'Pending'"
      :icon="View"
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
  <el-button v-else
    type="primary"
    plain
    :icon="Edit" 
    @click="newCredential"
  >
    New credential
  </el-button>
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


function newCredential() {
  store.dispatch(`${namespace}/requests/newCredential`)
}
function removeSelected() {
  store.dispatch(`${namespace}/requests/removeCurrentRow`)
}
function clearSelection() {
  store.dispatch(`${namespace}/requests/clearSelection`)
}
function openRemoveBox(){
  ElMessageBox.confirm(
    'Credential will permanently be remove. Continue?',
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
      message: 'Credential removed successfully',
      type: 'success',
      position: 'top-left'
    })
    removeSelected()
  })
}
</script>