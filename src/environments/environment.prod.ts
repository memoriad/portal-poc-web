const API_HOSTNAME = 'https://10.220.12.100';

export const environment = {
  production: true,
  ASSET_PATH: API_HOSTNAME + '/assets',
  services: {
    authen: {
      endpoint: {
        loginWSO2Password: API_HOSTNAME + '/oauth2/authorization/wso2-password',
        loginWSO2Certificate: API_HOSTNAME + '/oauth2/authorization/wso2-certificate',
        logoutWSO2: 'https://10.220.12.100:8443/oidc/logout?post_logout_redirect_uri=http://10.220.12.100/logout',
        userme: API_HOSTNAME + '/user/me',
        logout: API_HOSTNAME + "/logout"
      }
    },
  }
};
