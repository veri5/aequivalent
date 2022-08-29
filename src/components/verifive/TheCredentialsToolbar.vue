<template>
  <template v-if="isSelected">
    <el-button
      type="danger"
      plain
      :icon="Delete" 
      @click="openRemoveBox"
    >
      Remove
    </el-button>
    <el-button
      :icon="Share" 
    >
      Share
    </el-button>
    <el-button
      :icon="View"
    >
      Review
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

const isSelected = computed(() => store.getters[`${namespace}/credentials/isRowSelected`])


function newRequest() {
  store.dispatch(`${namespace}/credentials/newRequest`)
}
function removeSelected() {
  store.dispatch(`${namespace}/credentials/removeCurrentRow`)
}
function clearSelection() {
  store.dispatch(`${namespace}/credentials/clearSelection`)
}

const openRemoveBox = () => {
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