import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/main_logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/main_logo_black.png";

const Loginpage = () => {
  const Nav = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const confirmclicked = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.message === "fail") {
      window.alert("invalid credentials");
    } else if (data.message === "ematched") {
      window.alert("Email already exist");
    } else {
      window.alert(" registration successful");
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitclicked = async (e) => {
    Nav("/home");
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.message === "fail") {
      window.alert("invalid credentials");
    } else if (data.message === "pass") {
      window.alert("log in successful");
      Nav("/home");
    }
  };

  return (
    <div className="logcontainer">
      <div className="logoname">
        <div className="login_title">
          <img src={logo} alt="" />
        </div>

        <div className="login_des">
          <img src={logo2} alt="" />
        </div>
      </div>

      <div className="main_wrap">
        <div className="title2">
          <img src={logo3} alt="" />
        </div>

        <div class="wrapper_log">
          <div class="card-switch_log">
            <label class="switch_log">
              <input type="checkbox" class="toggle_log" />
              <span class="slider_log"></span>
              <span class="card-side_log"></span>
              <div class="flip-card__inner_log">
                <div class="flip-card__front_log">
                  <div class="title_log">Log in</div>
                  <form method="POST" class="flip-card__form_log" action="">
                    <input
                      class="flip-card__input_log"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <input
                      class="flip-card__input_log"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <button class="flip-card__btn_log" onClick={submitclicked}>
                      Let`s go!
                    </button>
                  </form>
                </div>
                <div class="flip-card__back_log">
                  <div class="title_log">Sign up</div>
                  <form method="POST" class="flip-card__form_log" action="">
                    <input
                      class="flip-card__input_log"
                      placeholder="Name"
                      type="name"
                      name="name"
                      value={user.name}
                      onChange={handleInput}
                    />
                    <input
                      class="flip-card__input_log"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                    <input
                      class="flip-card__input_log"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <button class="flip-card__btn_log" onClick={confirmclicked}>
                      Confirm!
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
