<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View entity</strong>
      <p style="font-size: var(--el-font-size-small);">Please find your entity details below</p>
    </template>

    <el-descriptions v-if="entity !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Element">{{ entity.element }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="tagType(entity.status)"
          :effect="'plain'"
        >
          {{ entity.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Entity">{{ entity.name }}</el-descriptions-item>
      <el-descriptions-item label="Website">
        <el-link
          type="primary"
          :underline="false" 
          href="https://aequivalent.ch" 
          target="_blank"
        >
          {{ entity.url }}
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
const namespace = 'ttp'

const entity = computed(() => store.getters[`${namespace}/entities/selected`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/entities/isViewModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/entities/closeViewModal`)
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