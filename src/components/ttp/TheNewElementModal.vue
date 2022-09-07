<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>New element</strong>
      <p style="font-size: var(--el-font-size-small);">Please fill out the following form to request a new element</p>
      <el-divider style="margin: 0;"/>
    </template>

    <el-form 
      ref="formRef"
      :model="form"
      :rules="rules"
      :label-position="'top'"
      :size="'default'"
    >
      <el-form-item
        label="Element type"
        prop="type"
      >
        <el-select 
          v-model="form.type" 
          placeholder="Please select a element type"
          :filterable="true"
          :clearable="true"
          style="width: 100%"
        >
          <el-option
            v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
          ref="upload"
          action="https://run.mocky.io/v3/d30b7e5f-47ec-463b-ba8e-700e574b3992"
          :auto-upload="false"
          :drag="true"
          :limit="1"
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
    </el-form>

    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px"/>
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
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled, Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'
import veridaAccount from '@/verida/veri-account'

const store = useStore()
const namespace = 'ttp'
const storeNamespace = store.state[namespace]

const showModel = ref(false)
const isNewModalVisible = computed(() => store.getters[`${namespace}/elements/isNewElementModalVisible`])
watch(isNewModalVisible, (value) => {
  showModel.value = value
})
const typeOptions = computed(() => storeNamespace.elements.typeOptions)
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
      message: 'A element type is required', 
      trigger: ['blur', 'change']
    },
  ],
  upload: [
    {
      // validator: validateUpload,
      required: false, 
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
  store.dispatch(`${namespace}/elements/closeNewElementModal`)
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
    const newRequest = {
      elementId: form.type,
      uploadedFile: ''
    }
    store.dispatch(`${namespace}/elements/confirmNewElement`, newRequest)
    
    // sendRequest()

    ElNotification({
      message: 'Element requested successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}

async function sendRequest() {
  const did = 'did:vda:0x8D8c24447Ad621f5B258705D741d7B17a6c79AA8'
  const type = 'inbox/type/dataRequest'
  const data = {
    requestSchema: null,
    userSelect: null,
    filter: {}
  }
  const name = veridaAccount.profile.name
  const message = `${name} is requesting a new ${form.type} element`
  const config = {
    recipientContextName: "Verida: Vault",
  }

  const msgInstance = await veridaAccount.context.getMessaging()

  await msgInstance.send(did, type, data, message, config)
}
</script>