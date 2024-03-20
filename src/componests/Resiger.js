import React from "react";
import "@fortawesome/fontawesome-free";
import "../styles/base.css";
import "../styles/main.css";
// import banner from "../img/pexels-melvin-buezo-2529148.jpg";
const Resiger = () => {
  return (
    <div className="">
      <div className="login">
        <h1 className="title_name">GEN SNEAKER</h1>
        <div className="Login__container">
          <div className="login_form">
            <h2 className="login-title">Register</h2>
            <div className="resiger-inp login-inp">
              <label>Username</label>
              <input type="text" className="Resiger_user" required></input>
            </div>
            <div className="resiger-inp login-inp">
              <label>Email</label>
              <input type="email" className="Resiger_email" required></input>
            </div>
            <div className="resiger-inp login-inp">
              <label>Password</label>
              <input type="password" className="Resiger_pass" required></input>
            </div>
            <div className="resiger-inp login-inp">
              <label>Confirm password</label>
              <input type="password" className="Resiger_pass" required></input>
            </div>
            <div className="resiger__phone-date">
              <div className="resiger-inp login-inp">
                <label> Phone number</label>
                <input type="tel" className="Resiger_phone" required></input>
              </div>
              <div className="resiger-inp login-inp">
                <label>Date of birth</label>
                <input
                  type="text"
                  className="Resiger_date"
                  placeholder="dd/mm/yyyy"
                  required
                ></input>
              </div>
            </div>
            <div>
              <button className="btn mt-6">Register now</button>
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
      <div className="resiger_footer">
        <span> Already have an account?</span>
        <a href="/#">Log in</a>
      </div>
      {/* <div>
        <img src={banner} className="bg_img" alt=""></img>
      </div> */}
    </div>
  );
};

export default Resiger;
