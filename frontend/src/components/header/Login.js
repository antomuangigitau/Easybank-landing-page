import React from 'react';
import styles from '../../styles/Login.module.css';
const Login = () => {
  return (
    <button className={styles['login__btn']}>
      <a href='/signin'>Login</a>
    </button>
  );
};

// class Login extends Component {
//     navTo(uri) {
//         window.location.href = window.location.origin + uri;
//       }

//     render() {
//         return (
//             // <button className='login__btn'></button>
//             <button onClick={() => {
//                 this.navTo('/login');
//             }} className='login__btn'>
//             Login
//             </button>
//         )
//     }
// }

export default Login;
