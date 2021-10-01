
import "./home.css";
import "./media.css"
import logo from "./images/instagram-logo.png"
import fbLogo from "./images/facebook-icon.png"
import applePlay from "./images/applestore.png";
import googlePlay from "./images/googlestore.png";
import phone from "./images/phones.png"
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getallUser, GetLoggedData } from "../../redux/action";

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const dispatch = useDispatch()
  const handleLogin = () => {
    const payload = {
      username,
      password
    }
    console.log(payload)
    getData(payload)
    setUsername('')
    setPassword('')
  }

  const getData = (payload) => {
    axios.post("http://localhost:8000/login", payload).then((res) => {
      if (res.data.error) {
        alert(res.data.message)
      }

      else {
        let id = res.data.data
        id = id._id
        // console.log(id);
        dispatch(GetLoggedData(id))
        // dispatch(getallUser)
        // localStorage.setItem("loginData", JSON.stringify(res))
        // alert(res.data.message)
        history.push("/")
      }
    })
  }

  return (<div>

    <main>
      <div className="log-in-container">
        <div className="log-in">

          <img src={logo} className="logo" alt="logo" />

          <div className="log-in-form">
            <input type="text" placeholder="Phone number, username or email"
              name="username" onChange={(e) => setUsername(e.target.value)} value={username}
            />
            <input type="password" placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
            <button className="log-in-button" onClick={handleLogin}>Log In</button>
          </div>

          <span className="or-divider">OR</span>

          <div className="fb-login">
            <a href="/">
              <img src={fbLogo} alt="facebook logo" />
              <span>Log in with Facebook</span>
            </a>
          </div>

          <a href="/">Forgot password?</a>
        </div>

        <div className="sign-up">
          <span>Don't have an account?</span><a href="/signUP">Sign up</a>
        </div>

        <div className="get-the-app">
          <span>Get the app</span>
          <div className="app-images">
            <a href="/"><img src={applePlay} alt="appleLogo" /></a>
            <a href="/"><img src={googlePlay} alt="googleLogo" /></a>
          </div>
        </div>
      </div>

      <div className="phones-container">
        <img src={phone} alt="phoneImage" />
      </div>
    </main>
    <footer>
      <ul className="footer-links">
        <li><a href="/">ABOUT</a></li>
        <li><a href="/">HELP</a></li>
        <li><a href="/">PRESS</a></li>
        <li><a href="/">API</a></li>
        <li><a href="/">JOBS</a></li>
        <li><a href="/">PRIVACY</a></li>
        <li><a href="/">TERMS</a></li>
        <li><a href="/">LOCATIONS</a></li>
        <li><a href="/">TOP</a></li>
        <li><a href="/">ACCOUNTS</a></li>
        <li><a href="/">HASHTAGS</a></li>
        <li><a href="/">LANGUAGE</a></li>
      </ul>
      <span className="copyright">&copy; 2021 INSTAGRAM FROM FACEBOOK</span>
    </footer>



  </div>)

}