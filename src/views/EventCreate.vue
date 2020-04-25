<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}.</p>
    <p>This are {{ catLength }} categories.</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>This are {{ catLength }} categories.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  },
  methods: {}
}
</script>

<style></style>
