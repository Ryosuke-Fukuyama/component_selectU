export const state = () => ({
  // 要識別コード
  selected_status: status
})

export const mutations = {
  statusChange: function(state, payload) {
    state.selected_status = payload
  }
}

export const action = {
  statusChangeAction(context) {
    context.commit('statusChange')
  }
}
