import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth, googleProvider } from './firebase';

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    if (token && user) {
      console.log(user, token);
    } else {
      console.log(user);
    }
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    console.log(errorCode, errorMessage, email);
  }
}
