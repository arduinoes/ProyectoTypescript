<script setup lang="ts">
import { ref, reactive } from 'vue'
import Contador from "../components/Contador.vue"
import ControlBoton from '../components/ControlBoton.vue'
import { almacenContador } from '../stores/contador'

const contar = almacenContador()

// Inferencia / Deduce el tipo Ref<number>
/* const infoApp = reactive({
  nombre: 'Contador',
  texto: 'Vamos a contar'
})

var saludo = ref('Hola');
var contador = ref(0);

function incrementar() {
  contador.value ++
} */

interface InfoApp {
  nombre: string
  texto: string
}

const infoApp: InfoApp = reactive({
  nombre: 'Contador',
  texto: 'Vamos a contar'
})

var saludo = ref<string>('Hola');
const contador = ref<number | string>(0);

function incrementar() {
  if (typeof contador.value === "number")
  contador.value ++
}
</script>

<template>
  <h1>{{ saludo }}</h1>
  <h1>{{ infoApp.nombre }}</h1>
  <h1>{{ infoApp.texto }}</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">Incrementar</button>
  <br>
  <Contador
    :limite="10"
    :alerta-limite-mensajes='"No puede superar"'
  />
  <br>
  <br>
  <p>{{ contador }}</p>
  <control-boton
    @incrementar="incrementar"
    @reiniciar-contador="contador = 0"
  >
  </control-boton>

</template>


