<template>

  <div id="app">

    <message> Hello there. </message>
    <message> Hello there. </message>
    <message> Hello there. </message>


    <counter></counter>

  </div>

</template>


<script>

  import Message from './components/Message.vue';
  import Counter from './components/Counter.vue';

  export default {

    name: 'app',

    components: { Counter, Message },
  
    data () {
  
      return {

      }

    }
  }


</script>



<style>

</style>
