import React, { Component } from 'react'

export default class Guide extends Component {
    constructor() {
        super()
        this.state = {
            clientId: '',
            redirectUri: '',
        }
    }

    componentDidMount() {
        this.setState({
            clientId: process.env.REACT_APP_CLIENT_ID,
            redirectUri: process.env.REACT_APP_ROOT_URL
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    testOAuth(event) {
        // send user to nyc.id for login/authentication and redirect
        event.preventDefault()
        window.location.replace(process.env.REACT_APP_NYCID_ENV + "/api/oauth/authorize.htm?response_type=token&client_id=" + this.state.clientId + "&redirect_uri=" + this.state.redirectUri)
    }

    render() {
        return (
            <div role="main" className="container-fluid">
                <div className="bg-secondary banner-with-background NYC-img d-flex flex-column">
                    <div className="container my-auto">

                        <h1 className="display-2 text-white text-center">NYC.ID Service Login</h1>
                        Properties
                    </div>
                </div>
                <div className="narrow p-3 mb-5 bg-white rounded shadow-sm">
                    <form noValidate autoComplete="off" onSubmit={(event) => this.testOAuth(event)}>
                        <div className="form-group">
                            <label htmlFor="clientId">Client Id</label>
                            <input type="text" className=" form-control form-control-lg" id="clientId" value={this.state.clientId} onChange={this.handleChange('clientId')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="redirect">Redirect URI</label>
                            <input type="text" className="form-control form-control-lg" id="redirect" value={this.state.redirectUri} onChange={this.handleChange('redirectUri')} />
                        </div>
                        <button className="btn btn-block btn-secondary" type="button" onClick={(event) => this.testOAuth(event)}>Login 2</button>
                    </form>
                </div>
            </div>
        )
    }
}
