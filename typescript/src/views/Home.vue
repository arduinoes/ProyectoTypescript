<script setup lang="ts">
import { ref, reactive } from "vue";
import Props from "../components/Props.vue";
import Emit from "../components/Emit.vue";

const saludo = ref('Hola');
const contador = ref(0);

const sal = ref<string>('Hola');
const con = ref<number | string>(0);

const persona = reactive({
  nombre: 'Carlos',
  edad: 18
})

interface Person {
  name: string
  age: number
}

const infoApp: Person = reactive({
  name: 'Charles',
  age: 18
})

function incrementar() {
  if (typeof contador.value === "number")
  contador.value ++
}
</script>

<template>
  <h1>{{ saludo }}</h1>
  <h1>{{ persona.nombre }}</h1>
  <p>{{ contador }}</p>
  <button 
    @click="incrementar">Incrementar
  </button>
  <br />
  <Props 
    :limite="10" 
    :alerta-limite-mensajes="'No puede superar'" 
  />
  <br />
  <br />
  <p>{{ contador }}</p>
  <Emit 
    @incrementar="incrementar" 
    @reiniciar-contador="contador = 0"
  />
</template>
