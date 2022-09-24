<template>
  <el-dialog
      v-model="isViewElementModalVisible"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View Element</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the element details below</p>
    </template>

    <el-descriptions v-if="selectedElement"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Name" :span="2">{{ selectedElement.name }}</el-descriptions-item>
      <el-descriptions-item label="Valid From">{{ selectedElement.validFrom }}</el-descriptions-item>
      <el-descriptions-item label="Valid Until">{{ selectedElement.validUntil }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="elementsTagType(selectedElement.status)"
          :effect="'plain'"
          style="min-width: 80px; text-transform: capitalize;"
        >
          {{ selectedElement.status}}
        </el-tag>
      </el-descriptions-item>
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
import { computed } from 'vue'
import { useStore } from 'vuex'
import { elementsTagType } from '@/components/helpers/tags';

const store = useStore()
const namespace = 'verifive'
const selectedElement = computed(() => store.getters[`${namespace}/elements/selectedElement`])
const Statuses = computed(() => store.getters[`${namespace}/elements/Statuses`])
const isViewElementModalVisible = computed(() => store.getters[`${namespace}/elements/isViewElementModalVisible`])

function closeModal(){
  store.dispatch(`${namespace}/elements/closeViewElementModal`)
}
function beforeClose(done){
  done()
  closeModal()
}
</script>