<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>New element</strong>
      <p style="font-size: var(--el-font-size-small);">Please fill out the following form to add a new element</p>
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
        label="Element"
        prop="element"
      >
        <el-select 
          v-model="form.element" 
          placeholder="Click to select a element name"
          :filterable="true"
          :clearable="true"
          style="width: 100%"
        >
          <el-option
            v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item 
        label="Owner"
        prop="owner"
      >
        <el-input 
          v-model="form.owner"
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
        </el-input>
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


const formRef = ref<FormInstance>()
const form = reactive({
  element: {
    label: '',
    value: '',
  },
  owner: '',
  did: '',
  expiry: ''
})

const rules = reactive<FormRules>({
  element: [
    { 
      required: true, 
      message: 'A element is required', 
      trigger: ['blur', 'change']
    },
  ],
  owner: [
    { 
      required: true, 
      message: 'A owner is required', 
      trigger: ['blur']
    },
  ],
  did: [
    { 
      required: true, 
      message: 'A did is required', 
      trigger: ['blur']
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
    const element = {
      name: form.element.label,
      owner: form.owner,
      did: form.did,
      expiry: form.expiry
    }
    store.dispatch(`${namespace}/elements/confirmNewElement`, element)
    
    // issueCredential()

    ElNotification({
      message: 'Element created successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}

async function issueCredential() {
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