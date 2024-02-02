<template>
  <b-container>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <H1>ESTAS EN INICIO MIAMOR</H1>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          active: true,
        },
        {
          text: "Formulario",
          to: { name: "formulario" },
        },
        {
          text: "Paginador",
          to: { name: "paginador" },
        },
      ],
    };
  },
};
</script>

<style></style>
