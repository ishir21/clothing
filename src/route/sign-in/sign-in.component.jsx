import { SignInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popue</button>
    </div>
  );
};

export default SignIn;
