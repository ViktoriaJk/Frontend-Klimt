import "./SignIn.css";
import SignInInput from "./material/SignInInput";

const SignIn = ({toSignIn,setPage}) => {

  return (
    <div className="signInContainerDiv">
        <div className="signInDiv">
            <div className="leftDiv">
            <SignInInput setPage={setPage} toSignIn={toSignIn} />
            </div>
            <div className="rightDivSignIn"></div>
            </div>
    </div>
  );
};

export default SignIn;
