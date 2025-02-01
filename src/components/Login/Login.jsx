

/* 
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login/login', { email, password });
            console.log(response);
            if (response.data.message  === "Success") {
                navigate('/Sidebar');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during login.');
        }
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        name="password"
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                {error && (
                    <div style={{ color: 'red', marginBottom: '15px' }}>
                        {error}
                    </div>
                )}
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;
*/
import axios from "axios";
import  { useState } from "react";


const Login = ({ onLogin }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/login/login', {
        email,
        password,
      });

      const token = response.data.token;

      // If login is successful
      onLogin(token);
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>

      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        
        <input
         type="email"
         id="email"
         name="email"
         value={email}
         onChange={(e) => setemail(e.target.value)}
         required
         style={{ width: '100%', padding: '8px' }}
        />
         
                </div>
                <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input
         name="password"
         type="text"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
         style={{ width: '100%', padding: '8px' }}
          disabled={loading}
        /></div>
           <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
         <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Login
                </button></div>
      </form>
    </div>
  );
};

export default Login;
