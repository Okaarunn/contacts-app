import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form className="login-input" onSubmit={onSubmitHandler}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        autoComplete="password"
      />

      <button>Masuk</button>
    </form>
  );
};

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginInput;
