<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>New credential</strong>
      <p style="font-size: var(--el-font-size-small);">Please fill out the following form to request a new credential</p>
    </template>

    <el-form 
      ref="formRef"
      :model="form"
      :rules="rules"
      :label-position="'top'"
      :size="'default'"
    >
      <el-form-item
        label="Issuer"
        prop="issuer"
      >
        <el-select 
          v-model="form.issuer" 
          placeholder="Click to select a credential issuer"
          :filterable="true"
          :clearable="true"
          style="width: 100%"
          @change="formTypeRef?.resetField()"
        >
          <el-option
            v-for="item in issuers"
              :key="item.label"
              :label="item.label"
              :value="item.name"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        v-if="form.issuer"
        ref="formTypeRef"
        label="Type"
        prop="type"
      >
        <el-select 
          v-model="form.type" 
          placeholder="Click to select a credential type"
          :filterable="true"
          :clearable="true"
          style="width: 100%"
        >
          <el-option
            v-for="item in issuers.find(({ name }) => form.issuer == name).types"
              :key="item.name"
              :value="item.label"
          />
        </el-select>
      </el-form-item>

      <el-form-item 
        v-if="form.type == 'University Diploma'"
        ref="formUploadRef"
        label="Certificate"
        prop="upload"
      >
        <el-alert type="info" show-icon :closable="false">
          <span>Please upload a scanned or electronic copy of your original certificate</span>
        </el-alert>        
        <el-upload
          ref="upload"
          action="https://run.mocky.io/v3/d30b7e5f-47ec-463b-ba8e-700e574b3992"
          :auto-upload="false"
          :drag="true"
          :limit="1"
          @success="(response, uploadFile) => { fileUploaded = true; formUploadRef?.resetField() }"
          @change="(uploadFile, uploadFiles) => { fileUploaded = true; formUploadRef?.resetField() }"
          @remove="() => fileUploaded = false"
          style="width: 100%"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 30 MB
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    
    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px; border: none;"/>
      <el-button
        @click="closeModal"
      >
        Cancel
      </el-button>
      <el-button 
        type="primary"
        plain
        @click="submit"
      >
        Submit
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, markRaw } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance, FormItemInstance, FormRules } from 'element-plus'
import { UploadFilled, Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'
import { uid } from 'uid';

const showModel = ref(false)
const fileUploaded = ref(false)

const store = useStore()
const namespace = 'acme'
const profile = computed(() => store.getters[`${namespace}/user/profile`])
const issuers = computed(() => store.getters[`${namespace}/credentials/issuers`])
const Statuses = computed(() => store.getters[`${namespace}/credentials/Statuses`])
const isViewModalVisible = computed(() => store.getters[`${namespace}/credentials/isNewCredentialModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})


const formRef = ref<FormInstance>()
const formTypeRef = ref<FormItemInstance>()
const formUploadRef = ref<FormItemInstance>()

const form = reactive({
  issuer: '',
  type: '',
  upload: ''
})
const rules = reactive<FormRules>({
  issuer: [
    { 
      required: true, 
      message: 'An issuer is required', 
      trigger: ['blur', 'change']
    },
  ],
  type: [
    { 
      required: true, 
      message: 'A type is required', 
      trigger: ['blur', 'change']
    },
  ],
  upload: [
    {
      validator: () => fileUploaded.value, 
      required: true, 
      message: 'A original certificate is required',
      trigger: ['blur', 'change']
    },
  ],
})
function resetForm(){
  if (!formRef.value) return
  formRef.value.resetFields()
}
function closeModal(){
  fileUploaded.value = false
  resetForm(formRef.value)
  store.dispatch(`${namespace}/credentials/closeNewCredentialModal`)
}
function beforeClose(done){
  closeModal()
  done()
}

function submit(){
  if (!formRef.value) return
  formRef.value.validate((valid) => {
    if (valid) {
      openConfirmBox()
    } else {
      return false
    }
  })
}
/*
  Workaround to unify Requests and Credentials. Just for demo purposes.
*/
function addNewRequest(){
  const request = {
    uid: uid(16),
    type: form.type,
    issuer: form.issuer,
    validity: Statuses.value.UnderReview,
    requester: profile.value.name,
    status: Statuses.value.UnderReview
  }
  store.dispatch(`${form.issuer}/requests/addNewRequest`, request)
}
function openConfirmBox(){
  ElMessageBox.confirm(
    'Your signature is being requested. Continue?',
    'Signature request',
    {
      confirmButtonText: 'Sign',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Key),
    }
  )
  .then(() => {
    addNewRequest()
    
    ElNotification({
      message: 'Credential requested successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}
</script>