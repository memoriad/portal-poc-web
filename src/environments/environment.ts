const API_HOSTNAME = 'https://localhost:8443';

export const environment = {
  production: false,
  ASSET_PATH: './assets',
  services:{
    authen:{
      endpoint:{
        loginWSO2Password: API_HOSTNAME + '/oauth2/authorization/wso2-password',
        loginWSO2Certificate: API_HOSTNAME + '/oauth2/authorization/wso2-certificate',
        logoutWSO2: 'https://10.220.12.100:8443/oidc/logout?post_logout_redirect_uri=http://localhost:4200/logout',
        userme: API_HOSTNAME + '/user/me',
        logout: API_HOSTNAME + "/logout"
      }
    },
 }
};
