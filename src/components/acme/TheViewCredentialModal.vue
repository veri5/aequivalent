<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View credential</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the credential details below</p>
    </template>

    <el-descriptions v-if="credential !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type">{{ credential.type }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="tagType(credential.status)"
          :effect="'plain'"
        >
          {{ credential.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Issuer">{{ credential.issuer }}</el-descriptions-item>
      <el-descriptions-item label="Website">
        <el-link
          type="primary"
          :underline="false" 
          href="https://aequivalent.ch" 
          target="_blank"
        >
          {{ credential.url }}
        </el-link>
      </el-descriptions-item>
      <el-descriptions-item label="Expiry">2027-09-04</el-descriptions-item>
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
const namespace = 'acme'

const credential = computed(() => store.getters[`${namespace}/credentials/selected`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/credentials/isViewModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/credentials/closeViewModal`)
}
function beforeClose(done){
  closeModal()
  done()
}


function tagType(status: string) {
  let tag = ''
  switch (status) {
    case 'Issued':
      tag = 'success'
      break
    case 'Revoked':
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