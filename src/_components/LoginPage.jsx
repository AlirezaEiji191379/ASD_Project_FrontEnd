import React, {useState} from "react"
import '../_styles/UserLogin.css'
import {userActions} from "../_actions/userActions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setPassword(e.target.value);
    }

    function handleLoginButton() {
        if (props.userExist) {
            console.log('User Exist');
            const result = props.loginUser(props.email, password);
            if (result)
                navigate('/profile');
            else
                alert('Password/Email do not match.')
        } else {
            console.log('User Does not Exist');
            const result = props.registerUser(props.email, password);
            if (result)
                navigate('profile');
            else
                alert('Registration failed!');
        }
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up | Login</h3>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleLoginButton}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        userExist: state.userExist,
        email: state.email
    }
}

const mapDispatchToProps = {
    loginUser: userActions.loginUser,
    registerUser: userActions.registerUser
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export {connectedLoginPage as LoginPage};