<script setup>
    defineProps({
        clientes: {
            type: Object,
            required: true
        }
    });
</script>
<template>
  <tr>
    <th
      scope="col"
      class="p-2 text-left text-sm font-extrabold text-gray-600"
    >
      {{ clientes.nombre }}
    </th>
  </tr>
</template>

