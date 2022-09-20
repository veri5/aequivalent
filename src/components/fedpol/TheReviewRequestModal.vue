<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>Review Request</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the request details below</p>
    </template>

    <el-descriptions v-if="selectedRequest !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedRequest.type }}</el-descriptions-item>
      <el-descriptions-item label="Requester">{{ selectedRequest.requester }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="tagType(selectedRequest.status)"
          :effect="'plain'"
        >
          {{ selectedRequest.status }}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>
    
    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px; border: none;"/>
      <el-button
        @click="closeModal"
      >
        Cancel
      </el-button>

      <el-divider direction="vertical" class="menu-divider"/>
      
      <el-button 
        type="primary"
        plain 
        @click="approveSelectedRequest"
      >
        Approve
      </el-button>
      <el-button 
        type="danger"
        plain 
        @click="rejectSelectedRequest"
      >
        Reject
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const namespace = 'fedpol'
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/requests/isReviewRequestModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/requests/closeReviewRequestModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
function tagType(status: string) {
  let tag = ''
  switch (status) {
    case 'Approved':
      tag = 'success'
      break
    case 'Rejected':
      tag = 'danger'
      break
    case 'Under-Review':
      tag = 'info'
      break
    default:
      tag = 'info'
      break
  }

  return tag
}
function approveSelectedRequest(){
  store.dispatch(`${namespace}/requests/approveSelectedRequest`)
  closeModal()
}
function rejectSelectedRequest(){
  store.dispatch(`${namespace}/requests/rejectSelectedRequest`)
  closeModal()
}
</script>

<style scoped>
.menu-divider {
  margin: 0px 10px;
}
</style>