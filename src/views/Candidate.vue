<template>
  <el-row>
    <el-col>
      <div id="candidate">
        <h1>My Verifications</h1>
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
            New Request
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
          placeholder="Search all services credentials" 
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
          <el-table-column prop="name" label="Candidate Name"/>
          <el-table-column prop="did" label="Decentralised Identifier" />
          <el-table-column prop="credentialType" label="Credential Type" />
          <el-table-column prop="requestedDate" label="Requested Date" />
          <el-table-column label="Processing Status">
            <template #default="scope">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="scope.row.processingStatus" />
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>

  <el-dialog v-model="dialogFormVisible" title="Request a new verification">
    <el-form :model="form"
      :label-position="labelPosition"
    >
      <el-form-item label="Candidate Name">
        <el-input v-model="form.name"
          placeholder="John Doe"
        />
      </el-form-item>
      <el-form-item label="Decentralised Identifier">
        <el-input v-model="form.did"
          placeholder="0x1234...abcd">
          <template #prepend>did:verida:</template>
        </el-input>
      </el-form-item>
      <el-form-item label="Credential Type">
        <el-select v-model="form.credential" 
          placeholder="Select a credential type" 
          style="width: 100%"
        >
          <el-option label="University Diploma" value="university_diploma" />
          <el-option label="Credit Score" value="credit_score" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          style="width: 100%"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
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

interface User {
  name: string,
  did: string,
  credentialType: string,
  requestedDate: string,
  processingStatus: number
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.credentialType.toLowerCase().includes(search.value.toLowerCase())
  )
)

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}

const tableData: User[] = [
  {
    name: 'Alice Doe',
    did: 'did:verida:0x1234...abcd',
    credentialType: 'University Diploma',
    requestedDate: '2022-01-01',
    processingStatus: 70,
  }
]

const openRegisterBox = () => {
  ElMessageBox.confirm(
    'A new verification will be requested. Continue?',
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
        message: 'Verification requested successfully',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'New Request action canceled',
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
        message: `Verification request revoked successfully`,
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
#candidate {
  text-align: left;
}
</style>