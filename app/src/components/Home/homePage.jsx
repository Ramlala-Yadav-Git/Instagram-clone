
import "./home.css";
import "./media.css"
import logo from "./images/instagram-logo.png"
import fbLogo from "./images/facebook-icon.png"
import applePlay from "./images/applestore.png";
import googlePlay from "./images/googlestore.png";
import phone from "./images/phones.png"

export const HomePage = ()=>{

    

    return (<div>

<main>
    <div class="log-in-container">
            <div class="log-in">
    
              <img src= {logo} class="logo" alt = "logo" />
    
              <div class="log-in-form">
                <input type="text" placeholder="Phone number, username or email"  
                    
                />
                <input type="password" placeholder="Password" />
                <button class="log-in-button">Log In</button>
              </div>
    
              <span class="or-divider">OR</span>
              
              <div class="fb-login">
                <a href="/">
                  <img src= {fbLogo} alt = "facebook logo" />
                  <span>Log in with Facebook</span>
                </a>
              </div>
    
              <a href="/">Forgot password?</a>
            </div>
    
            <div class="sign-up">
              <span>Don't have an account?</span><a href="/">Sign up</a>
            </div>
    
            <div class="get-the-app">
              <span>Get the app</span>
              <div class="app-images">
                <a href="/"><img src= {applePlay} alt ="appleLogo" /></a>
                <a href="/"><img src= {googlePlay} alt = "googleLogo" /></a>
              </div>
            </div>
          </div>
    
          <div class="phones-container">
            <img src={phone} alt = "phoneImage" />
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

        
      
        </div>)
    
}