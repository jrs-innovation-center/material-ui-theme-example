import { merge } from 'ramda'
import {
  SET_WIDGETS,
  SET_WIDGET_NAME,
  SET_WIDGET_YEAR,
  SET_WIDGET_DESCRIPTION,
  ERROR
} from './constants'

export const app = (state = { error: false }, action) => {
  switch (action.type) {
    case ERROR:
      return merge(state, { error: action.payload })
    default:
      return state
  }
}

export const widget = (
  state = { name: '', description: '', year: '' },
  action
) => {
  switch (action.type) {
    case SET_WIDGET_NAME:
      return merge(state, { name: action.payload })
    case SET_WIDGET_DESCRIPTION:
      return merge(state, { description: action.payload })
    case SET_WIDGET_YEAR:
      return merge(state, { year: action.payload })
    default:
      return state
  }
}

export const widgets = (state = [], action) => {
  switch (action.type) {
    case SET_WIDGETS:
      return action.payload
    default:
      return state
  }
}
