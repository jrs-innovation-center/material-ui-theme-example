import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import withRoot from '../components/withRoot'
import { map, compose } from 'ramda'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem
} from 'material-ui'

const li = widget => {
  return (
    <ListItem key={widget.name}>
      <Typography type="display1">{widget.name}</Typography>
    </ListItem>
  )
}

const Index = props => {
  return (
    <div>
      <AppBar>
        <Toolbar className="flex">
          <Typography type="title" color="inherit" className="flex-auto">
            Widgets
          </Typography>
          <Link
            to="/new"
            style={{ textDecoration: 'none', color: 'transparent' }}
          >
            <Button color="accent">new</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <List>{map(li, props.widgets)}</List>
    </div>
  )
}
const connector = connect(state => ({ widgets: state.widgets }))

// export default withRoot(addStyles(connector(Index)))

const enhance = compose(withRoot, connector)
export default enhance(Index)
