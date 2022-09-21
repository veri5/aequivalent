<template>
  <el-row>
    <el-col>
      <el-menu
        mode="horizontal"
        :ellipsis="false"
        style="align-items: center; padding: 5px;"
        :background-color="'white'"
        text-color="black"
      >
        <div
          style="margin: 0px 10px; line-height: 0px;"
        >
          <img width="30" :src="require(`@/assets/${company.homeLogo}`)"/>
        </div>

        <div class="tagline">{{ company.tagline }}</div>
        
        <div class="flex-grow" />
        
        <!-- <el-tooltip content="You have unread notifications" placement="bottom">
          <el-badge is-dot class="bell-badge">
            <el-button link circle :icon="Bell" class="bell-icon" />
          </el-badge>
        </el-tooltip>

        <el-divider direction="vertical" class="menu-divider"/> -->

        <el-sub-menu index="0">
          <template #title>
            <el-avatar :size="30">
              <img :src="getAvatar(user)"/>
            </el-avatar>
          </template>
          <el-menu-item index="0-1" class="submenu-header no-hover">
            <div>Signed in as:</div>
            <strong>{{ user.name }}</strong>
            <i>{{ hideDid(user.did) }}</i>
          </el-menu-item>
          <!-- <el-divider class="submenu-divider"/>
          <el-tooltip content="Profile not syncing" placement="top">
            <el-menu-item disabled>Your profile</el-menu-item>
          </el-tooltip> -->
          <el-divider class="submenu-divider"/>
          <TheSignOutMenuItem />
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import { Bell } from '@element-plus/icons-vue'
import TheSignOutMenuItem from '@/components/aequivalent/TheSignOutMenuItem.vue';

function getAvatar(user) {
  return !user.avatar.uri ? require(`@/assets/${user.avatar}`) : user.avatar.uri
}

function hideDid(str) {
  return `${str.substring(0, 13)}...${str.slice(-4)}`
}

const store = useStore()
const namespace = 'aequivalent'
const storeNamespace = store.state[namespace]

const user = computed(() => storeNamespace.user.profile)
const company = computed(() => storeNamespace.company.profile)
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.tagline{
  color: black;
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