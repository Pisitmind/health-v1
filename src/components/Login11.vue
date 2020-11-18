<template>
  <div class="log_in" id="Login">
    <div class="card_login">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card class="elevation-10 pa-10" height="370px" width="450px">
            <v-img
              class="center"
              max-width="200px"
              src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
            ></v-img>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="USERNAME"
              color="#AD8DBB"
              placeholder="Enter your user name"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :counter="10"
              type="password"
              :rules="passwordRules"
              labelcounter="10"
              label="PASSWORD"
              color="#AD8DBB"
              placeholder="Enter your password"
              required
            ></v-text-field>
            <v-btn
              to="/"
              outline
              block
              class="white--text"
              color="purple lighten-2"
              >login</v-btn
            >
          </v-card>
        </v-form>
    </div>
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
.log_test{

  height: 100%;
  overflow: hidden !important;
  align-items: center;
  justify-content:center;
}
.login {
  height: 100%;
  align-items: center;
}
html::-webkit-scrollbar {
  display: none;
}
html{
  background-color:gray;
}
.log_in {
  background-image: url("../assets/pic/1710-GR-01-01.jpg");
  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-attachment: fixed;
  

  /* background-position: center; */
}
.card_login {
  display: flex;
  justify-content: center;
  top: 50%;
  /* align-items: center; */
}
.log_in::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

/* #inspire {
  height: 100vh;
  overflow: hidden;
} */
.v-text-field {
  font-size: 16px;
}
.v-text-field label {
  font-weight: 550;
}
</style>
