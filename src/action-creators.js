import fetch from 'isomorphic-fetch'
import history from './history'

import { SET_WIDGETS, ERROR } from './constants'

const url = process.env.REACT_APP_API

export const addWidget = async (dispatch, getState) => {
  try {
    const widget = getState().widget

    const response = await fetch(url + '/widgets', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(widget)
    })
    if (!response.ok) {
      dispatch({ type: ERROR, payload: 'Could not add Widget' })
    }
    dispatch(setWidgets)
  } catch (err) {
    dispatch({ type: ERROR, payload: 'Could not add Widget' })
  }
}

export const setWidgets = async dispatch => {
  try {
    const widgets = await fetch(url + '/widgets').then(res => res.json())
    dispatch({ type: SET_WIDGETS, payload: widgets })
    history.push('/')
  } catch (err) {
    dispatch({ type: ERROR, payload: 'Could not find widgets' })
  }
}
