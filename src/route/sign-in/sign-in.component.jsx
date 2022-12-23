import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  auth,
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInWithGoogleRidirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  // const logGoogleRiderectUser = async () => {
  //   const { user } = await SignInWithGoogleRidirect();
  //   console.log({ user });
  // };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popue</button>
      <button onClick={SignInWithGoogleRidirect}>Sign in with Google Redirect</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
