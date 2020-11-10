<template>
  <div class="login">
      <v-app class="log_in">
          <v-content>
              <v-container fill-height>
                  <v-layout align-center justify-center>
                      <v-flex xs12 sm8 md8>
                          <v-form ref="form" v-model="valid" lazy-validation>
                              <v-card class="elevation-12 pa-10" height="400">
                                  <v-img class="center" max-width="200px" src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"></v-img>
                                  <v-text-field v-model="name"  :counter="10" :rules="nameRules" label="USERNAME" placeholder="Enter your user name" required ></v-text-field>
                                  <v-text-field v-model="password" type="password" :rules="passwordRules" labelcounter="10" label="PASSWORD" placeholder="Enter your password" required ></v-text-field>
                                  <v-btn to="/" outline block color="Primary">login</v-btn>
                              </v-card>
                          </v-form>
                      </v-flex>
                  </v-layout>
              </v-container>
          </v-content>

      </v-app>
  </div>
</template>

<script>
//   import { validationMixin } from 'vuelidate'
//   import { required, maxLength, email } from 'vuelidate/lib/validators'

//   export default {
//     mixins: [validationMixin],

//     validations: {
//       name: { required, maxLength: maxLength(10) },
//       email: { required, email },
//       select: { required },
//       checkbox: {
//         checked (val) {
//           return val
//         },
//       },
//     },

//     data: () => ({
//       name: '',
//       email: '',
//       select: null,
//       items: [
//         'Item 1',
//         'Item 2',
//         'Item 3',
//         'Item 4',
//       ],
//       checkbox: false,
//     }),

//     computed: {
//       checkboxErrors () {
//         const errors = []
//         if (!this.$v.checkbox.$dirty) return errors
//         !this.$v.checkbox.checked && errors.push('You must agree to continue!')
//         return errors
//       },
//       selectErrors () {
//         const errors = []
//         if (!this.$v.select.$dirty) return errors
//         !this.$v.select.required && errors.push('Item is required')
//         return errors
//       },
//       nameErrors () {
//         const errors = []
//         if (!this.$v.name.$dirty) return errors
//         !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
//         !this.$v.name.required && errors.push('Name is required.')
//         return errors
//       },
//       emailErrors () {
//         const errors = []
//         if (!this.$v.email.$dirty) return errors
//         !this.$v.email.email && errors.push('Must be valid e-mail')
//         !this.$v.email.required && errors.push('E-mail is required')
//         return errors
//       },
//     },

//     methods: {
//       submit () {
//         this.$v.$touch()
//       },
//       clear () {
//         this.$v.$reset()
//         this.name = ''
//         this.email = ''
//         this.select = null
//         this.checkbox = false
//       },
//     },
//   }
</script>
<style scoped>

.log_in{
    background-image: url('../assets/pic/cmuhealth_BG01.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}
.v-text-field{
    font-size:16px;
}
.v-text-field label{
    font-weight: 550;
}

</style>>
