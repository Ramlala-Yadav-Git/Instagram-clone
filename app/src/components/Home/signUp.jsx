import "./home.css";
import "./media.css"
import logo from "./images/instagram-logo.png"
import fbWhite from "./images/fb.png"
import applePlay from "./images/applestore.png";
import googlePlay from "./images/googlestore.png";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

/* "username":"dhruv",
            "fullname":"dhruv suraya",
            "password":"ytiewutew",
            "email":"surya@gmail.com" */
export const SignUp = () => {
  const [username, setUserName] = useState("")
  const [fullname, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const history = useHistory()

  const handleSignUp = () => {
    const payLoad = {
      username,
      fullname,
      password,
      email
    }
    getData(payLoad)
    setEmail("")
    setPassword("")
    setFullName("")
    setUserName("")
    // console.log(payLoad);
  }

  const getData = (payLoad) => {

    axios.post("http://localhost:8000/register", payLoad).then((res) => {
      if (res.data.error) {
        alert(res.data.message)
      }
      console.log(res.data);

      localStorage.setItem("registerData", JSON.stringify(res))
      alert(res.data.message)
      history.push("/login")
    })
  }
  return (
    <div>
      <main>
        <div className="log-in-container">
          <div className="log-in">

            <img src={logo} className="logo" alt="logo" />
            <p className='tittle'>Sign up to see photos and videos from your friends.</p>

            <div className='blue-box log-in-button'>


              <img src={fbWhite} alt="facebook logo" />
              <span className="white">Log in with Facebook</span>


            </div>

            <span className="or-divider">OR</span>
            <div className="margin"></div>
            <div className="log-in-form">
              <input type="text" placeholder="Mobile Number or Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <input type="text" placeholder="Full Name" name="fullname" onChange={(e) => setFullName(e.target.value)} value={fullname} />
              <input type="text" placeholder="username" name="username" onChange={(e) => setUserName(e.target.value)} value={username} />
              <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              <button className="log-in-button" onClick={handleSignUp}>
                Sign up
              </button>
            </div>

            <div >
              <p className="terms">by signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy</strong> </p>
            </div>




          </div>

          <div className="sign-up">
            <span>have an account?</span><a href="/">Log in</a>
          </div>

          <div className="get-the-app">
            <span>Get the app</span>
            <div className="app-images">
              <a href="/"><img src={applePlay} alt="appleLogo" /></a>
              <a href="/"><img src={googlePlay} alt="googleLogo" /></a>
            </div>
          </div>
        </div>


      </main>
      <footer>
        <ul class="footer-links">
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
        <span class="copyright">&copy; 2021 INSTAGRAM FROM FACEBOOK</span>
      </footer>

    </div>
  )
}