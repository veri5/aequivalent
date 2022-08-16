<template>
  <el-row>
    <el-col>
      <div id="verida">
        <h1>Identities</h1>
      </div>
    </el-col>
  </el-row>

  <el-row>
    <el-col>   
      <el-card shadow="never">
        <div class="flex">
          <el-button
            type="primary"
            plain
            @click="dialogFormVisible = true"
          >
            New Identity
          </el-button>
          <template v-if="currentRow">
            <el-button
              type="danger"
              plain
              @click="openRevokeBox"
            >
              Revoke
            </el-button>
            <el-button
              plain
              @click="setCurrent()"
            >
              Clear Selection
            </el-button>
          </template>
        </div>
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card shadow="never">
        <el-input v-model="search" 
          placeholder="Search all service credentials" 
          clearable
          size="default"
        />
      </el-card>
      <el-card shadow="never">
        <el-table
          ref="singleTableRef"
          :data="filterTableData"
          style="width:100%"
          highlight-current-row
          border
          height="250"
          :header-cell-style="{ background: '#fafafa' }"
          @current-change="handleCurrentChange"
        >
          <!-- <el-table-column type="selection" width="55" /> -->
          <el-table-column type="index" width="50" />
          <el-table-column prop="name" label="Entity Name"/>
          <el-table-column prop="did" label="Decentralised Identifier" />
          <el-table-column prop="serviceCredential" label="Service Credential" />
          <el-table-column label="Service Endpoint">
            <template #default="scope">
              <el-link type="primary" :underline="false" href="" target="_blank">{{ scope.row.serviceEndpoint }}</el-link>    
            </template>
          </el-table-column>
          <el-table-column prop="validFrom" label="Valid From" />
          <el-table-column prop="validUntil" label="Valid Until" />
        </el-table>
      </el-card>
    </el-col>
  </el-row>

  <el-dialog v-model="dialogFormVisible" title="Register a new identity">
    <el-form :model="form"
      :label-position="labelPosition"
    >
      <el-form-item label="Entity Name">
        <el-input v-model="form.name"
          placeholder="Google LLC"
        />
      </el-form-item>
      <el-form-item label="Decentralised Identifier">
        <el-input v-model="form.did"
          placeholder="0x1234...abcd">
          <template #prepend>did:verida:</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Service Credential">
        <el-select v-model="form.credential" 
          placeholder="Select a service credential" 
          style="width: 100%"
        >
          <el-option label="University Diploma" value="university_diploma" />
          <el-option label="Verifiable LEI" value="v_lei" />
        </el-select>
      </el-form-item>
      <el-form-item label="Service Endpoint">
        <el-input v-model="form.serviceEndpoint"
          placeholder="api.aequivalent.ch">
          <template #prepend>https://</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Enable Validity">
        <el-switch v-model="form.validity" 
          style="--el-switch-on-color: #13ce66;"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </el-form-item>
      <template v-if="form.validity">
        <el-form-item label="Pick Validity">
          <el-date-picker
            v-model="dateTime"
            type="datetimerange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
      </template>
      <el-divider />
      <el-form-item>
        <el-button type="primary" plain @click="openRegisterBox">Submit</el-button>
        <el-button plain @click="dialogFormVisible = false">Cancel</el-button>
      </el-form-item>
    </el-form>    
  </el-dialog>

</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import { ElTable } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'

const dialogFormVisible = ref(false)
const labelPosition = ref('top')
const dateTime = ref([])

// do not use same name with ref
const form = reactive({
  name: '',
  did: '',
  credential: '',
  serviceEndpoint: '',
  validity: false,
})

interface Entity {
  name: string,
  did: string,
  serviceCredential: string,
  serviceEndpoint: string,
  validFrom: string,
  validUntil: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.serviceCredential.toLowerCase().includes(search.value.toLowerCase())
  )
)

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()
const handleCurrentChange = (val: Entity | undefined) => {
  currentRow.value = val
}
const setCurrent = (row?: Entity) => {
  singleTableRef.value!.setCurrentRow(row)
}

const tableData: Entity[] = [
  {
    name: 'Aequivalent',
    did: 'did:verida:0x1234...abcd',
    serviceCredential: 'University Diploma',
    serviceEndpoint: 'https://aequivalent.ch',
    validFrom: '2022-01-01',
    validUntil:'2024-07-01',
  },
  {
    name: 'Gleif',
    did: 'did:eth:0x1234...abcd',
    serviceCredential: 'vLEI',
    serviceEndpoint: 'https://gleif.org',
    validFrom: '2022-01-01',
    validUntil:'2024-07-01',
  },
]

const openRegisterBox = () => {
  ElMessageBox.confirm(
    'A new entity will be register. Continue?',
    'Warning',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Entity registered successfully',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Register action canceled',
      })
    })
}

const openRevokeBox = () => {
  ElMessageBox.prompt('Please input an authorised e-mail', 'Security check', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Entity revoked successfully`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Revoke action canceled',
      })
    })
}
</script>

<style scoped>
#verida {
  text-align: left;
}
</style>