<script setup lang="ts">
import { reactive } from 'vue';
import Teste from './components/Teste.vue'

const user = reactive({
  name: 'asd'
})
</script>

<template>
  <Teste :value="user" />
  <h1>App: {{ user.name }}</h1>
</template>