import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateBusiness extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/businesses/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteBusiness extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the business ${this.props.id} permanently?`,
            )
        ) {
            api.deleteBusinessById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class pipeBus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: [],
            columns: [],
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
        console.log('TCL: BusinessesGet -> render -> businesses', businesses)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'firm_name',
                filterable: true,
            },
            {
                Header: 'Website',
                accessor: 'website',
                filterable: true,
            },
            {
                Header: 'Type',
                accessor: 'categories',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteBusiness id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateBusiness id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!businesses.length) {
            showTable = false
        }

        
        return (
            <Wrapper>
                {businesses.map((id)=>{
                    return <p>{id.firm_name}</p>
                })}
            </Wrapper>
        )
        /*return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={businesses}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )*/
    }
}

export default pipeBus