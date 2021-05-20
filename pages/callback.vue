<template>
  <p> ...logging in...  </p>
</template>

<script>
export default {
  async mounted() {
    console.log(this.$route.query.code);
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const res = await this.$axios.$post(proxy + 'https://github.com/login/oauth/access_token', {
      code: this.$route.query.code,
      client_id: process.env.clientId,
      client_secret: process.env.clientSecret,
    }, {
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    });
    this.$store.commit('auth/setAccessToken', res.access_token);
    console.log('TOKEN: ', this.$store.state.auth.accessToken);

    process.env.TOKEN = this.$store.state.auth.accessToken;

    console.log(res);
    this.$router.push('/');
    return res;
  }
}
</script>
