import React from 'react'
import { FaUser, FaLock } from "react-icons/fa"; /*Usanod a biblioteca de icones do recat importando pelo fontawersome */

import { useState } from 'react';

import "./Login.css";

const login = () => {


        const [username, setUsername] = useState("");
          const [password, setPassword] = useState("");

           const handleSubmit = (event) => {
              event.preventDefault();

            alert("Enviando os dados:" + username + " - " + password);
        };

    return (
     <div className="container"> 
        <form onSubmit={handleSubmit}>
            <h1>
            システムへのアクセス
            </h1>
            <div className="input-field">
        
            <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} /> 
            <FaUser className="icon" />
            </div>
           <div className="input-field">
           <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} /> 
           <FaLock className="icon" />
           </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />  
                     私を記憶する
                </label>
                <a href="#">パスワードをお忘れですか?</a> 
            </div>
          
           <button>入る</button>
          
           <div className="singup-link">
            <p>アカウントをお持ちではありませんか? <a href="#">登録する</a></p>
           </div>
        
        </form>
     </div>
    );
  };
  
  export default login