import React from "react";
import { register } from "../utils/api";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  // Register handler
  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Register Your Account</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
