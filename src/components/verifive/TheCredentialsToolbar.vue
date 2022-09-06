<template>
  <div id="toolbar">
    <div v-if="selected">
      <el-tooltip
        content="Remove" 
        placement="bottom"
      >
        <el-button
          type="danger"
          :size="'default'"
          circle
          plain
          :icon="Delete" 
          @click="showRemoveSelectedBox"
        />
      </el-tooltip>
      <el-tooltip
        content="View" 
        placement="bottom"
      >
        <el-button
          :size="'default'"
          circle
          plain
          :icon="View"
          @click="viewSelected"
        />
      </el-tooltip>
      <el-tooltip 
        content="Clear" 
        placement="bottom"
      >
        <el-button
          :size="'default'"
          circle
          plain
          :icon="Close"
          @click="clearSelected"
        />
      </el-tooltip>
    </div>
    <el-tooltip v-else
      content="New request" 
      placement="bottom"
    >
      <el-button
        type="primary"
        :size="'default'"
        circle
        plain
        :icon="Edit" 
        @click="newRequest"
      />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Edit, Delete, View, Close, RemoveFilled } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]

const selected = computed(() => store.getters[`${namespace}/credentials/selected`])
const Statuses = computed(() => store.getters[`${namespace}/credentials/statuses`])


function newRequest() {
  store.dispatch(`${namespace}/credentials/showNewRequestModal`)
}
function removeSelected() {
  store.dispatch(`${namespace}/credentials/remove`)
}
function viewSelected() {
  store.dispatch(`${namespace}/credentials/showViewModal`)
}
function clearSelected() {
  store.dispatch(`${namespace}/credentials/clear`)
}
function showRemoveSelectedBox(){
  ElMessageBox.confirm(
    'Credential will permanently be remove. Continue?',
    'Remove credential',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Credential removed successfully',
      icon: markRaw(RemoveFilled),
      position: 'top-left',
      duration: 3000
    })
    removeSelected()
  })
}
</script>

<style scoped>
#toolbar {
  padding: 10px;
  background-color: white;
}
</style>