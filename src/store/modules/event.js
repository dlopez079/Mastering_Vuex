import EventService from '../../services/EventService'

export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENT(state, event) {
    // eslint-disable-next-line no-param-reassign
    state.event = event
  },
  SET_EVENTS(state, events) {
    // eslint-disable-next-line no-param-reassign
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    // eslint-disable-next-line no-param-reassign
    state.eventsTotal = eventsTotal
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },

  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit(
          'SET_EVENTS_TOTAL',
          // eslint-disable-next-line radix
          parseInt(response.headers['x-total-count'])
        )
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  fetchEvent({ commit }, id) {
    EventService.getEvent(id)
      .then(response => {
        commit('SET_EVENT', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
