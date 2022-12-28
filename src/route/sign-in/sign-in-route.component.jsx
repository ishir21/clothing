import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import {
  auth,
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInWithGoogleRidirect,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-route.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInRoute = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

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
    <div className="display">
      {/* <h2>I already have an account</h2>
      <span>Sign in with your email and password</span> */}
      {/* <button onClick={logGoogleUser}>Sign in with Google Popue</button>
      <button onClick={SignInWithGoogleRidirect}>Sign in with Google Redirect</button> */}
      {/* <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />

      <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} /> */}

      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInRoute;
