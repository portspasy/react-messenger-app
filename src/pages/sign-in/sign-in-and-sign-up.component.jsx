import React from "react";

import "./sign-in-and-sign-up.style.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import { ReactComponent as ImageSignIn } from "../../assets/image01.svg";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <ImageSignIn />
    <SignIn />
  </div>
);

export default SignInSignUpPage;
