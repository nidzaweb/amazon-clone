import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context';
import { auth } from '../../firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateContext();

    useEffect(()=>{
        const unsubscribe = ()=>{

            auth.onAuthStateChanged(authUser=>{
                if(authUser){
                    dispatch({
                        type: "IS_LOGGED",
                        user: authUser
                    });
                }else{
                    console.log('no user');
                    dispatch({
                        type: "IS_LOGGED",
                        user: null
                    });
                }
            })

        };

        return unsubscribe();
    }, [user])


    return (
        <header>

           <div className="header__logo">
                <Link to="/">
                    <img src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="amazon_logo"/>
                </Link>
           </div>

            <div className="header__input">
                <input type="text" id=""/>
                <span><i className="fas fa-search"></i></span>
            </div>

            <div className="header__nav">
                <Link className="header__link" to={user ? '/' : '/signin'}>
                    <div className="header__option">
                        <span className="header__navtop">Hello, {user && user.displayName}</span>
                        {
                            !user 
                            ? <span className="header__navbottom">Sign In</span>
                            : <span onClick={()=> auth.signOut()} className="header__navbottom">Sign Out</span>

                        }
                    </div>
                </Link>
                <Link className="header__link" to="#">
                    <div className="header__option">
                        <span className="header__navtop">Returns</span>
                        <span className="header__navbottom">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="#">
                    <div className="header__option">
                        <span className="header__navtop">Your</span>
                        <span className="header__navbottom">Prime</span>
                    </div>
                </Link>
               
                <Link className="header__link" to="/basket">
                    <div className="header__cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>{basket.length}</span>
                    </div>
                </Link>
            </div>

        </header>
    )
}

export default Header