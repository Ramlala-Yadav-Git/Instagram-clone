import "./home.css";
import "./media.css"
import logo from "./images/instagram-logo.png"
import fbWhite from "./images/fb.png"
import applePlay from "./images/applestore.png";
import googlePlay from "./images/googlestore.png";


export const SignUp = () => {


    return (
        <div>
            <main>
    <div class="log-in-container">
            <div class="log-in">
    
              <img src= {logo} class="logo" alt = "logo" />
              <p class = 'tittle'>Sign up to see photos and videos from your friends.</p>

                <div class = 'blue-box log-in-button'>
                  
                    
                      <img src= {fbWhite} alt = "facebook logo" />
                      <span class = "white">Log in with Facebook</span>
                    

                </div>
              
              <span class="or-divider">OR</span>
              <div className="margin"></div>
              <div class="log-in-form">
                <input type="text" placeholder="Mobile Number or Email" /> 
                <input type="text" placeholder="Full Name" /> 
                <input type="text" placeholder="username" /> 
                <input type="password" placeholder="Password" />
                <button class="log-in-button">
                    Sign up
                </button>
              </div>

              <div >
                <p className = "terms">by signing up, you agree to our <strong>Terms, Data Policy</strong> and <strong>Cookies Policy</strong> </p>
              </div>
    
             
              
      
            </div>
    
            <div class="sign-up">
              <span>have an account?</span><a href="/">Log in</a>
            </div>
    
            <div class="get-the-app">
              <span>Get the app</span>
              <div class="app-images">
                <a href="/"><img src= {applePlay} alt ="appleLogo" /></a>
                <a href="/"><img src= {googlePlay} alt = "googleLogo" /></a>
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