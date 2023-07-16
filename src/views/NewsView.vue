<template>
  <div>
    <div v-for="item in fetchedNews" class="list">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} | {{item.user}}</small>
      <hr>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
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