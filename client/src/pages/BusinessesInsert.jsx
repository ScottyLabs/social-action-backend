import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class BusinessesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            type: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputWebsite = async event => {
        const website = event.target.value
        this.setState({ website })
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleIncludeBusiness = async () => {
        const { name, website, type } = this.state
        const arrayType = type.split('/')
        const payload = { name, website, type: arrayType }

        await api.insertBusiness(payload).then(res => {
            window.alert(`Business inserted successfully`)
            this.setState({
                name: '',
                website: '',
                type: '',
            })
        })
    }

    render() {
        const { name, website, type } = this.state
        return (
            <Wrapper>
                <Title>Create Business</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Website: </Label>
                <InputText
                    type="text"
                    value={website}
                    onChange={this.handleChangeInputWebsite}
                />

                <Label>Type: </Label>
                <InputText
                    type="text"
                    value={type}
                    onChange={this.handleChangeInputType}
                />

                <Button onClick={this.handleIncludeBusiness}>Add Business</Button>
                <CancelButton href={'/businesses/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BusinessesInsert