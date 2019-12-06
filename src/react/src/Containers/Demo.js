import React, {Component} from 'react'

import ContentCallAndResponse from '../Components/ContentCallAndResponse'
import {getContent} from '../api'

export default class Guide extends Component {
  constructor(){
    super()
    this.state = {
      open: false,
      headers: true,
      token:'',
      clientId: '',
      status: '',
      body: {},
      endpoint: process.env.REACT_APP_SAMPLE_SITE,

    }
  }

  componentDidMount(){
    // on component mount, check for query parameters and if present use them to set token and client id in state. Then use those to call the Content API.
    if (!!this.props.query) {
      this.setState({token: this.parseQuery(this.props.query).access_token, clientId: this.parseQuery(this.props.query).scope})
      getContent(this.parseQuery(this.props.query).access_token, this.parseQuery(this.props.query).scope, this.state.endpoint, this.state.headers)
      .then(res => this.setState({
          status: res.status,
          body: res.data
        }))
    }
  }

  parseQuery(query){
    // parse query in url into javascript object
    return query.substr(1).split("&").map( p => p.split("=")).reduce( (result, item) => {
       result[item[0]] = decodeURIComponent(item[1])
      return result
      } ,{})
  }

  testOAuth(event){
    // send user to nyc.id for login/authentication and redirect
    event.preventDefault()
    var [id, url] = !!this.props.query ? [this.state.clientId, process.env.REACT_APP_ROOT_URL] : [process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_ROOT_URL]
    window.location.replace(process.env.REACT_APP_NYCID_ENV + "/api/oauth/authorize.htm?response_type=token&client_id=" + id + "&redirect_uri=" + url)
  }

  callContentAPI(event){
    event.preventDefault();
    if (!this.props.query.length) {
      return this.testOAuth(event)
    }
    getContent(this.state.token, this.state.clientId, this.state.endpoint, this.state.headers)
    .then(
      res => {
          this.setState({
          open: false,
          status: res.status,
          body: res.data
        })
        }
    )
  }

  formatBodyContent = () => {
    // format json for display
    return <pre style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>{JSON.stringify(this.state.body, null, 2).replace(/"/g, "")}</pre>
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleCheck = name => event => {
    this.setState({ [name]: this.state[name] ? false : true });
  };

  handleToggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render(){
    return(
      <div role="main">
        <div className="bg-secondary banner-with-background NYC-img d-flex flex-column">
          <div className="container my-auto">
            <div className="narrow my-4">
              <h1 className="display-2 text-white">CAPI Demo</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid overflow-hidden my-3">
          <ContentCallAndResponse
            submit={this.callContentAPI.bind(this)}
            headers={this.state.headers}
            endpoint={this.state.endpoint}
            token={this.state.token}
            clientId={this.state.clientId}
            handleChange={this.handleChange}
            handleCheck={this.handleCheck.bind(this)}
            status={this.state.status}
            body={this.formatBodyContent()}
            handleToggleModal={this.handleToggleModal.bind(this)}
            open={this.state.open}
          />
      </div>
    </div>
    )
  }
}
