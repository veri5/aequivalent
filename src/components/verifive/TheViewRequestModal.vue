<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'35%'"
    >
    <template #header>
      <strong>View request</strong>
      <p style="font-size: var(--el-font-size-small);">Nulla at turpis eget nulla vehicula accumsan</p>
      <el-divider style="margin: 0;"/>
    </template>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px"/>
      <el-button
        @click="closeModal"
      >
        Cancel
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const namespace = 'veri'
const storeNamespace = store.state[namespace]

const showModel = ref(false)
const isModalVisible = computed(() => store.getters[`${namespace}/credentials/isViewModalVisible`])
watch(isModalVisible, (value) => {
  showModel.value = value
})


function closeModal(){
  store.dispatch(`${namespace}/credentials/closeViewModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
</script>