<template>
  <div class="h-12 flex items-center justify-between shadow-md">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" />
    <div class="pr-4">
      <el-dropdown class="cursor-pointer" trigger="click">
        <div class="avatar-wrapper">
          <img class="w-8 h-8" src="data:image/png;base64,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">
          <el-icon class="ml-1"><CaretBottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu >
            <router-link to="/profile/index">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hamburger from '@/components/Hamburger'
import { reactive , computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()


function toggleSideBar(){
  store.dispatch('app/changeCollapse')
}

function logout(){
  router.push(`/login?redirect=${route.fullPath}`)
  console.log('logout')
}

</script>
