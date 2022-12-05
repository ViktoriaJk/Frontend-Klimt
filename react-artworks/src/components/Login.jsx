import "./Login.css";
import LoginInput from "./material/LoginInput";

const Login = ({toLogIn,getPaintings}) => {
    
    return (
        <div className="signInContainerDiv">
            <div className="signInDiv">
                <div className="leftDiv">
                <LoginInput toLogIn={toLogIn} />
                </div>
                <div className="rightDiv"></div>
                </div>
        </div>
      );
};

export default Login;
