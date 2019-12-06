import React from 'react'

export default (props) => {
  return(
    <div className="narrow my-3">
      <h2>2. OAuth Request</h2>
      <p>The first step in the OAuth process is to send the user to NYC.ID to login. In the reference appklication, we do it with the following line of code. Note the use of environment variables not included in the github repo.</p>
            {props.formatBodyContent(`window.location.replace(process.env.REACT_APP_NYCID_SERVICE + "?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL)`)}
            <p>For this application, this is complied to:</p>
            <p><code>window.location.replace("https://accounts-nonprd.nyc.gov/account/api/oauth/authorize.htm?response_type=token&client_id=Content-API-RefApp&redirect_uri=https://nyc-dev-web.csc.nycnet/content-api-ref-app")</code></p>
            <p>After the user is promted to sign up or log in, they are redirected to the url specified in your NYC.ID service account via the client id and redirect uri. The redirect will also include a number of paramaters following a hash symbol (#).</p>
            <p>The parameters available in the response include:</p>
            <ul>
              <li>access_token</li>
              <li>token_type</li>
              <li>expires_in</li>
              <li>scope</li>
              <li>nycExtTOUVersion</li>
              <li>mail</li>
              <li>givenName</li>
              <li>nycExtEmailValidationFlag</li>
              <li>GUID</li>
              <li>sn</li>
              <li>userType</li>
            </ul>
            <p>Try it now:</p>
            <button className="btn btn-info" type="button" onClick={props.testOAuth.bind(this)}>Test OAuth</button>
            <div ref={props.oauthRef}></div>
            <br/>
            {props.showOAuthResponse()}
    </div>
  )
}
