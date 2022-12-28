import { useState, useContext } from "react";

import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";

import "./sign-in.styles.scss";
import Button from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    await SignInWithGooglePopup();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found! Please sign up");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.error("sign in error", error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* <button onClick={logGoogleUser}>Sign in with Google Popue</button>
      <button onClick={SignInWithGoogleRidirect}>Sign in with Google Redirect</button> */}
      <form>
        <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
        <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
