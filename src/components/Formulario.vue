<template>
    <div class="container">
      <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
      </b-container>
  
      <form @submit.prevent="submitForm" class="form">
        <label for="modeloAuto">Modelo del auto:</label>
        <input v-model="modelo" placeholder="Chevi" type="text" id="modeloAuto"   onkeypress="return ' áéíóúabcdefghijklmnñopqrstuvwxyz'.includes(event.key)"
 required />
        <label for="marcaAuto">marca del auto:</label>
        <input v-model="marca" placeholder="Chevrole" type="text"   onkeypress="return ' áéíóúabcdefghijklmnñopqrstuvwxyz'.includes(event.key)"
 id="marcaAuto" required />

        <label for="fechaFabricacion">Año de fabricacion:</label>
        <input type="number" min="1800" max="2024" placeholder="2000" step="1" v-model="fechaFabricacion" required/>

        <label for="numeroSerie">Número de serie:</label>
        <input v-model="numeroSerie" type="alfanumeric"  required />

        <button @click="postCar">Enviar</button>
      </form>
      <div v-if="formularioInvalido" class="mensaje-error">
        <p>completa bien los campos</p>
      </div>
  
  
  
  </div>
  
  </template>
  
  <script>
  import Carros from '../services/Carros';
  export default {
      data() {
      return {
        items: [
            {
              text: 'Inicio',
              to: {name:'inicio'}
            },
            {
              text: 'Formulario',
              active:true
            },
            {
              text: 'Paginador',
              to: {name: 'paginador'}
            }
          ],
        modelo: '',
        marca: '',
        fechaFabricacion: '',
        numeroSerie: '',
        formularioInvalido: false
      };
    },
    methods: {
    async postCar() {
      const data = await Carros.postCar(this.modelo, this.marca, this.fechaFabricacion, this.numeroSerie
      );
      console.log("soy la data", data);
    },
      submitForm() {
        if (this.validarFormulario()) {
          console.log('todo good');
        } else {
          this.formularioInvalido = true;
        }
      },
      validarFormulario() {
        return true;
      },
     
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  .direccion {
    display: grid;
    gap: 10px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .mensaje-error {
    margin-top: 20px;
    color: #FF0000;
  }
  </style>
  