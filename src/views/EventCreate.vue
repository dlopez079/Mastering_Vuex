<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}.</p>
    <p>This are {{ catLength }} categories.</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>This are {{ catLength }} categories.</p>

    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  },
  components: {
    Datepicker
  },
  data() {
    const times = []
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 24; i++) {
      // eslint-disable-next-line prefer-template
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories
    }
  },
  methods: {
    createFreshEvent() {
      // eslint-disable-next-line prefer-destructuring
      const user = this.$store.state.user
      // eslint-disable-next-line no-unused-vars
      const id = Math.floor(Math.random() * 10000000)
      return {
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    },
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event.')
        })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
