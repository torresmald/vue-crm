<script setup>
import { onMounted, ref, computed } from "vue";
import RouterLink from "../components/UI/RouterLink.vue";
import { useRouter } from "vue-router";
import Heading from "../components/UI/Heading.vue";
import ClientesService from "../services/ClientesService";
import Cliente from "../components/Cliente.vue";
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
const router = useRouter();
const table = ["Nombre", "Empresa", "Estado", "Acciones"];
const clientes = ref([]);
onMounted(async () => {
  const { data } = await ClientesService.obtenerClientes();
  clientes.value = data;
});
const existenClientes = computed(() => {
  return clientes.value.length > 0;
});

const cambiarEstado = async (id) => {
  const clienteEditar = clientes.value.find((cliente) => cliente.id === id);
  clienteEditar.estado = !clienteEditar.estado;
  await ClientesService.editarCliente(id, clienteEditar);
};
const eliminarCliente = async (id) => {
  confirm(`Estás seguro que quieres eliminar a ${id}`);
  clientes.value = clientes.value.filter(
    (cliente) => cliente.id !== id
  );
  await ClientesService.eliminarCliente(id);
  router.push("/");
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente"> Agregar Cliente </RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>

    <div
      v-if="existenClientes"
      class="flow-root mx-auto mt-10 p-5 bg-white shadow"
    >
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  v-for="tabla in table"
                  scope="col"
                  class="p-2 text-left text-sm font-extrabold text-gray-600"
                >
                  {{ tabla }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Cliente
                v-for="cliente in clientes"
                :cliente="cliente"
                @cambiar-estado="cambiarEstado"
                @eliminar-cliente="eliminarCliente"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p v-else class="text-center mt-10 font-black text-2xl">No hay Clientes</p>
  </div>
</template>
