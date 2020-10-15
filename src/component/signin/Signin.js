import React, { useState } from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { useHistory } from  'react-router-dom'

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signIn = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then( ()=>  history.push('/'))
            .catch((error)=> alert(error))

    };


    return (
        <div className="signin">
           <div className="signin__logo">
                <Link to="/">
                    <img src="https://midiaresearch.com/storage/uploads/blog/images/2017/10/Amazon-logo.jpg" alt="amazon_logo"/>
                </Link>
           </div>
           <div className="signin__card">
                <h2>Sign-in</h2>
                <form>
                    <div className="signin__email">
                        <label htmlFor="email"><strong>E-mail</strong></label>
                        <input type="text" id="" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="signin__password">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" id="" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>

                    <div className="signin__button">
                        <button onClick={signIn}>Sign In</button>
                    </div>
                </form>

                <p style={{fontSize:'13px'}}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <Link className="signin_link" to="/signup">Create your Amazon Account</Link>
                
           </div>

        </div>
    )
}

export default Signin
