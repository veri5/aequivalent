<template>
  <el-select v-model="selectModel"
    :placeholder="'Click to select a role'" 
    :size="'default'"
    @change="setRole"
  >
    <el-option
      v-for="item in roleOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const selectModel = ref('')

const store = useStore()
const namespace = 'verifive'
const storeNamespace = store.state[namespace]

const roleOptions = computed(() => store.getters[`${namespace}/toolbar/roleOptions`])
const Roles = computed(() => store.getters[`${namespace}/toolbar/Roles`])

function setRole(role){
  store.dispatch(`${namespace}/toolbar/setSelectedRole`, role)
}
function initWithRole(role){
  selectModel.value = role
  setRole(role)
}
// init Select with Owner role
initWithRole(Roles.value.Owner)
</script>