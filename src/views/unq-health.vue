<template>
  <div class="unqHealth">
    <h1>unqHealth page</h1>
    <v-divider></v-divider>
    <br />
    <v-card>
      <v-card-title>
        <div class="head_dialog">
          <div>
            <span class="headline">dialog card here</span>
          </div>
          <div>
            <v-btn color="green darken-1" icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        exercise and Weight loss can help limit some of the health risks
        associated with tachycardia by reducing the negative effects of high
        blood pressure and sleep apnea.
      </v-card-text>
      <v-card-content>
      </v-card-content>
    </v-card>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.head_dialog{
  display: flex;
  
}
</style>
