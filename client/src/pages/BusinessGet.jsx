import React, { Component } from 'react'
import api from '../api'

class pipeBus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.pipeBis().then(businesses => {
            this.setState({
                businesses: businesses.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { businesses, isLoading } = this.state
        return <p loading={isLoading}>{businesses}</p>
    }
}

export default pipeBus