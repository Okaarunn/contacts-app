import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChange(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onPasswordChange(e) {
    this.setState(() => {
      return {
        password: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className="login-input" onSubmit={this.onSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          autoComplete="password"
        />

        <button>Masuk</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginInput;
