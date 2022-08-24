<template>
  <el-row>
    <el-col>
      <h2>Credentials</h2>
    </el-col>
  </el-row>

  <el-row>
    <el-col>   
      <el-card shadow="never">
        <div class="flex">
          <template v-if="currentRow">
            <el-button
              type="danger"
              plain
              @click="openRemoveBox"
            >
              Remove
            </el-button>
            <el-button
              type="primary"
              plain
              @click="openRemoveBox"
            >
              Share
            </el-button>
            <el-button
              plain
              @click="setCurrent()"
            >
              Clear selection
            </el-button>
          </template>
          <el-button v-else
            type="primary"
            plain
            @click="dialogFormVisible = true"
          >
            New credential
          </el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
  
  <el-row>
    <el-col>
      <el-card shadow="never">
        <el-tabs :tab-position="'top'" class="demo-tabs">
          <el-tab-pane label="Issued">
            <el-input v-model="search" 
              placeholder="Search all credential types" 
              clearable
              size="default"
            />
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
              <el-table-column type="index" width="20" />
              <el-table-column prop="type" label="Type" />
              <el-table-column prop="issuer" label="Issuer" />
              <el-table-column prop="expiry" label="Expiry" />
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="Pending">
            <el-input v-model="search" 
              placeholder="Search all credential types" 
              clearable
              size="default"
            />
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
              <el-table-column type="index" width="20" />
              <el-table-column prop="type" label="Type" />
              <el-table-column prop="issuer" label="Issuer" />
              <el-table-column prop="status" label="Status" />
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>

  <el-dialog v-model="dialogFormVisible">
    <template #header>
      <strong>New credential</strong>
      <p style="font-size: var(--el-font-size-small);">Please fill out the following form to request a new credential.</p>
      <el-divider style="margin: 0;"/>
    </template>
    <el-form 
      :model="form"
      :label-position="labelPosition"
      size="default"
    >
      <el-form-item label="Credential type">
        <el-select v-model="form.credential" 
          placeholder="Please select a credential type" 
          style="width: 100%"
        >
          <el-option label="University diploma - Aequivalent" value="university_diploma" />
          <el-option label="Credit Report - Experian" value="credit_report"/>
          <el-option label="Pink Slip - NRMA" value="pink_slip" :disabled="true"/>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.credential === 'university_diploma'">
        <el-alert type="info" show-icon :closable="false">
          <h4>Please upload a scanned or electronic copy of your original university diploma</h4>
        </el-alert>        
        <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          style="width: 100%"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              pdf/tiff files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item v-else-if="form.credential === 'credit_report'">
        <el-empty description="Required documentation" style="width: 100%"/>
      </el-form-item>
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
import { Bell } from '@element-plus/icons-vue'
import { ElTable } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

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

interface Credential {
  type: string,
  issuer: string,
  expiry: string,
  status: string
}
              
const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.type.toLowerCase().includes(search.value.toLowerCase())
  )
)

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()
const handleCurrentChange = (val: Credential | undefined) => {
  currentRow.value = val
}
const setCurrent = (row?: Credential) => {
  singleTableRef.value!.setCurrentRow(row)
}

const tableData: Credential[] = [
  {
    type: 'University Diploma',
    issuer: 'Aequivalent',
    expiry: '2027-01-01',
    status: 'Pending'
  },
  {
    type: 'Credit Report',
    issuer: 'Experian',
    expiry: '2027-01-01',
    status: 'Final-revision'
  },
  {
    type: 'Pink Slip',
    issuer: 'NRMA',
    expiry: '2027-01-01',
    status: 'Accepted'
  }
]

const openRegisterBox = () => {
  ElMessageBox.confirm(
    'A new credential will be requested. Continue?',
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
        message: 'Credential requested successfully',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'New Request action canceled',
      })
    })
}

const openRemoveBox = () => {
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
        message: `credential removed successfully`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Remove action canceled',
      })
    })
}
</script>