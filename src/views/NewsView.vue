<template>
  <div>
    <div v-for="item in this.$store.state.news">
      {{item.title}}
      <hr>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style lang="scss" scoped>

</style>