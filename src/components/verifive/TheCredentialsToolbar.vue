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
    @click="newRequest"
  >
    New request
  </el-button>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Edit, Delete, Share, View, CircleClose } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]

const currentRow = computed(() => store.getters[`${namespace}/credentials/currentRow`])


function newRequest() {
  store.dispatch(`${namespace}/credentials/newRequest`)
}
function removeSelected() {
  store.dispatch(`${namespace}/credentials/removeCurrentRow`)
}
function clearSelection() {
  store.dispatch(`${namespace}/credentials/clearSelection`)
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