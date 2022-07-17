<template>
  <div>
    <ul>
      <li v-for="property in properties" :key="property.id">
        {{ property.content }}
        <select  @click="update()">
          <option disabled value="">{{ property.content }}</option>
          <option>"content A"</option>
          <option>"content B"</option>
          <option>"content C"</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:() => ({
    properties: [],
    property: {},
    content: ''
  }),

// ページがマウントされたタイミングでfetchContents()を実行
  mounted() {
    this.fetchContents()
  },

  computed: {
    params() {
      return {
        property: {
          content: this.content
        }
      }
    },
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
    },
    update() {
      const url = `/api/v1/properties/${this.$route.params.id}`
      this.$axios.put(url, this.params)
        .then((res) => {
          // 成功時の処理
        })
        .catch((err) => {
          // 失敗時の処理
        })
    }
  }
}
</script>
