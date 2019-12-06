import React from 'react'

export default (props) => {
  return(
    <div className="narrow my-3">
      <h2>1. NYC.ID Service Account</h2>
      <p>
        In order to utilize the authentication and authorization services of NYC.ID, you will first need to provision a service account for each of your environments. This reference application uses its own NYC.ID Service Account. Follow the instructions included in the  <a target="_blank" rel="noopener noreferrer" href="https://www1.nyc.gov/assets/nyc4d/html/services-nycid/environments.shtml#console">NYC.ID service account documentation</a> and review the <a target="_blank" rel="noopener noreferrer" href="https://www1.nyc.gov/assets/nyc4d/html/services-nycid/nycid.shtml">NYC.ID general documentation</a>.
      </p>
      <p>
        You will need three items before you start:
      </p>
      <ol>
        <li>The root url of your application.
          <ul>
            <li>This must be secured with HTTPS.</li>
          </ul>
        </li>
        <li>A client id for your website or web application.
          <ul>
            <li>This will be included in your redirect to NYC.ID.</li>
            <li>Will also be stored in the Content API database.</li>
            <li>Can be reused with multiple redirect urls.</li>
          </ul>
        </li>
        <li>A URl to redirect the user after authentication.
          <ul>
            <li>The user's information will be included after a "#" symbol as parameters.</li>
            <li>Must be unique in your service account.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}
