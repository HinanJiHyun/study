<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
<!--        <div slot="userName">{{fetchedItem.user}}</div>-->
<!--        <router-link slot="userName" :to="`/user/${fetchedItem.user}`">-->
<!--          {{fetchedItem.user}}-->
<!--        </router-link>-->
        <div slot="userName">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ `Posted ${fetchedItem.user }`}}
          </router-link>
        </div>
        <template>
          <div slot="time">{{fetchedItem.time_ago}}</div>
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">
<!--        {{fetchedItem.content}}-->
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {UserProfile},
  computed:{
    ...mapGetters([
        "fetchedItem"
    ]),
    // item(){
    //   return this.$store.state.item
    // }
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>