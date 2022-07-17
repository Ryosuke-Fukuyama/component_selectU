<template>
  <div>
    <ul>
      <li v-for="property in properties" :key="property.id">
        {{ property.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:() => ({
    properties: []
  }),

// ページがマウントされたタイミングでfetchContents()を実行
  mounted() {
    this.fetchContents()
  },

  methods: {
    fetchContents() {
      const url = "/api/v1/properties"
      this.$axios.get(url)
        .then((res) => {
        //   // リクエスト成功時の処理
        //   console.log(res)
        // })
        // .catch(() => {
        //   // リクエスト失敗時の処理
        // })
        this.properties = res.data.properties
        })
    }
  }
}
</script>
