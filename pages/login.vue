<template>
  <div>
    <h1>Login-Form</h1>
    <p>{{ message }}</p>
      email:<input type="text-field" v-model="form.email" label="email">
      <br>
      password:<input type="text-field" v-model="form.password" label="password">
      <br>
      <button @click="login">submit</button>
      <br>
      <router-link to="/singup">To Signup-Form</router-link>
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default {
  data:() => {
    return {
      form: {
        email: '',
        password: ''
      },
      message: '',
    };
  },

  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          this.setErrorMessage(err.code)
        })
    },
    // loginWithGoogle() {
    //   const auth = getAuth()
    //   const provider = new GoogleAuthProvider()
    //   signInWithPopup(auth, this.email, this.password)
    //     .then((err) => {
    //       // const user = userCredential.user
    //       // this.$router.push('/')
    //     })
    //     .catch((err) => {
    //       this.message = err.message
    //     })
    // },

    setErrorMessage(error_code) {
      switch (error_code) {
        default:
          this.message = 'ログインに失敗しました。'
          break
      }
    }
  },
}
</script>
