import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth, facebookProvider } from './firebase';

export async function loginWithFacebook() {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    console.log(user);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    console.log(accessToken);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}
