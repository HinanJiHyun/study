<template>
  <div>
    <div v-for="item in fetchedAsk" class="list">
<!--      <a :href="item.url">{{item.title}}</a>-->
      <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
      <small>{{item.time_ago}} | {{item.user}}</small>
      <hr>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  computed: {
    ...mapGetters([
        'fetchedAsk'
    ]),
    //#1
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
    //#2
    // ...mapState({
    //   ask: state => state.ask
    // })
    //#3
    // ask(){
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }

}
</script>

<style scoped>
list{
  display: flex;
  justify-content: space-between;
}
small{
  display: block;
  color: #a1a1a1;
}
</style>