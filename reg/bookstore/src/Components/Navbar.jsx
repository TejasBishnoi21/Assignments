import styled from "styled-components";

const Navbar = ()=>{

    return <>
        <div style={{
            'display':'flex',
            'justifyContent':'space-around',
            'alignItems':'center',
            'width':'100%',
            // 'border':'1px solid red',
            'boxShadow': 'rgba(0, 0, 2, 0.5) 0px 1px 10px',
            'position':'fixed',

            }}>
            <div>
                <h2>BOOKSTORE</h2>
            </div>
            <div style={{
                'width': 200,
                'display':'flex',
                'justifyContent':'space-between'
            }}>
                <p>Login</p>
                <p>Home</p>
            </div>
        </div>
    </>
}

export default Navbar;