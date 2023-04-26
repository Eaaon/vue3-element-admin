<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
    <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import variables from '@/styles/variables.scss'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import SidebarItem from './SidebarItem.vue'

const store = useStore()
const router = useRouter();
const route = useRoute()

const activeMenu = computed(() => {
  if(route.meta.activeMenu){
    return route.meta.activeMenu
  }
  return route.path
})

const isCollapse = computed(() => store.state.app.sidebar.isCollapse)

const permission_routes = computed(() => store.state.permission.routes)

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>