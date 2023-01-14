export const LOGIN_ENDPOINTS = {
  LOGIN: () => '/auth/login',
}

export const USER_ENDPOINTS = {
  REGISTER: () => '/auth/register',
  FORGET_PASSWORD: () => '/user/forgot-password',
  LOGIN: () => '/auth/login',
}
// modules.exports = {
//   LOGIN_ENDPOINTS,
// }

export const USER_TYPE = {
  ADMIN: () => 'admin',
  USER:() => 'user'
}