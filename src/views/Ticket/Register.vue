<template>
  <h1 class="mt-5">Dit is de Register pagina.</h1>
  <button @click="register" class="btn btn-primary mt-5">registreer je hier </button>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"], //toepassen/injecteren globale variabele uit main op deze pagia + methode vereist
  methods:{
    register(){
      this.GStore.flashMessage = "U bent geregistreerd voor " + this.event.title; //methode om message mee te geven
      setTimeout(()=>{ // vertraging op steken zodat we de message kunnen zien
        this.GStore.flashMessage =  "";
      }, 4000);
      this.$router.push({
        name: "TicketDetails",
        params: {is: this.event.id}
      })  //message moet weergegeven worden bovenaan de pagina dus mess weg pushen naar Ticketdetails (nu nr app.vue)
    }
  }
};
</script>

<style scoped></style>