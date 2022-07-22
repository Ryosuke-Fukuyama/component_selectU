<template>
  <div class="text-center">
    <button @click="getApi()">GET API</button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      message: ''
    }
  },

  mounted() {
    // console.log(getAuth())
  },

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
