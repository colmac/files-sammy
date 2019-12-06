import React from 'react'

export default(props) => {
  return (
    <div>
      <div className="narrow my-3">
      <h2>3. Content API Data</h2>
            <p>The database scripts responsible for entering the data in the database for the reference application can be found in this project, under content-api-ref-apps-repo/db.</p>
            <p>The password stored in the database must be stored encrypted, which you can find instructions on in the <a target="_blank" rel="noopener noreferrer" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API:_NYC.ID_and_Site_Authorization#Service_Account_and_Password">Content API documentation</a></p>
            <p>You can find documentation on how the database is structured in the Content API in the <a target="_blank" rel="noopener noreferrer" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API_Technical_Design#Data_Storage_Design">data storage design documentation</a>.</p>
            <p>For this reference application we inserted the following data into the databse:</p>
      </div>
      <div className="wide my-3">
        <div className="row matrix-gutter">
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>SITE</strong></p>
                <ul className="extensible-list">
                  <li>SITE_SHORTNAME</li>
                  <li>SITE_FULLNAME</li>
                  <li>SITE_BASEURL</li>
                  <li>SITE_OWNER</li>
                  <li>SITE_ACTIVE</li>
                  <li>SITE_STARTDATE</li>
                  <li>SITE_ENDDATE</li>
                  <li>AUTH_REQUIRED</li>
                  <li>SVC_ACCTNAME</li>
                  <li>SVC_ACCTPWD</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>CONTENT_AUTH</strong></p>
                <ul className="extensible-list">
                  <li>SITE_SHORTNAME</li>
                  <li>AUTH_TYPE</li>
                  <li>AUTH_DOMAIN</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>GENERIC_CONTENT</strong></p>
                <ul className="extensible-list">
                  <li>IS_VISIBLE</li>
                  <li>GENERIC_CONTENT_NAME</li>
                  <li>GENERIC_CONTENT_TYPE</li>
                  <li>URL</li>
                  <li>SITE_SHORTNAME</li>
                  <li>CONTENT_TAGS</li>
                  <li>CONTENT_DESCRIPTION</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>GENERIC_CONTENT_GROUP</strong></p>
                <ul className="extensible-list">
                  <li>GENERIC_CONTENT_GROUP_NAME</li>
                  <li>GENERIC_CONTENT_GUID</li>
                  <li>SITE_SHORTNAME</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>NAV_ITEM</strong></p>
                <ul className="extensible-list">
                  <li>NAV_ITEM_GENERIC_CONTENT_GUID</li>
                  <li>NAV_ITEM_PARENT_NAV_ITEM_GUID</li>
                  <li>NAV_ITEM_IS_VISIBLE</li>
                  <li>NAV_ITEM_POSITION</li>
                  <li>NAV_ITEM_OVERRIDE_NAME</li>
                  <li>SITE_SHORTNAME</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>TAG</strong></p>
                <ul className="extensible-list">
                  <li>TAG_GUID</li>
                  <li>SITE_SHORTNAME</li>
                  <li>TAG_VALUE</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body border rounded shadow-sm">
                <p className="card-title border-bottom"><strong>TAG_MAP</strong></p>
                <ul className="extensible-list">
                  <li>TAG_MAP_GUID</li>
                  <li>GENERIC_CONTENT_GUID</li>
                  <li>TAG_GUID</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
