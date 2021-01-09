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

class BusinessesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            website: '',
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

    handleUpdateBusiness = async () => {
        const { id, name, website, type } = this.state
        const arrayType = type.split('/')
        const payload = { name, website, type: arrayType }

        await api.updateBusinessById(id, payload).then(res => {
            window.alert(`Business updated successfully`)
            this.setState({
                name: '',
                website: '',
                type: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const business = await api.getBusinessById(id)

        this.setState({
            name: business.data.data.name,
            website: business.data.data.website,
            type: business.data.data.type.join('/'),
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

                <Button onClick={this.handleUpdateBusiness}>Update Business</Button>
                <CancelButton href={'/businesses/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BusinessesUpdate