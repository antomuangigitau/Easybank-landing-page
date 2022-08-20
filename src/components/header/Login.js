import React, { Component } from 'react';

// const Login = () => {
//   return (
//     <button className='login__btn'><a href="#a">Log In</a></button>
//   )
// };

class Login extends Component {
    navTo(uri) {
        window.location.href = window.location.origin + uri;
      }

    render() {
        return (
            // <button className='login__btn'></button>
            <button onClick={() => {
                this.navTo('/login');
            }} className='login__btn'>
            Login
            </button>
        )
    }
}

export default Login;
