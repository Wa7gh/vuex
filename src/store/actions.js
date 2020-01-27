export default {
  addPet: ({ commit }, Payload) => {
    commit('appendPet', Payload)
  }
}
