import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import '../css/login.css'

function LoginComponent() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      // Logic to handle login
      setIsLoggedIn(true);
      navigate('/home/dashboard')
    };
  
    const handleRegister = () => {
      // Logic to handle registration
    };
  
    const handleLogout = () => {
      // Logic to handle logout
      setIsLoggedIn(false);
    };
  
    return (
      <div className="login">
        <div className="login-box">
          {/* <Navbar>
            <Navbar.Brand>Login Page</Navbar.Brand>
          </Navbar> */}
          {isRegisterOpen ? (
            <Form className="form-middle">
              <h2>Register</h2>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-input"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button variant="primary" onClick={handleRegister}>
                Register
              </Button>
            </Form>
          ) : (
            <Form className="form-middle">
              <h1>Login</h1>
              <FormGroup className="form-middle-group">
                <label className="form-middle-label" htmlFor="">Username</label>
                <FormControl
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form-middle-group">
                <label className="form-middle-label" htmlFor="">Password</label>
                <FormControl
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          )}
        </div>
      </div>
    );
}

export default LoginComponent;