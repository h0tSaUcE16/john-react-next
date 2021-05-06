import React, { useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core'

class TheTimer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    getNewDate() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.getNewDate(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <>
                <h1 style={{color: 'white', fontSize: 200}}>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </>
        )
    }
}

class TheTimerAmount extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <TextField id="outlined-basic" label="Timer Amount (S)" variant="outlined" />
        <Button 
          variant="outlined"
          onClick={() => this.props.setTimerAmount()}
        >
          Set Timer Amount
        </Button>
      </form>
    )
  }
}

export default function Timer() {
    const [currentComponent, setCurrentComponent] = useState(<TheTimer/>)

    return (
        <div style={{
            backgroundColor: 'aquamarine',
            height: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        {currentComponent}
        </div>
    )
}