import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import '../css/login.css'
import { loginPage } from "../FetchApi";

function LoginComponent() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = () => {
      // Logic to handle registration
    };
  
    const handleLogout = () => {
      // Logic to handle logout
      setIsLoggedIn(false);
    };

    const callbacklogin = (data) => {
      if(data.statusCode === 200) {
        alert('Đăng nhập thành công');
        localStorage.userId = data.userId;
        localStorage.token = data.token;
        setIsLoggedIn(true);
        navigate('/home/dashboard')
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    }

    async function handleLogin(){
      // Logic to handle login
      try {
        await loginPage(callbacklogin, {
          username: username,
          password: password
        })
      } catch {
        alert('Có lỗi trong quá trình đăng nhập!')
      }
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
                {/* <label className="form-middle-label" htmlFor="">Username</label> */}
                <FormControl
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form-middle-group">
                {/* <label className="form-middle-label" htmlFor="">Password</label> */}
                <FormControl
                  placeholder="Password"
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