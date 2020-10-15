import React, { useState } from 'react'
import { useHistory } from  'react-router-dom'
import './signup.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const signUp = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser =>{
                    authUser.user.updateProfile({
                        displayName: username,
                });

                return history.push('/');
            })
            .catch((error) => alert(error.message))

    };


    return (
        <div className="signin">
            <div className="signin__logo">
                <Link to="/">
                    <img src="https://midiaresearch.com/storage/uploads/blog/images/2017/10/Amazon-logo.jpg" alt="amazon_logo"/>
                </Link>
            </div>
            <div className="signin__card">
                <h2>Sign-up</h2>
                <form>
                    <div className="signin__username">
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" id="" onChange={(e)=> setUsername(e.target.value)} value={username} />
                    </div>

                    <div className="signin__email">
                        <label htmlFor="email"><strong>E-mail</strong></label>
                        <input type="text" id="" onChange={(e)=> setEmail(e.target.value)} value={email} />
                    </div>

                    <div className="signin__password">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" id="" onChange={(e)=> setPassword(e.target.value)} value={password} />
                    </div>

                    <div className="signin__button">
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </form>

                <p style={{fontSize:'13px'}}>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                
             
            </div>

        </div>
    )
}

export default Signup
