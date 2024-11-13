import React from "react";

// Images
import Logo from '../../assets/images/KU-CMS.png'

// Styles
import "./LoginStyles.css";

const LoginPage = () => {
  return (
    <>
      <div className="loginContainer" id="container">
        <div className="form-container sign-up">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo"/>
            <h2>Teacher Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo"/>
            <h2>Student Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Are you a student?</h2>
              <p>
                Login your student account to access your courses and
                assignments.
              </p>
              <button
                className="hidden"
                onClick={() => {
                  container.classList.remove("active");
                }}
              >
                Login as Student
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Are you a Teacher?</h2>
              <p>
                Login your teacher account to manage your classes and students.
              </p>
              <button
                className="hidden"
                onClick={() => {
                  container.classList.add("active");
                }}
              >
                Login as Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
