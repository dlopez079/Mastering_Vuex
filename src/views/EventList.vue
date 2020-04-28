/* eslint-disable prettier/prettier */
<template>
  <div>
    <h1>Events Listings</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '../components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      // eslint-disable-next-line radix
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events'])
  }
}
</script>
