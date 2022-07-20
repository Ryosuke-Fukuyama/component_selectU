export const state = () => ({
  // 要識別コード
  content: '',
  id: '',
  property: {},
  // properties: []
})

export const mutations = {
  statusChange: function(state) {

    //     .then((res) => {
    //       fetchContents()
    //     })
    //     .catch((err) => {
    //     })
    }
}

export const actions = {
  statusChangeAction(context) {
    // debugger
    // const url = `/api/v1/properties/${id}`
    // this.$axios.patch(url, this.params)
    context.commit('statusChange')
  }
}
