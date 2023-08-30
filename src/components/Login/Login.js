import React from "react";
import "./Login.css";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const handleGoogleSuccess = (response) => {
    console.log("Google login success", response);
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failure", error);
  };
  return (
      <section>
        <div className="container">
          <div className="login">
            <div className="container">
              <h1>Se connecter</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <br />
              <input type="checkbox" />
              <span>Souviens-moi</span>
              <button>Se connecter</button>
              <hr />
              <p>Ou connectez-vous avec</p>
              <hr />
              <ul>
                <li>
                <GoogleLogin
                  clientId="YOUR_GOOGLE_CLIENT_ID"
                  buttonText="Login with Google"
                  onSuccess={handleGoogleSuccess}
                  onFailure={handleGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Login;
