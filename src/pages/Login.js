import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {selectIsLoggedIn, login} from './../features/user/userSlice';
import logo from './../assets/images/logo.png';
import googleLogo from './../assets/images/logo-google.png';
import facebookLogo from './../assets/images/logo-facebook.png';
import {useHistory} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import VerticalAlignedComponent from "../components/VerticalAlignedComponent";

const Login = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const history = useHistory();
    const [mobileNumber, setMobileNumber] = useState("");

    const loginClick = () => {
        //TODO: dispatch something to /login to ask for an OTP
        history.push('/otp');
    };

    const doNothing = () => {
    };

    if (isLoggedIn)
        return <Redirect to={{pathname: '/'}}/>;

    return (
        <Container>
            <div style={styles.container}>
                <img src={logo} alt="logo" width="60"/>

                <div className="hero-text" style={styles.heroText}>
                    <h2 style={styles.noMargin}>Your Meal.</h2>
                    <h2 style={styles.noMargin}>Fresh and Tasty.</h2>
                </div>

                <form style={styles.form}>
                    <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}/>
                    <button className="primary" onClick={loginClick}>Free Sign Up</button>
                </form>

                <p>Did you forgot your password? <a href="/reset">Reset Password</a></p>

                <p>OR</p>

                <div style={styles.thirdPartyLoginContainer}>
                    <button onClick={doNothing} style={styles.button}>
                        <img src={facebookLogo} width="30"/> Continue with Facebook
                    </button>
                    <button onClick={doNothing} style={styles.button}>
                        <img src={googleLogo} width="30"/> Continue with Google
                    </button>
                </div>
            </div>
        </Container>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 26,
    },
    heroText: {
        textAlign: 'center',
        paddingTop: 8.76,
    },
    noMargin: {
        margin: 0
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        gap: 35
    },
    thirdPartyLoginContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
    },
    button: {
        display: 'flex',
        alignItems: 'center'
    }
}

const StyledLogin = VerticalAlignedComponent(Login);

export default StyledLogin;
