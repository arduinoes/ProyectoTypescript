<script setup lang="ts">

const emit = defineEmits<{
  // nombre del evento, Payload dato
  (event: "incrementar", num: number): void;
  (event: "reiniciarContador"): void;
}>();
</script>

<template>
  <button @click="emit('incrementar', 4)">Incrementar Emits</button>
  <button @click="emit('reiniciarContador')">Reiniciar contador</button>
</template>
