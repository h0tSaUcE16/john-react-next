import React from 'react'
import Layout from '../components/Layout'

class TheClock extends React.Component {

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
                <h1 style={{color: '#99CCFF', fontSize: 100}}>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </>
        )
    }
}

export default function Clock() {
    return (
        <Layout>
            <div style={{
                // backgroundColor: '#99CCFF',
                height: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TheClock />
            </div>
        </Layout>
    )
}