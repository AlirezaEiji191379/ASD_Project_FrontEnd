import React, {useEffect, useState} from "react"
import '../_styles/UserLogin.css'
import {connect} from "react-redux";
import {userActions} from "../_actions/userActions";
import {useNavigate} from "react-router-dom";
import {userServices} from "../_services/userServices";

function RegistrationPage(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
            let token = localStorage.getItem('token');
            console.log(token);
            if (token == null)
                return;
            userServices.validateToken(token).then(
                data => {
                    navigate('/profile')
                }
            )
        },
    );

    function handleNextButton() {
        props.checkUser(email);
        navigate('/login');
    }

    function handleChange(e) {
        setEmail(e.target.value);
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
                            onChange={handleChange}
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

const mapDispatchToProps = {
    checkUser: userActions.checkUser
}
//
const connectedRegisterPage = connect(null, mapDispatchToProps)(RegistrationPage);
export {connectedRegisterPage as RegistrationPage};
// export {RegistrationPage};