const state = () => ({
  page: 'Home'
})

const mutations = {
  setActivePage (state, page) {
    state.page = page
  }
}

export {
  state, mutations
}
