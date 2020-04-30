/* eslint-disable no-shadow */
export const namespaced = true

export const state = {
  notifications: []
}
let nextId = 1

export const mutations = {
  // eslint-disable-next-line no-shadow
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      // eslint-disable-next-line no-plusplus
      id: nextId++
    })
  },
  DELETE(state, notificationToRemove) {
    // eslint-disable-next-line no-param-reassign
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}
export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
