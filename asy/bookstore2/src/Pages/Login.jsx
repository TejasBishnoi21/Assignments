import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import getLogin from "../Redux/Auth/action";

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = ()=>{

        const userData = {
            email,
            password
        }

        dispatch(getLogin(userData)).then(()=>{
            navigate(location.state, {replace:true})
        })

    } 

    return <>
    <div>
        <Navbar/>

        <div style={{
            'margin':0,
            'padding':10,
            'border':'1px solid transparent'
        }}>
        <h1 style={{'marginTop':120}}>Please Login First</h1>
        <div style={{
            'border':'1px solid',
            'borderRadius':10,
            'width':400,
            'margin':'auto',
            'padding':10,

            }}>
            <div>
                <label>Username: </label>
                <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
                <label> Password: </label>
                <input type="password" value={password} onChange={(e)=>setPass(e.target.value)}/>
            </div>

            <button onClick={handleLogin}>Submit</button>
        </div>
        </div>
    </div>
    </>

}

export default Login;