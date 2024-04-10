// authService.js

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
const auth = getAuth();

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === "auth/email-already-in-use") {
      // Tratar o erro de email já em uso aqui
      throw new Error(
        "O email já está em uso. Por favor, escolha um email diferente ou faça login."
      );
    } else {
      // Tratar outros erros
      console.error(errorCode, errorMessage);
      throw error; // Rejeita a promessa para que o componente possa lidar com o erro
    }
  }
};

// {
//   "uid": "9AFbWg1x2MRqxNJpTCjRNs4hSyi2",
//   "email": "f4biosantana@gmail.com",
//   "emailVerified": false,
//   "isAnonymous": false,
//   "providerData": [
//       {
//           "providerId": "password",
//           "uid": "f4biosantana@gmail.com",
//           "displayName": null,
//           "email": "f4biosantana@gmail.com",
//           "phoneNumber": null,
//           "photoURL": null
//       }
//   ],
//   "stsTokenManager": {
//       "refreshToken": "AMf-vBwhQzhmUA2y8pLUcaB62kg4ub9L1NKDPAyeA6xg3KoPEdpV54DEZESQ0RlT2sgfZuIRt5Ql36xZHia083nkJ0JmVMeJiwoAZ13viB-w7u2gZ53Rhi9BBQvj2XAEG7b8F2RZpc0b1lxyndLac6z-Ijr5dHkpc4uZVj2AaA0whcSXOsmvLfOniZ4II8rFgVuvLKJ-LeGeTvqiMfkuNC44s8uAZCb1YA",
//       "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNzhkMGViNzdhMjdlNGUxMGMzMTFmZTcxZDgwM2I5MmY3NjYwZGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGl6emF6LXBpenpheiIsImF1ZCI6InBpenphei1waXp6YXoiLCJhdXRoX3RpbWUiOjE3MTI3NjE1NDEsInVzZXJfaWQiOiI5QUZiV2cxeDJNUnF4TkpwVENqUk5zNGhTeWkyIiwic3ViIjoiOUFGYldnMXgyTVJxeE5KcFRDalJOczRoU3lpMiIsImlhdCI6MTcxMjc2MTU0MSwiZXhwIjoxNzEyNzY1MTQxLCJlbWFpbCI6ImY0Ymlvc2FudGFuYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZjRiaW9zYW50YW5hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WEIYyEdQLb6K9zCMLt7lVRpaDx4SONVOTcBxtU1k5MnnE-i9KTKU9vubizMAUbjlDVko72x0hkCFW20cXN1Ri7cf-QFYOBwyN8dHdtc_mM84tu5l_i-nsvfux3ucVStdOHaLAGV_bnhs4uCLyda4w9pHYt5I_kt-m8CmEmgqCjgNTBnlG5YbsRzLkGQitsINpPMBz65U4RF3KgMH8idQCjxjef1qn6UfKSq84l653jbRpNy_Kb1zQE5Du-I3DHVu1i0iShtr8jABKSUsST6E-R44I1COsz24L5HPvuMxEA13UzOMbdv_FUnm7J98skXa7Kro9pbFF1kirnLPZ-u0JA",
//       "expirationTime": 1712765142622
//   },
//   "createdAt": "1712761541701",
//   "lastLoginAt": "1712761541701",
//   "apiKey": "AIzaSyAiLnNKJR8EyO3SAL_hty3Ejt63BeltGng",
//   "appName": "[DEFAULT]"
// }

export const signInWithPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    throw error; // Rejeita a promessa para que o componente possa lidar com o erro
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(token, user);
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(errorCode, errorMessage, email, credential);
      throw error; // Rejeita a promessa para que o componente possa lidar com o erro
    });
};

