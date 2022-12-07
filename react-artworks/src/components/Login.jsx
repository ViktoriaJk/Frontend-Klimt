import "./Login.css";
import LoginInput from "./material/LoginInput";

const Login = ({setPage,toLogIn,setUserId}) => {
    
    return (
        <div className="signInContainerDiv">
            <div className="signInDiv">
                <div className="leftDiv">
                <LoginInput setPage={setPage} setUserId={setUserId} toLogIn={toLogIn} />
                </div>
                <div className="rightDivInput"></div>
                </div>
        </div>
      );
};

export default Login;
