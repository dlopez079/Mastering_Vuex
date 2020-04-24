<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event was created by {{ userName }}.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    userName() {
      return this.$store.state.user.namek
    }
  })
}
</script>

<style></style>
