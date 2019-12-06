# content-api-ref-apps-repo
contains all reference application code for content api clients
Sammy - make this pretty (give src location, intention of ref apps, outline of where things can be found).

## Installation Guide
1. clone this repo
2. navigate to src/react
3. create a ".env.production" for deployment and a ".env.development" for running locally, files in the src/react/ directory
4. add the following to the .env files:
  * REACT_APP_ROOT_URL=http://[the root of the application, if running locally, your host name ie: yourhostname.doitt.nycnet]
  * REACT_APP_CLIENT_ID=[your client id as it is in your service account. ie. ContentApi-Refapp-Sammy]
  * REACT_APP_NYCID_ENV=https://accounts-nonprd.nyc.gov/account
  * REACT_APP_SAMPLE_SITE=[the path for the data you want to get from the Content Api by default. ie. v1/content/sample-site/sample-site]
  * HOST=[the root of the application, only necessary in .env.development, your host name ie: yourhostname.doitt.nycnet]
5. run `npm install`
6. run `npm start` to start the application
7. When deploying to a server, you will need to configure all routes requested by the client to resolve to index.html, while allowing access to certain necessary files. For example:
```
AliasMatch ^/content-api-ref-app/static/(.*)$ /data/agencies/apps/content-api-ref-app/static/$1
AliasMatch ^/content-api-ref-app/service-worker.js$ /data/agencies/apps/content-api-ref-app/service-worker.js
AliasMatch ^/content-api-ref-app/manifest.json$ /data/agencies/apps/content-api-ref-app/manifest.json
AliasMatch ^/content-api-ref-app/(.*)$ /data/agencies/apps/content-api-ref-app/index.html
```
