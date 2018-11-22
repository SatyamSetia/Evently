const state = {
  rsvp: {},
}

const actions = {
  updateRsvp({commit}, eventRsvp) {
    commit('setRsvp',eventRsvp)
  }
}

const mutations = {
  setRsvp(state, eventRsvp) {
    state.rsvp[eventRsvp.id] = eventRsvp.status
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
