<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View request</strong>
      <p style="font-size: var(--el-font-size-small);">Please find your request details below</p>
    </template>

    <el-descriptions v-if="request !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type">{{ request.type }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="tagType(request.status)"
          :effect="'plain'"
        >
          {{ request.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Requester">{{ request.requester }}</el-descriptions-item>
    </el-descriptions>
    
    <template #footer>
      <el-button
        @click="closeModal"
      >
        Close
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const namespace = 'aeq'

const request = computed(() => store.getters[`${namespace}/requests/selected`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/requests/isViewModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/requests/closeViewModal`)
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
    case 'Processing':
      tag = 'info'
      break
    default:
      tag = 'info'
      break
  }

  return tag
}
</script>