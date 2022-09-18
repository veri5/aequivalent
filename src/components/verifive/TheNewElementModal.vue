<template>
  <el-dialog
      v-model="isNewModalVisible"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>{{ headerTitle() }}</strong>
      <p style="font-size: var(--el-font-size-small);">{{ headerDescription() }}</p>
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
          placeholder="Type an element name"
        >
          <template #prepend v-if="selectedElement">
            <span>{{ `${selectedElement.name}.` }}</span>
          </template>
        </el-input>
      </el-form-item>

      <el-switch
        v-model="switchModel"
        size="default"
        active-text="Holder of"
        inactive-text="DID"
        class="switch-label"
        style="--el-switch-on-color: #dcdfe6; --el-switch-off-color: #dcdfe6;"
      />

      <el-form-item
        v-if="switchModel"
        prop="holder"
      >
        <el-select
          v-model="form.holder"
          :placeholder="'Click to select an element name'"
          :filterable="true"
          :clearable="true"
          style="width: 100%;"
        >
        <el-option
          v-for="element in valid(elements)"
          :key="element.name"
          :label="element.name"
          :value="element.name"
        />
        </el-select>
      </el-form-item>
      <el-form-item
        v-else
        prop="did"
      >
        <el-input 
          v-model="form.did"
          placeholder="Type a decentralised identifier"
        >
          <template #prepend>
            <span>did:vda:</span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item 
        label="Validity"
        prop="validity"
      >
        <el-date-picker
          v-model="form.validity"
          type="daterange"
          :clearable="true"
          range-separator="and"
          start-placeholder="Valid From"
          end-placeholder="Valid Until"
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
import { ref, reactive, computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance, FormRules } from 'element-plus'
import { Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'

const store = useStore()
const namespace = 'verifive'
const elements = computed(() => store.getters[`${namespace}/elements/elements`])
const selectedElement = computed(() => store.getters[`${namespace}/elements/selectedElement`])
const Statuses = computed(() => store.getters[`${namespace}/elements/Statuses`])
const isNewModalVisible = computed(() => store.getters[`${namespace}/elements/isNewElementModalVisible`])


const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  holder: '',
  did: '',
  validity: ''
})
const switchModel = ref(false)
const rules = reactive<FormRules>({
  name: [
    { 
      required: true, 
      message: 'A name is required', 
      trigger: ['blur', 'change']
    },
  ],
  holder: [
    { 
      required: true, 
      message: 'A element is required', 
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
  validity: [
    { 
      required: true, 
      message: 'A validity date range is required', 
      trigger: ['blur', 'change']
    }
  ]
})

function headerTitle(){
  return `New ${!selectedElement.value ? 'Root' : ''} Element`
}
function headerDescription(){
  return `Please fill out the following form to add a new ${!selectedElement.value ? 'root' : ''} element`
}
function valid(elements) {
  return elements.filter(({ status }) => status !== Statuses.value.Retired)
}
function resetForm(){
  if (!formRef.value) return
  formRef.value.resetFields()
  switchModel.value = false
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
    const element = Object.assign({},
      { 
        name: form.name,
        owner: form.owner,
        validFrom: form.validity[0],
        validUntil: form.validity[1],
        status: Statuses.value.Valid
      },
      selectedElement.value ? { "parent": selectedElement.value.name } : {}
    )
    store.dispatch(`${namespace}/elements/confirmNewElement`, element)
    
    ElNotification({
      message: 'Element created successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-right',
      duration: 3000
    })
    closeModal()
  })
}
</script>

<style scoped>
.switch-label:before {
    content: "*";
    color: var(--el-color-danger);
    margin-right: 4px;
}
</style>