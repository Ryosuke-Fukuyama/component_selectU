<template>
  <section>
    <!-- <status_change></status_change> -->
    <button @click="getApi()">GET API</button>
    {{ message }}
  </section>
</template>

<script>
  export default {
    data: () => ({
      message: ''
    }),
    methods: {
      getApi() {
          const url = "/api/v1/hello"
          this.$axios.get(url)
            .then((res) => {
              this.message = res.data
            })
            .catch((error) => {
              console.log(error)
            })
        }
    }
  }
</script>
