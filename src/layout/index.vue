<template >
  <div :class="classObj">
    <sidebar class="fixed inset-0 sidebar-container border-0 border-r border-gray-300 border-solid"/>
    <div class="main-container">
      <navbar/>
      <router-view/>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import navbar from './navbar/index.vue';
import sidebar from './sidebar/index.vue';
import { useStore } from 'vuex'

const store = useStore()

const classObj = computed(() => {
  return { hideSidebar: store.state.app.sidebar.isCollapse}
})
</script>