import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;