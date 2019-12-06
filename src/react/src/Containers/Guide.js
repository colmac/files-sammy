import React, {Component} from 'react'

import NycIdGuide from '../Components/NycIdGuide'
import OauthGuide from '../Components/OauthGuide'
import DataGuide from '../Components/DataGuide'
import CallGuide from '../Components/CallGuide'

export default class Guide extends Component {

  constructor(){
    super()
    this.oauthRef = React.createRef()
    this.state = {
      token:'',
      clientId: '',
    }
  }

  componentDidMount(){
    // on component mount check for query parameters. If present, move the window to the oauth data and save the token and client id to state.
    if (!!this.props.query) {
      this.setState({token: this.parseQuery(this.props.query).access_token, clientId: process.env.REACT_APP_CLIENT_ID})
    }
  }

  parseQuery(query){
    // parse query in url into javascript object
    var parsed = {}
    var decodedQuery = query.substr(1)
    decodedQuery.split("&").forEach( p => {
      var item = p.split("=");
      parsed[item[0]] = decodeURIComponent(item[1]);
    });
    return parsed
  }

  testOAuth(event){
    // send user to nyc.id for login/authentication and redirect
    window.location.replace(process.env.REACT_APP_NYCID_ENV + "/api/oauth/authorize.htm?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL + "/guide")
  }

  formatBodyContent = (body) => {
    // format json for display
    return <pre style={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>{JSON.stringify(body, null, 2).replace(/"/g, "")}</pre>
  }

  showOAuthResponse(){
    // if the query parameters are present, show them the oauth section
    if (!!this.props.query) {
      var object = this.parseQuery(this.props.query)
      var keys = Object.keys(object)
      return (
        <div>
        <p>Parameters in response:</p>{this.formatBodyContent(this.props.query)}
        <p>Parameters broken out into a table:</p>
        <table>
        <tbody>
          <tr>
             <th>Parameter</th>
             <th>Value</th>
          </tr>
          {keys.map( (k, i) => (<tr key={i}><td>{k}</td><td>{object[k]}</td></tr>))}
          </tbody>
      </table>
      </div>
    )
    }
  }

  render(){
    return(
      <div role="main">
        <div className="bg-secondary banner-with-background NYC-img d-flex flex-column mb-4">
          <div className="container my-auto">
            <div className="narrow my-4">
              <h1 className="display-2 text-white">CAPI Guide</h1>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="narrow my-3">
            <p>This Content API refernce application is a working example of how to access restricted data (site content) from the DoITT Content API application. This page is a guide that will walk you through all the steps demonstrated on the home page. You will need to create a NYC.ID Service Account, send the user to the NYC.ID login page, and have NYC.ID redirect them back to your application with parameters in the URl that you can use for authenticatino and authorization. Authentication and authorization performed by the Content API are outside the scope of this demo and guide.</p>
          </div>
            <NycIdGuide/>
            <OauthGuide
              query={this.props.query}
              formatBodyContent={this.formatBodyContent}
              testOAuth={this.testOAuth}
              oauthRef={this.oauthRef}
              showOAuthResponse={this.showOAuthResponse.bind(this)}
            />
            <DataGuide/>
            <CallGuide
            query={this.props.query}
            formatBodyContent={this.formatBodyContent}
            token={this.state.token}
            clientId={this.state.clientId}
            testOAuth={this.testOAuth}
            />
          </div>
        </div>
    )
  }
}
