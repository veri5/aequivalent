<template>
  <el-card 
    shadow="never"
    class="card"
    :body-style="{ padding: '5px 5px' }"
  >
    <el-input v-if="tableData.length"
      v-model="search" 
      placeholder="Search all credentials type" 
      clearable
      :prefix-icon="Search"
      size="default"
      :input-style="{
        color: '#2c3e50', 
        padding: '5px'
      }"
    />
    <el-table
      ref="tableRef"
      :data="filterType"
      :show-header="!!tableData.length"
      :table-layout="'auto'"
      :highlight-current-row="true"
      :default-sort="{ prop: 'type', order: 'ascending' }"
      :header-cell-style="{ 
        background: '#d1edc4', 
        color: '#2c3e50'
      }"
      :row-style="{
        cursor: 'pointer'
      }"
      :height="200"
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
          <el-icon :size="50"><CreditCard /></el-icon>
          <div>
            <strong>{{ noItemToShowYetText }}</strong>
          </div>
        </div>
      </template>

      <el-table-column prop="type" label="Type"/>
      <el-table-column prop="issuer" label="Issuer"/>
      <el-table-column label="Correctness">
        <template #default="scope">
          <el-tag
            :type="correctTagType(scope.row.correct)"
            :effect="'plain'"
            style="min-width: 80px; text-transform: capitalize;"
          >
            {{ scope.row.correct }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Validity">
        <template #default="scope">
          <el-tag
            :type="validTagType(scope.row.valid)"
            :effect="'plain'"
            style="min-width: 80px; text-transform: capitalize;"
          >
            {{ scope.row.valid }}
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
import { CreditCard, Search, SetUp, SuccessFilled } from '@element-plus/icons-vue'
import { correctTagType, validTagType } from '@/components/helpers/tags'

const noMatchingCriteriaText = 'No credential matching your search criteria was found'
const noItemToShowYetText = 'No credentials to show yet'

const store = useStore()
const namespace = 'acme'
const tableData = computed(() => store.getters[`${namespace}/credentials/credentials`])
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])
watch(selectedCredential, (value) => {
  value == null && tableRef.value!.setCurrentRow()
})

const tableRef = ref<InstanceType<typeof ElTable>>()
const search = ref('')
const filterType = computed(() =>
  tableData.value.filter((row) =>
      !search.value || 
      row.type.toLowerCase().includes(search.value.toLowerCase()))
)

function rowClick(credential){
  store.dispatch(`${namespace}/credentials/setSelectedCredential`, credential)
}
function rowDblClick() {
  store.dispatch(`${namespace}/credentials/showViewCredentialModal`)
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