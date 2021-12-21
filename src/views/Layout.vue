<template>
  <div id="nav">
    <router-link :to="{ name: 'TicketDetails', params: { id } }">
      Details
    </router-link>
    <router-link :to="{ name: 'TicketEdit', params: { id } }">
      Edit
    </router-link>
    <router-link :to="{ name: 'TicketRegister', params: { id } }">
      Register
    </router-link>
   <router-view :event="event"></router-view> <!-- event heeft data // :event is verbonden met de props event uit componenten-->
  </div>
</template>

<script>
import TicketService from "../services/TicketService";
export default {
  name: "TicketDetails",
  props: ["id"], // is bruikbare variabele die id opvangt gaat naar this.id voor de overdracht
  data(){
    return{
      event: null,
    };
  },
  created(){
    TicketService.getEvent(this.id).then(response => {
      this.event = response.data; //event heeft alle data van 1 ticket met die id
    }).catch(error => {console.log(error)
    this.$router.push({
      name: '404Resource',
      params: {resource: 'event'}
    })
    });
  }
}
</script>

<style scoped>

</style>