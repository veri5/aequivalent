<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
    >
    <!-- header -->
    <template #header>
      <strong>New credential issuance</strong>
      <p style="font-size: var(--el-font-size-small);">Please review the following requested form to issue a new credential.</p>
      <el-divider style="margin: 0;"/>
    </template>
    
    <!-- body -->
    <el-form 
      ref="formRef"
      :model="form"
      :rules="rules"
      :label-position="'top'"
      size="default"
    >
      <el-form-item 
        label="Credential type"
        prop="type"
      >
        <el-select 
          v-model="form.type" 
          placeholder="Please select a credential type"
          :filterable="true"
          style="width: 100%"
        >
          <el-option
            v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
          />
        </el-select>
      </el-form-item>
      <el-form-item 
        v-if="showUpload()"
        prop="upload"
      >
        <el-alert type="info" show-icon :closable="false">
          <h4>Please upload a scanned or electronic copy of your original certificate</h4>
        </el-alert>        
        <el-upload
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :on-success="(response, uploadFile) => { fileUploaded = true }"
          :on-remove="() => fileUploaded = false"
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

      <el-divider />

      <!-- footer -->
      <el-form-item>
        <el-button 
          type="primary" 
          plain 
          @click="submit"
        >
          Submit
        </el-button>
        <el-button
          @click="closeModal"
        >
          Cancel
        </el-button>
      </el-form-item>
    </el-form>    
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, markRaw } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled, CreditCard } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'
import veridaAccount from '@/verida/aeq-account'

const store = useStore()
const namespace = 'aeq'
const storeNamespace = store.state[namespace]

const showModel = ref(false)
const isModalVisible = computed(() => store.getters[`${namespace}/requests/isModalVisible`])
watch(isModalVisible, (value) => {
  showModel.value = value
})
const typeOptions = computed(() => storeNamespace.requests.typeOptions)
function showUpload(){
  return form.type ? typeOptions.value.find(({ value }) => value === form.type).upload : false
}


const formRef = ref<FormInstance>()
const form = reactive({
  type: '',
  uploadedFile: '',
})
const fileUploaded = ref(false)

function validateUpload(rule: any, value: any, callback: any){
  if (fileUploaded.value) {
    callback()
  } else {
    callback(new Error("Something went wrong uploading your file"))
  }
}
const rules = reactive<FormRules>({
  type: [
    { 
      required: true, 
      message: 'A credential type is required', 
      trigger: ['blur', 'change']
    },
  ],
  upload: [
    {
      validator: validateUpload,
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
  store.dispatch(`${namespace}/requests/closeModal`)
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
function openConfirmBox(){
  ElMessageBox.confirm(
    'A new credential will be created. Continue?',
    'Warning',
    {
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(CreditCard),
    }
  )
  .then(() => {
    const newCredential = {
      element: form.type,
      uploadedFile: ''
    }
    store.dispatch(`${namespace}/requests/confirmCredential`, newCredential)
    
    sendCredential()

    ElNotification({
      message: 'Request reviewed successfully',
      type: 'success',
      position: 'top-left'
    })
    closeModal()
  })
}

async function sendCredential() {
  const did = 'did:vda:0x8D8c24447Ad621f5B258705D741d7B17a6c79AA8'
  const type = 'inbox/type/dataRequest'
  const data = {
    requestSchema: null,
    userSelect: null,
    filter: {}
  }
  const name = veridaAccount.profile.name
  const message = `${name} is requesting a new ${form.type} credential`
  const config = {
    recipientContextName: "Verida: Vault",
  }

  const msgInstance = await veridaAccount.context.getMessaging()

  await msgInstance.send(did, type, data, message, config)
}
</script>