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

    <el-descriptions v-if="selectedCredential !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedCredential.type }}</el-descriptions-item>
      <el-descriptions-item label="Issuer">{{ selectedCredential.issuer }}</el-descriptions-item>
      <el-descriptions-item label="Validity">
        <el-tag
          :type="tagType(selectedCredential.validity)"
          :effect="'plain'"
        >
          {{ selectedCredential.validity }}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>
    
    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px; border: none;"/>
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
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/credentials/isViewCredentialModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/credentials/closeViewCredentialModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
function tagType(validity: string) {
  let tag = ''
  switch (validity) {
    case 'Valid':
      tag = 'success'
      break
    case 'Retired':
      tag = 'danger'
      break
    default:
      tag = 'info'
      break
  }

  return tag
}
</script>