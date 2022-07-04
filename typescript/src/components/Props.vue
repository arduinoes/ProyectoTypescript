<script setup lang="ts">
import { ref } from "vue";
import Emit from "../components/Emit.vue";

const props = withDefaults(
  defineProps<{
    limite: number;
    alertaLimiteMensajes?: string;
  }>(),
  {
    alertaLimiteMensajes: "No puede ser mas alto",
  }
);

const contador = ref<number | string>(0);

function incrementar(num: number) {
  if (typeof contador.value === "number") {
    if (contador.value >= props.limite) {
      alert(props.alertaLimiteMensajes);
    } else {
      contador.value += num;
    }
  }
}
</script>

<template>
  <p>{{ contador }}</p>
  <button 
    @click="incrementar(2)">Incrementar Props
  </button>
  <br />
  <br />
  <Emit 
    @incrementar="incrementar" 
    @reiniciar-contador="contador = 0"
  />
</template>
