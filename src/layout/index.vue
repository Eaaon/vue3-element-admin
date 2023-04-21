<template>
  <LayoutHeader />
  <LayoutMenu />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from './header/index.vue';
import LayoutMenu from './menu/index.vue';

export default defineComponent ({
  components: {
    LayoutHeader,
    LayoutMenu
  }
})
</script>