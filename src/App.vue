<script setup>
  import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
  import Formulario from './components/Formulario.vue';

  const estado = reactive({
    numberOne: 0,
    numberTwo: 0,
    operador: 'adicao'
  })

  const adicao = () => {
    const {numberOne, numberTwo} = estado;
    return parseInt(numberOne) + parseInt(numberTwo);
  }

  const subtracao = () => {
    const {numberOne, numberTwo} = estado;
    return parseInt(numberOne) - parseInt(numberTwo);
  }

  const multiplicacao = () => {
    const {numberOne, numberTwo} = estado;
    return parseInt(numberOne) * parseInt(numberTwo);
  }

  const divisao = () => {
    const {numberOne, numberTwo} = estado;
    return parseInt(numberOne) / parseInt(numberTwo);
  }

  const soma = () => {
    const { operador } = estado;

    switch(operador) {
      case 'adicao' :
        return adicao();
      case 'subtracao' :
        return subtracao();
      case 'multiplicacao' :
        return multiplicacao();
      default :
        return divisao()
    } 
  }
</script>

<template>
  <div class="container bg-light pt-5 pb-5">

    <Cabecalho />
    <Formulario :trocarOperado="evento => estado.operador = evento.target.value" :numberOne="evento => estado.numberOne = evento.target.value" :numberTwo="evento => estado.numberTwo = evento.target.value" :soma="soma()"/>
  </div>
</template>

<style scoped>

</style>
