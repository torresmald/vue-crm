<script setup>
import { computed } from "vue";
import RouterLink from "./UI/RouterLink.vue";
import ClientesService from "../services/ClientesService";
const props = defineProps({
  cliente: {
    type: Object,
    required: true,
  },
});
defineEmits(['cambiar-estado', 'eliminar-cliente'])
const { cliente } = props;
const nombreCompleto = computed(() => {
  return cliente.nombre + " " + cliente.apellido;
});
const estado = computed(() => {
  return cliente.estado
});

</script>
<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ nombreCompleto }}</p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-600">{{ cliente.cargo }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm" >
      <button class="inline-flex rounded-full px-2 text-xs font-semibold leading-5" :class="{ 'text-green-800 bg-green-100': estado, 'text-red-800 bg-red-100': !estado }" @click="$emit('cambiar-estado', cliente.id)">
        {{ estado ? 'Activo' : 'Inactivo' }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink :to="'/editar-cliente/' + cliente.id" class=" hover:bg-indigo-900 mr-5 bg-indigo-600 text-white rounded-md">Editar</RouterLink>
      <button class="bg-red-600 hover:bg-red-900 text-white rounded-md p-2 font-bold" @click="$emit('eliminar-cliente', cliente.id)">Eliminar</button>
    </td>
  </tr>
</template>
