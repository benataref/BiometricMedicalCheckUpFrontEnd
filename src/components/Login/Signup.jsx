
import axios from "axios";
import React, { useState } from "react";
import {Link ,useNavigate} from 'react-router-dom'

function Signup () {
    const [name ,setName ]=useState()
    const [email, setEmail] = useState()
   const[password, setPassword]=useState()

   const[fathername, setFatherName]=useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://192.168.1.9:8000/api/login/register', { name, fathername, email, password })
          .then(response => {
            console.log(response);
            // Redirect to another page after successful signup
            navigate('/login'); // Adjust the path as needed
          })
          .catch(error => {
            console.error(error);
            // Handle error here, maybe show a message to the user
          });
      };
           return (
            <div className="container mt-5">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fatherName" className="form-label">Fathers Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fatherName"
                    value={fathername}
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Reister</button>
              </form>
              <p>Alrady have an Account</p>
             <Link to ="/Signup" className="btn btn-primary">Login</Link>

            </div>
          );
        }
        
        export default Signup;
   
    
     /*    function App() {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [message, setMessage] = useState('');
          const [isLoggedIn, setIsLoggedIn] = useState(false);
      
          const handleRegister = (e) => {
              e.preventDefault();
              if (email === TEST_ACCOUNT.email) {
                  setMessage('Test account always exists. Please log in.');
              } else {
                  setMessage('Registration successful! (Demo only: Registration is simulated, and no data is stored. Please use the test account to log in.)');
              }
          };
      
          const handleLogin = (e) => {
              e.preventDefault();
              if (email === TEST_ACCOUNT.email && password === TEST_ACCOUNT.password) {
                  setIsLoggedIn(true);
                  setMessage('Login successful');
              } else {
                  setMessage('Invalid credentials. Try the test account or any other email/password combination.');
              }
          };
      
          // ... rest of the component
      } */