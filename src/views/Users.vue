<template>
  <div class="users">
    <h1>User page</h1>
    <auth />
    <br />
    <v-card class="">
      
    </v-card>

  </div>
</template>

<script>
import auth from '@/components/authorities.vue';
export default {
  components: {
    auth,
  },
  data (){
    return{

    };
  },

}
</script>

<style scoped>

</style>