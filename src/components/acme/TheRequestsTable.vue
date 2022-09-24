<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px 5px' }"
  >
    <el-table
      ref="tableRef"
      :data="tableData"
      :show-header="!!tableData.length"
      :table-layout="'auto'"
      :highlight-current-row="true"
      :default-sort="{ prop: 'status', order: 'descending' }"
      :header-cell-style="{ 
        background: '#d1edc4', 
        color: '#2c3e50'
      }"
      :row-style="{
        cursor: 'pointer'
      }"
      :height="150"
      @row-click="rowClick"
      @row-dblclick="rowDblClick"
    >
      <template v-if="tableData.length" #empty>
        <div style="line-height: 20px; color: #2c3e50;">
          <el-icon :size="50"><SetUp /></el-icon>
          <div>
            <p>{{ noMatchingCriteriaText }}</p>
          </div>
        </div>
      </template>
      <template v-else #empty>
        <div style="line-height: 20px; color: #2c3e50;">
          <el-icon :size="50"><DocumentCopy /></el-icon>
          <div>
            <strong>{{ noItemToShowYetText }}</strong>
          </div>
        </div>
      </template>

      <el-table-column prop="type" label="Type"/>
      <el-table-column prop="issuer" label="Issuer"/>
      <el-table-column prop="status" label="Status">
        <template #default="scope">
          <el-tag
            :type="requestTagType(scope.row.status)"
            :effect="'plain'"
            style="min-width: 90px; text-transform: capitalize;"
          >
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import { DocumentCopy, Search, Edit, SetUp } from '@element-plus/icons-vue'
import { requestTagType } from '@/components/helpers/tags';

const noMatchingCriteriaText = 'No requests matching your search criteria was found'
const noItemToShowYetText = 'No requests to show yet'

const store = useStore()
const namespace = 'acme'
const tableData = computed(() => store.getters[`${namespace}/requests/requests`])
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])

const tableRef = ref<InstanceType<typeof ElTable>>()
watch(selectedRequest, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})

function rowClick(credential){
  store.dispatch(`${namespace}/requests/setSelectedRequest`, credential)
}
function rowDblClick() {
  store.dispatch(`${namespace}/requests/showViewRequestModal`)
}
</script>

<style scoped>
.card {
  background-color: #e1f3d8; 
  padding: 0px; 
  border: none; 
  margin: 0px 10px; 
  border-radius: 0px;
}
</style>