import { useState } from 'react';
import styles from './login.module.css';
function checkReady(arr) {

}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function validateInputs() {
    const sum = fieldCheck.reduce((a, b) => a + b)
    return password.length > 6 && validateEmail(email) && sum >= 2;
}
var fieldCheck = [0, 0]
var email = ''; var password = '';
function tryLogin(ev) {
    let ok = validateInputs()
    if (!ok) {
        alert("Invalid password or email!")
        return
    }

}
export default function Login() {
    let [ready, setReady] = useState(false)


    return <>

        <div className={`${styles.loginForm}`}>
            <div className={styles.row}>
                <h1 className={styles.logo}>StreamSync</h1>
            </div>
            <div className={styles.row}>
                <input placeholder='Email' className={styles.credentials} type="email" onKeyUp={(ev) => { fieldCheck[0] = (ev.target.value === '' ? 0 : 1); setReady(validateInputs()); email = ev.target.value; }} />
            </div>
            <div className={styles.row}>
                <input placeholder='Password' className={styles.credentials} type="password" onKeyUp={(ev) => { fieldCheck[1] = (ev.target.value === '' ? 0 : 1); setReady(validateInputs()); password = ev.target.value }} />
            </div>
            <div style={{ position: 'absolute', bottom: '20px', width: 'calc(100% - 20px)' }} className={styles.row}>
                <button className={`${styles.loginButton} ${ready ? styles.ready : ''}`} onClick={tryLogin}>Login</button>
            </div>

        </div>
    </>
}

