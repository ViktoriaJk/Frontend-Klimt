import { useState } from "react";
import "./Login.css";

const Login = ({toLogIn,getPaintings}) => {
    const [loginName,setLoginName]= useState("")
    const [loginPassword,setLoginPassword]=useState("") 

    const sendData = (e) =>{
        e.preventDefault()
        const loginData = {
            name: loginName,
            password: loginPassword
        }
     console.log(loginData)
     toLogIn(loginName[0].toUpperCase())
    }
  return (
    <div className="loginContainerDiv">
        <div className="loginDiv">
            <div className="leftDiv">
                <h1>Please Login:</h1>
                <form className="leftDivForm" onSubmit={sendData}>
                    <input type="text" placeholder="Login Name" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
                    <input type="password" placeholder="Password" value={loginPassword} onChange={(e) =>setLoginPassword(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </div>
            <div className="rightDiv"></div>
            </div>
    </div>
  );
};

export default Login;
