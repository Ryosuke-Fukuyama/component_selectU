<template>
  <div>
    <ul>
      <li v-for="property in properties" :key="property.id">
        {{ property.content }}
        <select v-model="content" @input="contentUpdate(property.id, $event)">
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
    id: '',
    content: '',
    property: {},
    properties: [],
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
    }
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
    contentUpdate(id, $event) {
      // debugger;
      this.params.property.content = $event.target.value
      const url = `/api/v1/properties/${id}`
      this.$axios.patch(url, this.params)
        .then((res) => {
          // 成功時の処理s
          fetchContents()
          this.$bvToast.toast(res.data, {
            title: '成功',
            variant: 'success'
          })
        })
        .catch((err) => {
          // 失敗時の処理
          const message = err.response.data
          this.$bvToast.toast(message, {
            title: '失敗',
            variant: 'danger'
          })
        })
    }
  }
}
</script>
