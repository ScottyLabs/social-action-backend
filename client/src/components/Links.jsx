import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Social Action Project
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/businesses/list" className="nav-link">
                                List Businesses
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/businesses/create" className="nav-link">
                                Create Business
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/businesses/get" className="nav-link">
                                Get Business
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links