import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom';


const Login = ({setName}) => {




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async(e) => {

        e.preventDefault();

        const response = await fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                //!  for cookies
                credentials: 'include',

                body: JSON.stringify({
                    
                    email,
                    password,
                })

                
              }
              )
              const content = await response.json();

              setRedirect(true);
              setName(content.name);

              
              
            }
            
            if (redirect) {
                return <Navigate to="/" />
                
            }
  
    return (
        <form onSubmit={submit}>
      
        <h1 className="h3 mb-3 fw-normal">Please login</h1> 


            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
            
              onChange={e => setEmail(e.target.value)}
            />
  


            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"

                onChange={e => setPassword(e.target.value)}
            
            />
    
  
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

    </form>
    )
  
}

export default Login;