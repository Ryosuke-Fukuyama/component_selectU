<template>
  <div>
    <ul>
      <li v-for="property in properties" :key="property.id">
        {{ property.content }}
        <select v-model.lazy="selected" @change="contentUpdate(property.id, $event)">
          <option disabled value="">{{ property.content }}</option>
          <option value="content A">"content A"</option>
          <option value="content B">"content B"</option>
          <option value="content C">"content C"</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
// import $axios from "@nuxtjs/axios"

export default {
  data:() => {
    return {
      properties: [],
      id: '',
      selected: '',
    }
  },

  mounted() {
    this.fetchContents()
  },

  computed: {
    params() {
      return {
        property: {
          content: this.content
        },
        // authenticity_token: ''
      }
    }
  },

  methods: {
    async fetchContents() {
      const res_index = await this.$axios.get('/api/v1/properties').then((res) => {
        this.properties = res.data.properties
      })
    },

    async contentUpdate(id, $event) {
      const url = `/api/v1/properties/${id}`
      const res_data = await this.$axios.get(url)
      debugger;
      const token = res_data.value
      this.params.property = res_data.property
      this.params.property.content = $event.target.value
      const res_new_data = await this.$axios.patch(url, this.params, { headers: {
                                                  Authorization: `Bearer ${token}`
                                                  }})
        .fetchContents()
        .catch((err) => {
          const message = err.response.data
        })
    }
  }
}
</script>
