<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

withDefaults(
  defineProps<{
    modelValue: string | undefined | null;
    label: string;
    type: "text" | "number" | "date";
  }>(),
  {
    label: "Input",
    type: "text",
  }
);

const inputHandler = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="label"
    @input="inputHandler"
    v-bind="$attrs"
  />
</template>
