import "./SignIn.css";
import SignInInput from "./material/SignInInput";

const SignIn = ({toSignIn}) => {

  return (
    <div className="signInContainerDiv">
        <div className="signInDiv">
            <div className="leftDiv">
            <SignInInput />
            </div>
            <div className="rightDiv"></div>
            </div>
    </div>
  );
};

export default SignIn;
