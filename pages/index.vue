<template>
  <main>
    <h1>Hello World</h1>
    <!-- <b-alert v-if="$auth.$state.redirect" show>
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </b-alert> -->

    <template v-if="$store.state.auth.loggedIn">
      <p>TOKEN: [{{this.$store.state.auth.accessToken}}]</p>
      <button class="ml-3" variant="danger" @click="logout"> Logout </button>
      <button @click="octokit">OCTOKIT</button>
    </template>
    <template>
      <a :href="'https://github.com/login/oauth/authorize?client_id=' + clientId ">LOGIN LINK</a>
      <br/>
      <button @click="login">LOGIN</button>
    </template>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      clientId: process.env.clientId
    }
  },
  methods: {
    login() {

      this.$router.push(`https://github.com/login/oauth/authorize?client_id=${process.env.client_id}`)

      // const { login } = await this.$axios.$get('https://api.github.com/user')

      // this.$auth.loginWith('github').then(() => {
      //   process.env.TOKEN = this.$auth.strategy.token.get()
      // })
    },
    async octokit() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
      const { login } = await this.$axios.$get(proxy + 'https://api.github.com/user')
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
