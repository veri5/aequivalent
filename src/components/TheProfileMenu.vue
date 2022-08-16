<template>
  <el-row>
    <el-col>
      <el-menu
        mode="horizontal"
        :ellipsis="false"
        style="align-items: center; padding: 5px;"
        background-color="#FAFAFA"
        text-color="#2c3e50"
      >
        <el-avatar :size="50" style="margin-left:10px;">
          <img :src="require(`../assets/${company.logo}`)"/>
        </el-avatar>

        <div class="flex-grow" />
        
        <el-tooltip content="You have unread notifications" placement="bottom">
          <el-badge is-dot class="bell-badge">
            <el-button link circle :icon="Bell" class="bell-icon" />
          </el-badge>
        </el-tooltip>

        <el-divider direction="vertical" class="menu-divider"/>

        <el-sub-menu index="0">
          <template #title>
            <el-avatar :size="30">
              <img :src="require(`../assets/${user.avatar}`)"/>
            </el-avatar>
          </template>
          <el-menu-item index="0-1" class="submenu-header no-hover">
            <div>Signed in as</div>
            <strong>{{ user.name }}</strong>
            <i>{{ user.did }}</i>
          </el-menu-item>
          <el-divider class="submenu-divider"/>
          <el-menu-item index="0-2" disabled>Your profile</el-menu-item>
          <el-divider class="submenu-divider"/>
          <el-menu-item  index="0-3" @click="disconnect">Sign out</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import { Bell } from '@element-plus/icons-vue'

const props = defineProps({
  namespace: {
    type: String,
    required: true,
    default: "ttp"
  },
})

const store = useStore()

const storeNamespace = store.state[props.namespace]

const user = computed(() => storeNamespace.user.profile)
const company = computed(() => storeNamespace.company.profile)

const disconnect = () => store.dispatch(`${props.namespace}/user/disconnect`)
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.bell-icon {
   font-size: 1.2rem;
}
.bell-badge {
  width: 18px;
}
.menu-divider {
  margin-left: 20px;
}
.submenu-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  min-height:80px;
  line-height: 25px !important;
}
.submenu-divider {
  margin: 5px 0;
}
.no-hover{
  pointer-events: none;
}
</style>