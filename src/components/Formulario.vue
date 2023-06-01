<script setup>
  const props = defineProps(['numberOne', 'numberTwo', 'soma', 'trocarOperado'])
</script>

<template>
  <form class="bg-light text-center py-5">
    <div class="row align-items-center d-flex  flex-column">
        <div class="col">
          <input type="number" class="text-end" @keyup="props.numberOne">
        </div>
        <div class="col my-2" @change="props.trocarOperado">
          <select class="text-center form__select">
            <option value="adicao">+</option>
            <option value="subtracao">-</option>
            <option value="multiplicacao">*</option>
            <option value="divisao">/</option>
          </select>
        </div>
        <div class="col col-sm-3">
          <input type="number" class="text-end" @keyup="props.numberTwo">
        </div>
    </div>
    <div v-if="soma" class="row mt-3">
      <h2>{{ props.soma }}</h2>
    </div>
    <div v-else="NaN">
      <h2></h2>
    </div>
  </form>
</template>

<style scoped>
  .form__select {
    margin-left: 9.5rem;
  }
</style>