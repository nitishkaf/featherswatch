import { getApp, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import { rootUrl } from "@/utils/routes";
import {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSENGER_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase)
function createFirebaseApp(config: any) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}
const app = createFirebaseApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const STATE_CHANGED = "state_changed";

export async function firebaseSignOut() {
  await signOut(auth);
}

export async function signInWithGoogle() {
  const credential = signInWithPopup(auth, new GoogleAuthProvider());
  return loginHandler(credential);
}

export async function sendPasswordlessEmail(email: string, url?: string) {
  const actionCodeSettings = {
    url: url ?? `${rootUrl}/dashboard`,
    handleCodeInApp: true,
  };

  let res: any, serverError: string;
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("signInEmail", email);
    res = `Sign in link sent to ${email}`;
  } catch (error) {
    //@ts-ignore
    serverError = error.message;
  }
  //@ts-ignore
  return { res, serverError };
}

export async function passwordlessSignIn() {
  if (!isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("signInEmail");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    //@ts-ignore
    const credential = signInWithEmailLink(auth, email, window.location.href);
    window.localStorage.removeItem("signInEmail");
    return credential;
  } else {
    return { res: null, serverError: "Invalid sign in link" };
  }
}

async function loginHandler(promise: Promise<UserCredential>) {
  let res: any, serverError: string;
  try {
    res = await promise;
  } catch (error) {
    //@ts-ignore
    serverError = error.message;
    console.error(error);
  }
  //@ts-ignore
  return { res, serverError };
}

export async function getUserWithUsername(username: any) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username),
    limit(1)
  );
  const userDoc = (await getDocs(q)).docs[0];
  return userDoc;
}

export function postToJSON(doc: any) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
