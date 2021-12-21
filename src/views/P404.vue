<template>
  <h1> {{ resource }} die u zoekt is niet langer aanwezig </h1>
  <router-link :to="{name: 'Home'}" class="btn btn-success">Home</router-link>
</template>

<script>
export default {
  props: {
    resource:{
      type: String,
      required: true,
      default: "De pagina"
    }
  },

}
</script>