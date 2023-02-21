import React from "react"
import '../_styles/UserLogin.css'
import {connect} from "react-redux";
import {userActions} from "../_actions/userActions";
import {useNavigate} from "react-router-dom";

function RegistrationPage() {
    const navigate = useNavigate();
    function handleNextButton(){
        navigate('/login') ;
    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up | Login</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleNextButton}>
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

// function mapStateToProps(state) {
//     const {registering} = state.registration;
//     return {registering};
// }
//
// const mapDispatchToProps = {
//     checkUser: userActions.checkUser
// }
//
// const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
// export {connectedRegisterPage as RegistrationPage};
 export {RegistrationPage};