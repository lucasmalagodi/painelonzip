import React from 'react';
//import {} from 'react-icons/fi';
import './styles.css';
import onImg from '../../assets/login-img.svg';
import logoImg from '../../assets/logo.svg';
import fundoImg from '../../assets/fundo-login.svg';
export default function Login(){ 
    return (

        <div className="login">
            <div className="imgLogin">
                <img src={fundoImg} alt="Login onzip"/>
            </div>                
            <div className="login-container">
                <img src={onImg} alt="Login onzip"/>
                <section className="form">
                    <img src={logoImg} alt="Onzip"/>
                    <form>
                        <div className="login input-container">
                            <input className="input" placeholder="login" />
                        </div>
                        <div className="password">
                            <input className="input-container" type="password"  placeholder="Password" />
                        </div>

                        <button type="submit">Entrar </button>

                        
                    </form>
                </section>
            </div>
        </div>
    );
}