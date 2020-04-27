<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4" >Negocie e Consulte sua Ações</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <v-icon class="white--text mr-3" >info</v-icon>
      <span class="headline white--text font-weight-light" >
        Você pode Salvar & Carregar os Dados</span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 mt-3" color="success darken-1">
      <v-icon class="white--text mr-3" >info</v-icon>
      <span class="headline white--text font-weight-light" >
        O valor das ações é atualizado diariamente! </span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1" ><strong>Seu Saldo</strong> {{ funds | currency }} </p>
    <v-divider class="my-4"></v-divider>
    <p class="display-1" ><strong>O valor do seu porfólio é:</strong> {{ portfolioValue | currency }} </p>
    <v-divider class="my-4"></v-divider>
    <p class="display-1" ><strong>O valor do seu patrimônio é:</strong> {{ funds + portfolioValue | currency }} </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    portfolioValue() {
      return this.$store.getters.portfolioValue
    }
  }
};
</script>

<style>
</style>