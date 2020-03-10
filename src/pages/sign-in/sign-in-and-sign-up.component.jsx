import React from "react";

// Ant Design Style
import "antd/dist/antd.css";
import "./sign-in-and-sign-up.style.scss";

// Ant Design Components
import { Row, Col } from "antd";

import SignIn from "../../components/sign-in/sign-in.component";
import { ReactComponent as ImageSignIn } from "../../assets/image02.svg";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <Row>
      <Col className="sign-in-img" sm={24} md={12} lg={16}>
          <ImageSignIn />
      </Col>
      <Col className="sign-in-form" sm={24} md={12} lg={8}>
        <SignIn />
      </Col>
    </Row>
  </div>
);

export default SignInSignUpPage;
