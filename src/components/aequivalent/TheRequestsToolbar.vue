<template>
  <el-card v-if="tableData.length"
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
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
      <div v-else class="not-selected-text">
        {{ notSelectedYetText}}
      </div>
    </div>
  </el-card>  
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
const tableData = computed(() => storeNamespace.requests.tableData)


function removeSelected() {
  store.dispatch(`${namespace}/requests/remove`)
}
function viewSelected() {
  store.dispatch(`${namespace}/requests/showViewModal`)
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
      position: 'top-right',
      duration: 3000
    })
    removeSelected()
  })
}
</script>

<style scoped>
#toolbar {
  min-height: 32px;
  padding: 5px;
  background-color: white;
}
.card {
  background-color: #f3f2f3; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
.not-selected-text {
  font-family: 'Roobert-Semibold';
  font-size: 14px;
  color: black;
  padding: 8px 0px;
}
</style>