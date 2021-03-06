import React, { Component,SyntheticEvent,useState } from 'react'
import { Navigate } from 'react-router-dom';


const Register = () => {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState(false);


        const submit = async(e) => {
         
            e.preventDefault();
            
           await fetch('http://localhost:8081/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })

                
                })

                setRedirect(true);

            

        }

        if (redirect) {
            return <Navigate to="/login" />
        }
        
        

        return (
        <form onSubmit={submit} className="w-25 p-3 m-auto">
      
        <h1 className="h3 mb-3 fw-normal text-white">Please Register</h1> 


            <input  className="form-control" id="floatingPassword" placeholder="Name"
                onChange={e => setName(e.target.value)}
            />

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

    export default Register;
