import React from "react";
import "../styles/base.css";
import "../styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const CreateAcc = () => {
  return (
    <div>
      <div className="login">
        <h1 className="title_name">GEN SNEAKER</h1>
        <div className="Login__container">
          <div className="login_form">
            <h2 className="login-title">Create an account</h2>
            <div className="login-inp">
              <label>Email</label>
              <input
                type="email"
                className="emaill_resiger"
                required
                placeholder="e.g. hello@reallygreatsite.com"
              ></input>
            </div>
            <div>
              <button className="btn mt-8"> Continue with email</button>
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
      <div className="login_footer">
        <span> Already have an account?</span>
        <a href="/#">Log in</a>
      </div>
    </div>
  );
};

export default CreateAcc;
