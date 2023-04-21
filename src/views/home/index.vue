<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue';
import { reactive , computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const count = computed(() => store.state.count)

function increment(){
  store.dispatch('increment')
}

</script>
