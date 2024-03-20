import "../styles/base.css";
import "../styles/main.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import banner from "../img/pexels-melvin-buezo-2529148.jpg";
const Login = () => {
  return (
    <div>
      <div className="login">
        <h1 className="title_name">GEN SNEAKER</h1>
        <div className="Login__container">
          <div className="login_form">
            <h2 className="login-title">Log in</h2>
            <div className="login-inp">
              <label>Username</label>
              <input
                type="text"
                className="Login_user"
                required
                placeholder="e.g. hello@reallygreatsite.com"
              ></input>
            </div>
            <div className="login-inp">
              <label>Password</label>
              <input
                type="password"
                className="Login_pass"
                required
                placeholder=" e.g. hello@reallygreatsite.com"
              ></input>
            </div>
            <div className="checkbox__login">
              <div>
                <input
                  type="checkbox"
                  value={1}
                  name="remember"
                  id="login__checkbox"
                ></input>
                <span>Ghi nhớ</span>
              </div>
              <div>
                <a href="/#">Quên mật khẩu?</a>
              </div>
            </div>
            <div>
              <button className="btn">Log in</button>
            </div>
            <div>
              <span className="or">
                <hr class="horizontal-ruler"></hr>
                or
                <hr class="horizontal-ruler"></hr>
              </span>
            </div>
            <div className="">
              <a href="/#" className="login_link">
                <i className="login_icon fa-brands fa-facebook"></i>
                <span>Continue with Facebook</span>
              </a>
            </div>
            <div>
              <a href="/#" className="login_link">
                <i className="login_icon fa-brands fa-google"></i>
                <span>Continue with Google</span>
              </a>
            </div>
          </div>
          <div>{/* <img src={banner} alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
