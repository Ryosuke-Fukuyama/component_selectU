<template>
  <div>
    <ul>
      <li v-for="property in properties" :key="property.id">
        {{ property.content }}
        <select v-model.lazy="selected" @change="contentUpdate(property.id, $event)" :key="property.id">
          <option disabled value="">{{ property.content }}</option>
          <option value="content A">"content A"</option>
          <option value="content B">"content B"</option>
          <option value="content C">"content C"</option>
        </select>
        <div  v-if="modalFlag">
          <Modal @close-click="closeModal"></Modal>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data:() => {
    return {
      properties: [],
      id: '',
      selected: '',
      modalFlag: false
    }
  },

  mounted() {
    this.fetchContents()
  },

  computed: {
    params() {
      return {
        property: {
          content: this.content,
          id: this.id
        }
      }
    }
  },

  methods: {
    async fetchContents() {
      const res_index = await this.$axios.get('/api/v1/properties').then((res) => {
        this.properties = res.data.properties
      })
    },

    contentUpdate(id, $event) {
      const url = `/api/v1/properties/${id}`
      // const res_data = await this.$axios.get(url)
      // const update_params = res_data.data.property
      this.params.property.content = $event.target.value
      this.params.property.id = id
      // const token = res_data.data.value
      // this.$axios.defaults.headers.common = {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      // }
      this.$axios.patch(url, this.params)
        .then(res => {
          this.fetchContents()
        })
        .catch((err) => {
          debugger
          // const error_id = err.config.data.property.id
          // **modalを表示するselectをidで限定するコード**
          this.openModal()
        })
    },

    openModal() {
      this.modalFlag = true
    },
    closeModal(){
      this.modalFlag = false
      this.fetchContents()
    }
  }
}
</script>
