<template>
  <div id="toolbar" v-if="tableData.length">
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
    <div v-else style="font-size: var(--el-font-size-small); padding: 8px 0px;">
      {{ notSelectedYetText}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Delete, View, Close, RemoveFilled } from '@element-plus/icons-vue'

const notSelectedYetText = 'Please select a request to start reviewing'

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const selected = computed(() => store.getters[`${namespace}/requests/selected`])
const Statuses = computed(() => store.getters[`${namespace}/requests/statuses`])
const tableData = computed(() => storeNamespace.requests.tableData)


function removeSelected() {
  store.dispatch(`${namespace}/requests/remove`)
}
function viewSelected() {
  store.dispatch(`${namespace}/requests/view`)
}
function clearSelected() {
  store.dispatch(`${namespace}/requests/clear`)
}
function showRemoveSelectedBox(){
  ElMessageBox.confirm(
    'Request will permanently be remove. Continue?',
    'Remove request',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Request removed successfully',
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
  min-height: 32px;
  padding: 10px;
  background-color: white;
}
</style>