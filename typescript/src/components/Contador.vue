<script setup lang="ts">
import ControlBoton from '../components/ControlBoton.vue'

import { ref } from "vue";

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
  <button @click="incrementar(2)">Incrementar Props</button>
  <br>
  <br>
  <control-boton
    @incrementar="incrementar"
    @reiniciar-contador="contador = 0"
  >
  </control-boton>
</template>
