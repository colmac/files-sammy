import React from 'react';
import AdvancedRequest from './AdvancedRequest.js'

export default (props) => {


  return(
    <div className="card">
      <div className="card-body">
        <form className="border rounded shadow-sm" onSubmit={props.submit}>
        <div className="container-fluid my-2">
          <div className="form-group">
            <label htmlFor="endpoint">Endpoint</label>
            <input type="text" className="form-control form-control-lg" id="endpoint" disabled={props.readOnly} value={props.endpoint} onChange={props.handleChange("endpoint")}/>
          </div>
          <div className="form-group">
            <button  type="button" className="btn" onClick={props.handleToggleModal} disabled={props.advancedDisabled}>Advanced</button>
          </div>
          <div className="form-group">
            <button  type="button" className="btn btn-lg btn-secondary" onClick={props.submit}>Demo Content Request</button>
          </div>
        </div>
      </form>
        <AdvancedRequest
          title={"Advanced Call Options"}
          handleToggleModal={props.handleToggleModal}
          open={props.open}
          body={
            <div>
              <div className="form-group">
                <label htmlFor="advancedEndpoint">Endpoint</label>
                <input type="text" className="form-control form-control-lg" id="advancedEndpoint" value={props.endpoint} onChange={props.handleChange("endpoint")}/>
              </div>
              <div className="form-group">
                <label htmlFor="token">Token</label>
                <input type="text" className="form-control form-control-lg" id="token" value={props.token} onChange={props.handleChange("token")}/>
              </div>
              <div className="form-group">
                <label htmlFor="clientId">Client ID</label>
                <input type="text" className="form-control form-control-lg" id="clientId" value={props.clientId} onChange={props.handleChange("clientId")}/>
              </div>
              <div className="form-group" role="group" aria-labelledby="select-a-borough">
                <ul className="extensible-list">
                  <li>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="headers" name="headers-checkbox" required="" checked={props.headers} onChange={props.handleCheck("headers")}/>
                      <label className="custom-control-label" htmlFor="headers">Include Headers</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          }
          CTA={"Submit"}
          handleCTA={props.submit}
        />


      {!props.status ? "" :
        <div className="border rounded shadow-sm">
          <div className="container-fluid">
            <br/>
            <p className="fs-md">Status: {props.status}</p>
            <br/>
            <p className="fs-md">Body: </p>
            {props.body}
          </div>
        </div>
      }

    </div>
    </div>
  )
}
