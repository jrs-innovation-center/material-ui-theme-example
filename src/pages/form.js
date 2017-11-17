import React from 'react'
import { connect } from 'react-redux'
import withRoot from '../components/withRoot'
import {
  SET_WIDGET_NAME,
  SET_WIDGET_YEAR,
  SET_WIDGET_DESCRIPTION
} from '../constants'

import { addWidget } from '../action-creators'
import {
  AppBar,
  List,
  ListItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Toolbar,
  Button
} from 'material-ui'

const WidgetForm = props => {
  return (
    <form
      style={{ margin: 0, padding: 0 }}
      noValidate
      autoComplete="off"
      onSubmit={props.createWidget}
    >
      <AppBar position="static">
        <Toolbar className="flex">
          <Typography className="flex-auto" type="title" color="inherit">
            Widget Form
          </Typography>
          <Button color="inherit" type="submit">
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            value={props.name}
            onChange={props.setName}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            margin="normal"
            value={props.description}
            onChange={props.setDescription}
          />
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>Year</InputLabel>
            <Select native value={props.year} onChange={props.setYear}>
              <option value="" />
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </form>
  )
}

const connector = connect(
  state => ({
    name: state.widget.name,
    description: state.widget.description,
    year: state.widget.year
  }),
  dispatch => {
    return {
      setName: e =>
        dispatch({ type: SET_WIDGET_NAME, payload: e.target.value }),
      setDescription: e =>
        dispatch({ type: SET_WIDGET_DESCRIPTION, payload: e.target.value }),
      setYear: e =>
        dispatch({ type: SET_WIDGET_YEAR, payload: e.target.value }),
      createWidget: e => {
        e.preventDefault()

        dispatch(addWidget)
      }
    }
  }
)

export default withRoot(connector(WidgetForm))
