<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View issuer</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the issuer details below</p>
    </template>

    <el-descriptions v-if="issuer !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Name" :span="2">{{ issuer.name }}</el-descriptions-item>
      <el-descriptions-item label="DID" :span="2">{{ issuer.did }}</el-descriptions-item>
      <el-descriptions-item label="Element">{{ issuer.element }}</el-descriptions-item>
      <el-descriptions-item label="Expiry">{{ issuer.expiry }}</el-descriptions-item>
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
const namespace = 'verifive'

const issuer = computed(() => store.getters[`${namespace}/issuers/selected`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/issuers/isViewModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/issuers/closeViewModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
</script>