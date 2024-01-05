import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        // Basic validation
        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }

        // Simulate authentication (replace this with your actual authentication logic)
        const isAuthenticated = authenticateUser(username, password);

        if (isAuthenticated) {
            // Save username to local storage
            localStorage.setItem("username", username);

            // Redirect to the desired page, e.g., "/NavbarComp"
            window.location.href = "/NavbarComp";
        } else {
            alert("Invalid username or password");
        }
    };

    const authenticateUser = (username, password) => {
        // Replace this with your actual authentication logic
        // For simplicity, just check if username and password are non-empty
        return username.trim() !== "" && password.trim() !== "" && password.length >= 8;
        // Add your own authentication logic here (e.g., API call to a server)
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>LOGIN</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="remember-forgot">
                    <Link to="#">Forgot Password?</Link>
                </div>
                <div className="d-grid gap-2 mt-3">
                <Link to="/"><button type="button">LOGIN</button></Link>
                </div>

                <div className="register-link">
                    <br></br>
                    <p>OR  <br/><br/><Link to="/Reg"><button type="button">SIGN UP</button></Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
