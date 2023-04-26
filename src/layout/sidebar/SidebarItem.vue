<template>
  <template v-if="!item.hidden">
    <div v-if="hasOneShowingChild(item.children,item)">
      <router-link :to="onlyOneChild?.path">	
        <el-menu-item :index="'/'+ onlyOneChild?.path">
          <el-icon>
              <component :is="item?.meta?.icon"></component>
          </el-icon>
          <template #title>{{onlyOneChild?.meta?.title}}</template>
        </el-menu-item>
      </router-link>
    </div>
    <template v-else>
      <el-sub-menu :index="item?.path">
        <template #title>
          <el-icon>
            <component :is="item?.meta?.icon"></component>
          </el-icon>
          <span>{{item?.meta?.title}}</span>
        </template>
        <sidebar-item
          v-for="child in item?.children"
          :key="child?.path"
          :item="child"
        />
      </el-sub-menu>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { defineProps,defineEmits } from 'vue'

let onlyOneChild = null
const props = defineProps(['item'])
const item = props.item

function hasOneShowingChild(children = [], parent){
  const showingChildren = children.filter(item => {
    if (item?.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild = { ... parent, path: parent.path, noShowingChildren: true }
    return true
  }

  return false
}

</script>