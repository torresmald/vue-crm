<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import axios from "axios";
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
const router = useRouter();
const handleSubmit = async (data) => {
  const cliente = await axios.post("http://localhost:3000/clientes", data);
  setTimeout(() => {
    alert("Creado con Éxito");
    router.push("/");
  }, 1000);
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="/"> Volver </RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-3">
        <FormKit
          type="form"
          submit-label="Agregar"
          incomplete-message="Revisa todos los Campos"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre*"
            validation="required"
            :validation-messages="{ required: 'El nombre es Obligatorio' }"
            placeholder="Nombre Cliente"
          />
          <FormKit
            type="text"
            name="apellido"
            label="Apellido*"
            validation="required"
            :validation-messages="{ required: 'El apellido es Obligatorio' }"
            placeholder="Apellido Cliente"
          />
          <FormKit
            type="email"
            name="email"
            label="Email*"
            validation="required|email"
            :validation-messages="{
              required: 'El email es Obligatorio',
              email: 'El email no tiene un formato Válido',
            }"
            placeholder="Email Cliente"
          />
          <FormKit
            type="text"
            name="movil"
            label="Móvil*"
            validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}/"
            :validation-messages="{
              required: 'El Móvil es Obligatorio',
              matches: 'El móvil no tiene un formato Válido',
            }"
            placeholder="Teléfono: XXX-XXX-XXX"
          />
          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa Cliente"
          />
          <FormKit
            type="text"
            name="cargo"
            label="Cargo"
            placeholder="Cargo Cliente"
          />
        </FormKit>
        <p class="text-xs text-gray-400">Los Campos con * son Obligatorios</p>
      </div>
    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
.formkit-label {
  text-transform: uppercase;
  font-size: 1.2rem;
  color: rgb(100 116 139);
}
.formkit-message {
  font-size: 1rem;
  text-transform: uppercase;
}
</style>
