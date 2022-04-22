export interface loginOrRegisterOptions {
  loginOrRegister: 'login' | 'register';
}

export type AuthModalPropTypes = {
  open: boolean;
  handleClose: () => void;
  handleLoginOrRegisterTransfer: () => void;
  handleFrogetPasswordTransfer: () => void;
};
