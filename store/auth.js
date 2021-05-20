export const state = () => ({
  accessToken: '',
  refreshToken: '',
  loggedIn: false,
})

export const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    this.$axios.setHeader('Authorization', 'Bearer ' + accessToken);
    state.loggedIn = true;
  },
  setRefreshToken(state, refreshToken) {
    state.accessToken = refreshToken;
  },
}
