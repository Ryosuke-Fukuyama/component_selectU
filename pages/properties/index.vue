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
        <div  v-if="modalFlag">
          <Modal />
        </div>
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
      // property: {},
      id: '',
      selected: '',
      modalFlag: false
    }
  },

  mounted() {
    this.fetchContents()
  },

  // computed: {
  //   params() {
  //     return {
  //       property: {
  //         content: this.content
  //       },
  //     }
  //   }
  // },

  methods: {
    async fetchContents() {
      const res_index = await this.$axios.get('/api/v1/properties').then((res) => {
        this.properties = res.data.properties
      })
    },

    async contentUpdate(id, $event) {
      const url = `/api/v1/properties/${id}`
      const res_data = await this.$axios.get(url)
      const update_params = res_data.data.property
      update_params.content = $event.target.value
      const token = res_data.data.value
      this.$axios.patch(url, update_params, { headers: {
                                                  Authorization: `Bearer ${token}`
                                                  }})
        .then(res => {
          this.fetchContents()
        })
        .catch((err) => {
          this.openModal()
        })
    },

    openModal() {
      this.modalFlag = true
    },
    closeModal() {
      this.modalFlag = false
    }
  }
}
</script>
