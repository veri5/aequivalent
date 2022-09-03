<template>
  <div id="toolbar">
    <div v-if="currentRow">
      <el-tooltip v-if="currentRow.status !== Statuses.processing"
        content="Remove" 
        placement="bottom"
      >
        <el-button
          type="danger"
          :size="'default'"
          circle
          plain
          :icon="Delete" 
          @click="openRemoveBox"
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
          @click="viewRequest"
        />
      </el-tooltip>
      <el-tooltip 
        content="Clear selection" 
        placement="bottom"
      >
        <el-button
          :size="'default'"
          circle
          plain
          :icon="Close"
          @click="clearSelection"
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

const currentRow = computed(() => store.getters[`${namespace}/credentials/currentRow`])
const Statuses = computed(() => store.getters[`${namespace}/credentials/statuses`])


function newRequest() {
  store.dispatch(`${namespace}/credentials/newRequest`)
}
function removeSelected() {
  store.dispatch(`${namespace}/credentials/removeCurrentRow`)
}
function viewRequest() {
  store.dispatch(`${namespace}/credentials/viewRequest`)
}
function clearSelection() {
  store.dispatch(`${namespace}/credentials/clearSelection`)
}
function openRemoveBox(){
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