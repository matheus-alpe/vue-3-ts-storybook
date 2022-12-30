<script setup lang="ts">
import Input from "./Input/Input.vue";

defineProps<{
  value: { name: string };
  label?: string;
  type?: string;
}>();
</script>

<template>
  <Input
    v-model="value.name"
  />

  <h2>Teste: {{ value.name }}</h2>
</template>
