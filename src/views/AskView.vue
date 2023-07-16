<template>
  <div>
    <div v-for="item in fetchedAsk">
      {{item.title}}
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

<style lang="scss" scoped>

</style>