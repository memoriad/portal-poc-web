// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const GFMIS_OAUTH_API = "http://localhost:8095"
//const GFMIS_API = "http://localhost:8096"

 const GFMIS_OAUTH_API = "https://auth.nerves-cloud.com:9443"

const RESPONSE_TYPE = "code";
const CLIENT_ID = "1nHDVzIQkXEOdmhiAJR0tLEn1RQa";

const SCOPE = "openid profile email address phone";

const API_HOSTNAME = 'https://localhost:8443';
const REDIRECT_URL = API_HOSTNAME + '/oauth2/callback';

export const environment = {
  production: false,
  ASSET_PATH: './assets',
  services:{
    authen:{
      endpoint:{
        loginWSO2: API_HOSTNAME + '/oauth2/authorization/wso2',
        login: GFMIS_OAUTH_API + "/oauth2/authorize?response_type=" + RESPONSE_TYPE + "&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URL + "&scope=" + SCOPE,
        accessToken: GFMIS_OAUTH_API + "/oauth2/token",
        loginClient: GFMIS_OAUTH_API + "/login",
        accessTokenByCode: GFMIS_OAUTH_API + "/wso2/oauth2/token",
        userme: API_HOSTNAME + '/user/me',
        logout: API_HOSTNAME + "/logout"
      }
    },
    profile:{
      endpoint:{
        profile: GFMIS_OAUTH_API + "/oauth2/userinfo"
      }
    }
 }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

