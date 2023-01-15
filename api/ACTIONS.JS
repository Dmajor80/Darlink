export const USER = {
  UPGRADE_PLAN: () => '/plan/upgrade',
}

export const USER_ENDPOINTS = {
  REGISTER: () => '/auth/register',
  FORGET_PASSWORD: () => '/user/forgot-password',
  LOGIN: () => '/auth/login',
  LOGOUT: () => '/auth/logout',
  RESET_LOGIN: () => '/auth/reset',
  RECOVERY_MAIL: () => '/user/recovery-mail',
  CREATE_ADMIN: () => '/auth/create',
}
// modules.exports = {
//   LOGIN_ENDPOINTS,
// }

export const USER_TYPE = {
  ADMIN: () => 'admin',
  USER:() => 'user'
}

export const USER_PLAN = {
  ADD_PLAN: () => '/plan',
  UPDATE_PLAN: () => '/plan',
  GET_PLAN: () => '/plan',
  DELETE_PLAN: () => '/plan',
  GET_USER_PLAN: () => '/plan/user-plan',
}