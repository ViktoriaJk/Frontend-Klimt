import { useState } from "react";
import "./SignIn.css";

const SignIn = ({toSignIn}) => {
    const [loginName,setLoginName]= useState("")
    const [loginPassword,setLoginPassword]=useState("") 

    const sendData = (e) =>{
        e.preventDefault()
        const loginData = {
            name: loginName,
            password: loginPassword
        }

        toSignIn()
    }
  return (
    <div className="signInContainerDiv">
        <div className="signInDiv">
            <div className="leftDiv">
                <h1>Sign in:</h1>
                <form className="leftDivForm" onSubmit={sendData}>
                    <input type="text" placeholder="Sign In Name" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
                    <input type="password" placeholder="Password" value={loginPassword} onChange={(e) =>setLoginPassword(e.target.value)}/>
                    <button>Sign in</button>
                </form>
            </div>
            <div className="rightDiv"></div>
            </div>
    </div>
  );
};

export default SignIn;
