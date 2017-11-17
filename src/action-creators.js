import { SET_WIDGETS, ERROR } from './constants'
import fetch from 'isomorphic-fetch'
import history from './history'

const url = process.env.REACT_APP_API

export const createWidget = async (dispatch, getState) => {
  const widget = getState().widget

  const response = await fetch(url + '/widgets', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(widget)
  }).then(res => res.json())

  if (!response.ok) {
    dispatch({ type: ERROR, payload: 'Could not add widget' })
    return
  }
  dispatch(setWidgets)
}

export const setWidgets = async dispatch => {
  const widgets = await fetch(url + '/widgets').then(res => res.json())
  dispatch({ type: SET_WIDGETS, payload: widgets })
  history.push('/')
}
