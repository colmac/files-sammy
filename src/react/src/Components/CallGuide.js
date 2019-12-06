import React, {Component} from 'react'

import ContentCallAndResponse from './ContentCallAndResponse'
import {getContent} from '../api'

export default class Guide extends Component {

  constructor(props){
    super()
    this.state = {
      successStatus: '',
      successBody: {},
      successEndpoint: process.env.REACT_APP_SAMPLE_SITE,
      badStatus: '',
      badBody: {},
      badEndpoint: process.env.REACT_APP_SAMPLE_SITE,
      unauthorizedStatus: '',
      unauthorizedBody: {},
      unauthorizedEndpoint: process.env.REACT_APP_SAMPLE_SITE,
    }
  }

  callContentAPI(event, endpoint, token, status, body, headers){
    event.preventDefault();
    if (!this.props.query.length) {
      return this.props.testOAuth(event)
    }
    getContent(token, this.props.clientId, endpoint, headers)
    .then(
      res => {
          this.setState({
          [status]: res.status,
          [body]: res.data
        })
        }
    )
  }

  render(){
    return(
    <div className="narrow my-3">
            <h2>4. Making Content API Calls</h2>
            <p>Calls to get restricted data from the Content API require the access token returned by OAUTH to be included in the authorization header of the REST call and the Service Account ID to be included as well. If you are not logged in, or you do not have the NYC.ID parameters in the url, you will be redireced to login.</p>
                  <h3>Successful Call</h3>
                  <ContentCallAndResponse
                    submit={(event) => this.callContentAPI(event, this.state.successEndpoint, this.props.token, "successStatus", "successBody", true)}
                    endpoint={this.state.successEndpoint}
                    handleChange={()=>{}}
                    handleCheck={()=>{}}
                    headers={true}
                    status={this.state.successStatus}
                    body={this.props.formatBodyContent(this.state.successBody)}
                    open={false}
                    readOnly={true}
                    advancedDisabled={true}
                  />
                    <h3>Bad Token Call</h3>
                  <ContentCallAndResponse
                    submit={(event) => this.callContentAPI(event, this.state.badEndpoint, "bad token", "badStatus", "badBody", true)}
                    endpoint={this.state.badEndpoint}
                    handleChange={()=>{}}
                    handleCheck={()=>{}}
                    headers={true}
                    status={this.state.badStatus}
                    body={this.props.formatBodyContent(this.state.badBody)}
                    open={false}
                    readOnly={true}
                    advancedDisabled={true}
                  />
                    <h3>Unauthorized Call</h3>
                  <ContentCallAndResponse
                    submit={(event) => this.callContentAPI(event, this.state.unauthorizedEndpoint, this.props.token, "unauthorizedStatus", "unauthorizedBody", false)}
                    endpoint={this.state.unauthorizedEndpoint}
                    handleChange={()=>{}}
                    handleCheck={()=>{}}
                    headers={false}
                    status={this.state.unauthorizedStatus}
                    body={this.props.formatBodyContent(this.state.unauthorizedBody)}
                    open={false}
                    readOnly={true}
                    advancedDisabled={true}
                  />
    </div>
  )}
}
