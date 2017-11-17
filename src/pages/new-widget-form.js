import React from 'react'
import withRoot from '../components/withRoot'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import { Link } from 'react-router-dom'
import { createWidget } from '../action-creators'
import {
  SET_WIDGET_NAME,
  SET_WIDGET_YEAR,
  SET_WIDGET_DESCRIPTION,
  ERROR
} from '../constants'

import {
  AppBar,
  List,
  ListItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
  Snackbar
} from 'material-ui'

const NewWidgetForm = ({
  name,
  description,
  year,
  setName,
  setDescription,
  setYear,
  createWidget,
  error,
  clearError
}) => {
  return (
    <form noValidate autoComplete="off" onSubmit={createWidget}>
      <AppBar position="static">
        <Toolbar className="flex">
          <Link to="/" style={{ textDecoration: 'none', color: 'transparent' }}>
            <IconButton color="inherit">
              <Icon color="accent" style={{ fontSize: 36 }}>
                keyboard_arrow_left
              </Icon>
            </IconButton>
          </Link>
          <Typography color="inherit" className="flex-auto" type="title">
            New Widget Form
          </Typography>
          <Button type="submit" color="inherit">
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <TextField label="Name" value={name} onChange={setName} />
        </ListItem>
        <ListItem>
          <TextField
            required
            label="Description"
            multiline
            value={description}
            onChange={setDescription}
          />
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>Year</InputLabel>
            <Select native value={year} onChange={setYear}>
              <option value="" />
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={error}
        message={<span id="message-id">{error}</span>}
        autoHideDuration={3000}
        onRequestClose={clearError}
      />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    name: state.widget.name,
    description: state.widget.description,
    year: state.widget.year,
    error: state.app.error
  }
}

const mapActionsToProps = dispatch => {
  return {
    setName: e => dispatch({ type: SET_WIDGET_NAME, payload: e.target.value }),
    setDescription: e =>
      dispatch({ type: SET_WIDGET_DESCRIPTION, payload: e.target.value }),
    setYear: e => dispatch({ type: SET_WIDGET_YEAR, payload: e.target.value }),
    createWidget: e => {
      e.preventDefault()
      dispatch(createWidget)
    },
    clearError: () => dispatch({ type: ERROR, payload: false })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

const enhance = compose(withRoot, connector)

export default enhance(NewWidgetForm)
