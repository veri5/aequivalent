<template>
  <el-card v-if="requests.length"
    shadow="never"
    class="card"
    :body-style="{ padding: '5px' }"
  >
    <div id="container">
      <div 
        v-if="selectedRequest"
        class="toolbar"
      >
        <el-tooltip
          v-if="selectedRequest.status !== Statuses.Approved &&
                selectedRequest.status !== Statuses.Rejected" 
          content="Review Request" 
          placement="bottom"
        >
          <el-button
            type="primary"
            :size="'default'"
            circle
            plain
            :icon="Edit" 
            @click="reviewSelectedRequest"
          />
        </el-tooltip>

        <el-divider
          v-if="selectedRequest.status !== Statuses.Approved &&
                selectedRequest.status !== Statuses.Rejected" 
          direction="vertical" class="menu-divider"/>
        
        <el-tooltip
          content="View Request" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="View"
            @click="viewSelectedRequest"
          />
        </el-tooltip>

        <el-tooltip 
          content="Clear Selection" 
          placement="bottom"
        >
          <el-button
            :size="'default'"
            circle
            plain
            :icon="Close"
            @click="clearSelectedRequest"
          />
        </el-tooltip>
      </div>
      <div v-else
        class="toolbar "
      >
        <span class="not-selected-text">
          {{ notSelectedYetText }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Edit, Delete, View, Close, RemoveFilled } from '@element-plus/icons-vue'

const store = useStore()
const namespace = 'fedpol'
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])
const requests = computed(() => store.getters[`${namespace}/requests/requests`])
const Statuses = computed(() => store.getters[`${namespace}/requests/Statuses`])

const notSelectedYetText = 'Click on a request to show the toolbar'

function reviewSelectedRequest() {
  store.dispatch(`${namespace}/requests/showReviewRequestModal`)
}
function rejectSelectedRequest() {
  store.dispatch(`${namespace}/requests/rejectSelectedRequest`)
}
function viewSelectedRequest() {
  store.dispatch(`${namespace}/requests/showViewRequestModal`)
}
function clearSelectedRequest() {
  store.dispatch(`${namespace}/requests/clearSelectedRequest`)
}
function showRemoveSelectedBox(){
  ElMessageBox.confirm(
    'Request will permanently be rejected. Continue?',
    'Reject request',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'error',
      icon: markRaw(Delete),
    }
  )
  .then(() => {
    ElNotification({
      message: 'Request rejected successfully',
      icon: markRaw(RemoveFilled),
      position: 'top-right',
      duration: 3000
    })
    rejectSelectedRequest()
  })
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.toolbar {
  display: flex;
  align-items: center;
  padding: 5px;
}
.card {
  background-color: #f3f2f3; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
.not-selected-text {
  font-size: 12px;
  color: black;
  padding: 8px 0px;
}
.menu-divider {
  margin: 0px 10px;
}
</style>