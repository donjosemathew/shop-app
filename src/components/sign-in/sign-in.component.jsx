import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-in.style.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("error");
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="button">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
