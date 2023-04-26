<template>
  <div class="home">
    <h1>dashboard</h1>
    <!-- <button @click="increment">Count is: {{ count }}</button> -->
  </div>
</template>

<script lang="ts" setup>
import { reactive , computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const count = computed(() => store.state.app.count)

const increment = () => {
  store.dispatch('app/increment')
}

</script>
