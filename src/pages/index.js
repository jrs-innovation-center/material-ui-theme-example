import React from 'react'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'
import { Link } from 'react-router-dom'
import { Button } from 'material-ui'

const styles = theme => {
  return {
    button: {
      margin: 200,
      padding: 100,
      fontSize: '3em'
    }
  }
}

const Index = props => {
  const { classes } = props
  return (
    <div className="flex items-center justify-center" style={{ height: 900 }}>
      <Link to="/new" style={{ textDecoration: 'none' }}>
        <Button raised color="accent">
          New Widget
        </Button>
      </Link>
    </div>
  )
}
const addStyles = withStyles(styles)
export default withRoot(addStyles(Index))
