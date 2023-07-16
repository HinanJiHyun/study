<template>
  <div>
    <p>UserName: {{fetchedUser.id}}</p>
    <p>Karma: {{fetchedUser.karma}}</p>
    <p>Created: {{fetchedUser.created}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters([
      "fetchedUser"
    ])
  },
  created() {
    const userName = this.$route.params.name
    this.$store.dispatch('FETCH_USER', userName)
    // this.fetchUserInfo()
  },
  // methods: {
  //   ...mapActions([
  //     "FETCH_USER"
  //   ]),
  //   async fetchUserInfo(){
  //     const userName = this.$route.params.id
  //     const data = await this.FETCH_USER(userName);
  //     return data
  //   }
  // }
}
</script>

<style scoped>

</style>