<template>
  <router-link :to="{name: 'TicketDetails', params:{id: singleEvent.id}}">
  <div class="card border-dark mb-3 d-block mx-auto" style="max-width:18rem;" >
    <div class="card-header">{{singleEvent.title}}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">{{singleEvent.date}} - {{singleEvent.time}}</h5>
      <p class="card-text">
        {{singleEvent.description}}
      </p>
      <p class="alert-danger">Locatie:{{singleEvent.location}}</p>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "Ticket",
  props: {
    singleEvent: Object
  },
  /*data(){
    return{
      event:{
        category:'concert',
        title: 'Tomorrow Land',
        description: 'Festival op de Schorre',
        location: 'Boom',
        date: 'August 08 2021',
        time: '09:00'
      }
    }
  }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
