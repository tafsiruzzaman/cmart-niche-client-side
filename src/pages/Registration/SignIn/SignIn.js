import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import car from '../../../images/car.png';
import './SignIn.css';
import Header from '../../Shraed/Header/Header';

const SignIn = () => {
    const { singInUsingGoogle, setUser, setError, setUserName, registerNewUser, setIsLoading, signInUsingGithub, processLogin } = useAuth();
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isSignin, setIsSignin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/dashboard';

    const handleIsSignin = () => {
        if(isSignin) {
            setIsSignin(false)
        }
        else if (!isSignin) {
            setIsSignin(true)
        };
    };

    const hanldeNameChange = e => {
        setName(e.target.value);
    };

    const handleEmailChange = e => {
        const inputValue = e.target.value;
        const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(inputValue);
        if(validEmail) {
            setEmail(inputValue);
            setLoginError('');
        }
        else{
            setLoginError('Please input a vlaid email')
        };
    };
    const handlePasswordChange = e => {
        const inputValue = e.target.value;
        if(inputValue.length >= 6) {
            setPassword(inputValue);
            setLoginError('');
        }
        else{
            setLoginError('Password must be at least 6 characters');
        };
    };
    const handleConfirmPassword = e => {
        const inputValue = e.target.value;
        if(inputValue === password) {
            console.log('matched')
            setPasswordMatched(true)
            setLoginError('');
        }
        else{
            console.log('not matched')
            setPasswordMatched(false);
            setLoginError('Password not matched');
        };
    };
    const handleSubmission = e => {
        e.preventDefault();
        if(email && password) {
            if(isSignin) {
                goSignIn();
            }
            else if (!isSignin) {
                if(!passwordMatched) {
                    return;
                }
                else if (passwordMatched) {
                    console.log(passwordMatched)
                    goSignUp();
                };
            };
        };
    };
    const goSignIn = () => {
        processLogin(email, password)
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
        .catch(error => {
            const invalidUser = 'Firebase: Error (auth/user-not-found).';
            const invalidPassword = 'Firebase: Error (auth/wrong-password).';
            if(error.message === invalidUser) {
                setLoginError('Invalid user. Please sign up first')
            }
            else if(error.message === invalidPassword) {
                setLoginError('Wrong Password. Try again')
            };
        })
        .finally(() => setIsLoading(false));
    };
    const goSignUp = () => {
        registerNewUser(email, password)
        .then((result) => {
            setUser(result.user);
            saveUser(email, name, 'POST');
            history.push(redirect_uri);
            setUserName(name);
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
        setPasswordMatched(false);
    };
    const handleGoogleSignIn = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
            console.log(result.user)
            saveUser(result?.user?.email, result?.user?.displayName, 'PUT');
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    const handleGithubSignIn = () => {
        signInUsingGithub()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
            saveUser(result?.user?.email, result?.user?.displayName, 'PUT');
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://thawing-sea-96510.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-md-12 col-lg-6">
                            <img src={logo} className="img-fluid w-50 mt-5" alt="" />
                            <div className="bg-white p-3 mt-5">
                                <form onSubmit={handleSubmission}>
                                    <h2 className="fw-bold text-title">{isSignin ? "Sigh In to your account" : "Sign up for free!"}</h2>
                                    <h6 className="light-text">
                                        {isSignin ? "Don’t have an account? " : "Already have an account? "} 
                                        <span className="text-primary" onClick={handleIsSignin}>
                                            {isSignin ? "Sign Up Free!" : "Sign In"}
                                        </span>
                                    </h6>
                                    <div className="w-75 mx-auto mt-3">
                                        {
                                            !isSignin && <input onBlur={hanldeNameChange} required type="text" className="form-control w-100" placeholder="Your name"/>
                                        }
                                        <input onBlur={handleEmailChange} required type="email" className="form-control w-100" placeholder="Email address"/>
                                        <input onBlur={handlePasswordChange} required type="password" className="form-control w-100" placeholder="Password"/>
                                        {
                                            !isSignin && <input onBlur={handleConfirmPassword} required type="password" className="form-control w-100" placeholder="Confirm Password"/>
                                        }
                                        {
                                            isSignin && <h6 className="text-start light-text mt-3"><Link to="/signup">Forgot password?</Link></h6>
                                        }
                                        <Button type="submit" variant="primary w-100 py-2 mt-3">{isSignin ? "Sign In" : "Sign Up"}</Button>
                                        <small className="text-danger mt-3">{loginError}</small>
                                        <h5 className="mt-4 light-text">Or Sign {isSignin ? "In" : "Up"} with</h5>
                                        <Button onClick={handleGoogleSignIn} variant="danger me-2 rounded-0"><i className="fab fa-google"></i> Google</Button>
                                        <Button onClick={handleGithubSignIn} variant="dark ms-2 rounded-0"><i className="fab fa-github"></i> GitHub</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-6 d-none d-lg-block">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <img className="img-fluid pt-4 mt-5" src={car} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;