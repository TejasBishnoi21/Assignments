import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ()=>{

    return <>
        <div>
        <div style={{
            'display':'flex',
            'justifyContent':'space-around',
            'alignItems':'center',
            'width':'100%',
            // 'border':'1px solid red',
            'boxShadow': 'rgba(0, 0, 2, 0.5) 0px 1px 10px',
            'position':'fixed',
            'padding':0

            }}>
            <div>
                <h2>BOOKSTORE</h2>
            </div>
            <div style={{
                'width': 200,
                'display':'flex',
                'justifyContent':'space-between'
            }}>
                <Link to={'/login'}>
                    <p>Login</p>
                </Link>

                <Link to={'/'}> 
                    <p>Home</p>
                </Link>
            </div>
        </div>
        </div>
        
    </>
}

export default Navbar;