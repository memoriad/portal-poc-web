const GFMIS_OAUTH_API = "https://auth.nerves-cloud.com:9443"

const RESPONSE_TYPE = "code";
const CLIENT_ID = "JZ1GxfPfG8MwKZtCOyld31YO0bEa";

const SCOPE = "openid profile email address phone";

const API_HOSTNAME = 'https://localhost:8443';
const REDIRECT_URL = API_HOSTNAME + '/oauth2/callback';

export const environment = {
  production: true,
  ASSET_PATH: API_HOSTNAME + '/assets',
  services: {
    authen: {
      endpoint: {
        loginWSO2Password: API_HOSTNAME + '/oauth2/authorization/wso2-password',
        loginWSO2Certificate: API_HOSTNAME + '/oauth2/authorization/wso2-certificate',
        login: GFMIS_OAUTH_API + "/oauth2/authorize?response_type=" + RESPONSE_TYPE + "&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URL + "&scope=" + SCOPE,
        accessToken: GFMIS_OAUTH_API + "/oauth2/token",
        loginClient: GFMIS_OAUTH_API + "/login",
        accessTokenByCode: GFMIS_OAUTH_API + "/wso2/oauth2/token",
        userme: API_HOSTNAME + '/user/me',
        logout: API_HOSTNAME + "/logout"
      }
    },
    profile: {
      endpoint: {
        profile: GFMIS_OAUTH_API + "/oauth2/userinfo"
      }
    }
  }
};


