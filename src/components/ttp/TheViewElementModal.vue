<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View element</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the element details below</p>
    </template>

    <el-descriptions v-if="element !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Name">{{ element.name }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="tagType(element.status)"
          :effect="'plain'"
        >
          {{ element.status }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Owner">{{ element.owner }}</el-descriptions-item>
      <el-descriptions-item label="Website">
        <el-link
          type="primary"
          :underline="false" 
          href="https://aequivalent.ch" 
          target="_blank"
        >
          {{ element.url }}
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

const element = computed(() => store.getters[`${namespace}/elements/selected`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/elements/isViewModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/elements/closeViewModal`)
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