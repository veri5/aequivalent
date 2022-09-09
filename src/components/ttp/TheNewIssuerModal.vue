<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>New issuer</strong>
      <p style="font-size: var(--el-font-size-small);">Please fill out the following form to add a new issuer</p>
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
        label="Name"
        prop="name"
      >
        <el-input 
          v-model="form.name"
          placeholder="Google LLC"
        />
      </el-form-item>
      <el-form-item
        label="DID"
        prop="did"
      >
        <el-input 
          v-model="form.did"
          placeholder="0x1234...abcd"
        >
          <template #prepend>
            <strong>did:vda:</strong>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item
        label="Element"
        prop="element"
      >
        <el-select 
          v-model="form.element" 
          placeholder="Click to select a element"
          :filterable="true"
          :clearable="true"
          style="width: 100%"
        >
          <el-option
            v-for="item in elementOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item 
        label="Expiry"
        prop="expiry"
      >
        <el-date-picker
          v-model="form.expiry"
          type="date"
          :clearable="true"
          placeholder="Click to select a expiry date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          style="width: 50%;"
        />
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
import { Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'

const store = useStore()
const namespace = 'ttp'
const storeNamespace = store.state[namespace]

const showModel = ref(false)
const isNewModalVisible = computed(() => store.getters[`${namespace}/issuers/isNewIssuerModalVisible`])
watch(isNewModalVisible, (value) => {
  showModel.value = value
})
const elementOptions = computed(() => storeNamespace.issuers.elementOptions)


const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  did: '',
  element: '',
  expiry: ''
})

const rules = reactive<FormRules>({
  name: [
    { 
      required: true, 
      message: 'A name is required', 
      trigger: ['blur', 'change']
    },
  ],
  did: [
    { 
      required: true, 
      message: 'A did is required', 
      trigger: ['blur', 'change']
    },
  ],
  element: [
    { 
      required: true,
      message: 'A element is required', 
      trigger: ['blur', 'change']
    },
  ],
  expiry: [
    { 
      required: true, 
      message: 'A expiry date is required', 
      trigger: ['blur', 'change']
    }
  ]
})


function resetForm(){
  if (!formRef.value) return
  formRef.value.resetFields()
}
function closeModal(){
  resetForm(formRef.value)
  store.dispatch(`${namespace}/issuers/closeNewIssuerModal`)
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
    const issuer = {
      name: form.name,
      did: form.did,
      element: form.element,
      expiry: form.expiry
    }
    store.dispatch(`${namespace}/issuers/confirmNewIssuer`, issuer)
    
    ElNotification({
      message: 'Issuer created successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}
</script>