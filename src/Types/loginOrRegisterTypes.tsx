export enum LOGIN_REGISTER {
  LOGIN = 'login',
  REGISTER = 'register',
}

export interface loginOrRegisterOptions {
  loginOrRegister: LOGIN_REGISTER;
}
