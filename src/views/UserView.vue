<template>
  <div>
    <UserProfile :info="userInfo">
      <div slot="userName">{{userInfo.id}}</div>
      <span slot="time">{{`Signin: ${userInfo.created}`}}, </span>
      <span slot="karma">{{userInfo.karma}}</span>
    </UserProfile>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {UserProfile},
  computed:{
    ...mapGetters([
      "fetchedUser"
    ]),
    userInfo(){
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$route.params.name
    this.$store.dispatch('FETCH_USER', userName)
    // this.()
  },
  // methods: {
  //   ...mapActions([
  //     "FETCH_USER"
  //   ]),
  //   async (){
  //     const userName = this.$route.params.id
  //     const data = await this.FETCH_USER(userName);
  //     return data
  //   }
  // }
}
</script>

<style scoped>

</style>