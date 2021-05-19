<template>
  <main>
    <h1>Hello World</h1>
    <b-alert v-if="$auth.$state.redirect" show>
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert>

    <template v-if="$auth.$state.loggedIn">
      <p>TOKEN: [{{this.$auth.strategy.token.get()}}]</p>
      <button class="ml-3" variant="danger" @click="logout"> Logout </button>
      <button @click="octokit">OCTOKIT</button>
    </template>
    <template v-else>
      <button @click="login">LOGIN</button>
    </template>
  </main>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith('github').then(() => {
        process.env.TOKEN = this.$auth.strategy.token.get()
      })
    },
    async octokit() {
      const { login } = await this.$axios.$get('https://api.github.com/user')
      console.log('LOGIN: ', login, ' TOKEN: ', this.$auth.strategy.token.get())
      return login
    },
    logout() {
      this.$auth.logout();
      this.$nuxt.refresh();
    }
  }
}
</script>