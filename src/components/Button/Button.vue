<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ label: string, initialValue?: number }>()

const count = ref(props.initialValue ||  0)
</script>

<template>
  <button type="button" @click="$emit('click', ++count)">{{ label }}: {{ count }}</button>
</template>
