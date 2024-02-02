<template>
  <div>
    <div class="mt-5 ms-3">
      <b-breadcrumb :items="items2"></b-breadcrumb>
    </div>
    <div class="mt-5">
      <b-table
        id="my-table"
        :items="provider"
        :per-page="perPage"
        :current-page="currentPage"
        small
        :fields="fields"
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import Carros from "../services/Carros";

export default {
  data() {
    return {
      items2: [
        {
          text: "Inicio",
          to: { name: "inicio" },
        },
        {
          text: "Formulario",
          to: { name: "formulario" },
        },
        {
          text: "Paginador",
          active: true,
        },
      ],
      perPage: 3,
      currentPage: 1,
      items: [],
      rows: 0,
      fields: [
        { key: "model", label: "Modelo", sortable: true },
        { key: "brand", label: "Marca", sortable: true },
        { key: "year", label: "Año de fabricacion", sortable: true },
        { key: "serie", label: "Numero de serie", sortable: true },
      ],
    };
  },
  mounted() {},
  methods: {
    async provider(ctx) {
      const data = await Carros.getCar(
        +ctx.currentPage - 1,
        +ctx.perPage,
        ctx.sortBy
      );
      this.rows = data.totalElements;
      console.log("soy la data", data);
      return data.content;
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style></style>
