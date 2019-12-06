import React from 'react';

export default (props) => {

  var login = () => {
    return props.location.hash ?
    <a type="button" className="btn btn-info" href={process.env.REACT_APP_NYCID_ENV + "/idpLogout.htm"} onClick={()=>window.location.replace(process.env.REACT_APP_NYCID_ENV + "/idpLogout.htm")}>Logout</a>
    :
    <a type="button" className="btn btn-info" href={process.env.REACT_APP_NYCID_ENV + "/api/oauth/authorize.htm?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL} onClick={()=>window.location.replace(process.env.REACT_APP_NYCID_ENV + "/api/oauth/authorize.htm?response_type=token&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=" + process.env.REACT_APP_ROOT_URL)}>Login</a>
  }

  return(
    <header id="global-header" role="banner">
        <div id="nyc-top-header">
            <div className="container-fluid wide">
                <div className="row py-1 align-items-center justify-content-between">
                    <div className="col-auto">
                        <p className="d-none d-md-flex">
                            <a href="https://www1.nyc.gov/">nyc.gov</a>
                            <span className="mx-1" aria-hidden="true">|</span>
                            DoITT App Dev
                        </p>
                    </div>
                    <div className="col-auto">
                        <ul className="extensible-list horizontal">
                            <li className="my-n1">
                                {login()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrap-header">
            <div className="container-fluid wide">
                <div className="row align-items-center">
                    <div className="col-lg py-2">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <button type="button" className="align-self-center btn btn-secondary btn-lg active" onClick={event=>props.history.push({pathname: "/", hash: props.location.hash})} title="Home">
                                CAPI Reference Application
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-auto border-top border-lg-0">
                        <div className="d-lg-flex align-items-center">
                            <div className="collapse d-lg-block mx-n2 mx-lg-2" id="nav-primary">
                                <nav className="nav" role="navigation">
                                    <div className="nav-item">
                                        <button type="button" className="btn btn-lg nav-link" id="nav-item-01" aria-haspopup="true" title="Nav Item" onClick={event=>{
                                          return props.history.push({pathname: "/guide", hash: props.location.hash})}}>
                                            CAPI Guide
                                        </button>
                                    </div>
                                    <div className="nav-item">
                                        <a className="btn btn-lg nav-link" target="_blank" rel="noopener noreferrer" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API" id="nav-item-02" aria-haspopup="true" title="Nav Item" role="button">
                                            CAPI Wiki
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="btn btn-lg nav-link" target="_blank" rel="noopener noreferrer" href="https://appdevwiki.nycnet/appdev/index.php/DoITT_Content_API:_NYC.ID_and_Site_Authorization" id="nav-item-03"aria-haspopup="true" title="Nav Item" role="button">
                                            NYC.ID & CAPI
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
       )
}
