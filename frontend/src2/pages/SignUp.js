import React from 'react';
import { Link } from 'react-router-dom';
import './style/SignUp.css'
const SignUp = () => {
    return(
        <div className="Login_Box">
        <h1 style={{textAlign: "center", fontSize: "1.8em", fontWeight: "700"}}>Join Fiverr</h1>
        <div className="social_login">Continue with Facebook</div>
        <div className="social_login1">Continue with Google</div>
        <div className="social_login1">Continue with Apple</div>
        <div className="orSect">
        <div className="hrDiv" style={{marginRight:"8px", marginLeft: "20px"}}>
        </div>
            OR
        <div className="hrDiv" style={{marginLeft:"8px"}}>
        </div>
        </div>
        <form className="form_Data">
            <input placeholder="Enter your email" />
            <button>Continue</button>
        </form>
        <p className="p_CSS">By joining I agree to receive emails from Fiverr.</p>
        <div className="hrDiv2">
        </div>
        <p style={{textAlign: "center", fontWeight:"600", marginTop: "18px", color: "#7A7D85"}}>Already a member?  <span style={{color: "#098a4e", cursor: "pointer"}}><Link to="/signin">Sign In</Link></span></p>
    </div>
    )
}
export default SignUp