<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Ticket v-for="event in events" :key="event.id" :singleEvent="event"></Ticket>
    <router-link
        class="btn btn-primary"
        :to="{name: 'Home', query:{page:page -1}}"
        v-if="page != 1"
        rel="prev"
    >
      Vorige</router-link>
    <router-link class="btn btn-primary"
                 :to="{name: 'Home', query:{page:page +1}}"
                  v-if="hasNextPage"
                 rel="next">Volgende</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from "@/components/Ticket.vue";
//import axios from "axios";
import TicketService from "../services/TicketService";
//import {watchEffect} from "vue"; //BUILTIN component van vue zelf (child comp: methode dus {} nodig) checkt of er veranderingen zijn in de url
import Nprogress from "nprogress";

export default {
  name: "Home",
  props: ['page'],
  components: {
    Ticket,
  },
  data(){
    return{
      events: null,
      totalEvents: 0,
    }
  },
  //created zorgt ervoor dat je ticketservice kan aanspreken, gaat naar link, krijgt antw en dat steek je in this.events
    //watchEffect(()=>{ // gebruikt als inpakpapier e luistert naar de wijziging van de link
      //this.events = null //opnieuw legen van de events

  beforeRouterEnter(routeTo, routeFrom, next) {
    Nprogress.start();  //
    TicketService.getEvents(2, parseInt(routeTo.query.page) || 1)
        .then((response) => {
          next((comp) => {
            comp.events = response.data;
            comp.totalEvents = response.headers["x-total-count"];
          });
        })
        .catch((error) => {
          console.log(error);
        }).finally(()=>{
          Nprogress.done();
    });
  },

  computed:{
    hasNextPage(){
      var Totalpages = Math.ceil(this.totalEvents/2) //ceil=afronden nr boven?
      return this.page < Totalpages
    }
  }
};
</script>
