<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>Verifive Credential</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the credential details below</p>
    </template>

    <el-descriptions v-if="selectedCredential !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedCredential.type }}</el-descriptions-item>
      <el-descriptions-item label="Issuer" :span="2">{{ selectedCredential.issuer }}</el-descriptions-item>
      <el-descriptions-item label="Correct">
        <el-tag
          :type="correctTagType(selectedCredential.correct)"
          :effect="'plain'"
          style="min-width: 90px; text-transform: capitalize;"
        >
          {{ selectedCredential.correct }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Valid">
        <el-tag
          :type="validTagType(selectedCredential.valid)"
          :effect="'plain'"
          style="min-width: 90px; text-transform: capitalize;"
        >
          {{ selectedCredential.valid }}
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
        @click="openVerifiveConfirmBox"
      >
        Verifive
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch, markRaw } from 'vue'
import { Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'
import { correctTagType, validTagType } from '@/components/helpers/tags'

const store = useStore()
const namespace = 'acme'
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/credentials/isVerifiveCredentialModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})

function closeModal(){
  store.dispatch(`${namespace}/credentials/closeVerifiveCredentialModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
function openVerifiveConfirmBox(){
  ElMessageBox.confirm(
    'Your signature is being requested. Continue?',
    'Signature request',
    {
      confirmButtonText: 'Sign',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Key),
    }
  )
  .then(() => {
    store.dispatch(`${namespace}/credentials/verifiveSelectedCredential`)

    ElNotification({
      message: 'Credential verifived successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}
</script>

<style scoped>
.menu-divider {
  margin: 0px 10px;
}
</style>