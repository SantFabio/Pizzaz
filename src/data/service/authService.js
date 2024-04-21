// authService.js

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth, db } from "./firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
// Certifique-se de importar a instância do Firebase Authentication
// authService.js

//Sair da conta
export const userLogOut = () => {
  return signOut(auth)
};

//checar se existe um usuário logado
export const checkUserAuthentication = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se houver um usuário conectado, resolva a promessa com o usuário
        resolve(user);
      } else {
        // Se não houver usuário conectado, resolva a promessa com null
        resolve(null);
      }
    });

    // Retorne a função de cancelamento para limpar quando necessário
    return unsubscribe;
  });
};

//Registra um usuário com email e senha
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
    addUser(user);
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
      throw error;
    }
  }
};

//autenticar com google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      addUser(user)
      return { user, token };
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
      throw error;
    });
};

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
    throw error;
  }
};

const addUser = async (user) => {
  try {
    if (user) {
      const userQuery = query(collection(db, "usuarios"), where("uid", "==", user.uid));
      const userQuerySnapshot = await getDocs(userQuery);
      if (userQuerySnapshot.size == 0) {
        const docRef = await setDoc(doc(collection(db, "usuarios"), user.uid), {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL ? user.photoURL : null,
          address: user.address ? user.address : null,
          creationTime: user.metadata.creationTime,
          provider: user.providerData[0].providerId ? user.providerData[0].providerId : null,
        });

        console.log("Document written with ID: ", docRef.id);
      } else {
        console.log("O documento de usuário já existe no Firestore.");
      }

    } else {
      console.error("Error: User object is missing required properties");
    }
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}




