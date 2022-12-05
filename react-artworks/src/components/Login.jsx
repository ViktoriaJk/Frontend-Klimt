import "./Login.css";
import LoginInput from "./material/LoginInput";

const Login = ({toLogIn,setUserId}) => {
    
    return (
        <div className="signInContainerDiv">
            <div className="signInDiv">
                <div className="leftDiv">
                <LoginInput setUserId={setUserId} toLogIn={toLogIn} />
                </div>
                <div className="rightDiv"></div>
                </div>
        </div>
      );
};

export default Login;
