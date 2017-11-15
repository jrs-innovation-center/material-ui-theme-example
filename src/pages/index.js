import React from 'react'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'

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
    <div>
      <Button raised className={classes.button} align="center" color="accent">
        Hello World
      </Button>
    </div>
  )
}
const addStyles = withStyles(styles)
export default withRoot(addStyles(Index))
