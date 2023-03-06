import React, {useEffect, useState} from 'react';
import '../_styles/Profile.css';
import {profileServices} from "../_services/profileServices";
import {connect} from "react-redux";

function RightContent(props) {

    const [state, setState] = useState({
        user: {
            username: '',
            email: props.email,
            publicUsername: '',
            firstName: '',
            lastName: '',
        },
    })

    useEffect(() => {
        const user = profileServices.getUserInfo(props.email);
        setState({user: user}) //TODO: Fix response mistype (Matin, )
    }, [props.email]);

    function inputChange(event) {
        const {name, value} = event.target;
        const user = state.user;
        user[name] = value;
        setState({user: user});
    }

    function handleSaveButton() {

        profileServices.updateUserProfile(state.user).then(
            data => {
                alert('Profile updated successfully!')
            },
            error => {
                alert('Profile update FAILED.')
            }
        )
    }


    const {
        firstName, lastName, username, publicUsername,
        email
    } = state.user;
    return (
        <div className="rightPanel">
            <div className="row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-3 mb-2">
                    <input type="text" value={firstName} name="firstName" onChange={(e) => {
                        inputChange(e)
                    }} className="form-control" placeholder="First Name"/>
                </div>
                <div className="col-sm-3 mb-2">
                    <input type="text" value={lastName} name="lastName" onChange={(e) => {
                        inputChange(e)
                    }} className="form-control" placeholder="Last Name"/>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
            <div className="row">
                <label className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-3 mb-2">
                    <input type="text" value={username} name="username" onChange={(e) => {
                        inputChange(e)
                    }} className="form-control" placeholder="Username"/>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
            <div className="row">
                <label className="col-sm-2 col-form-label">Public Username</label>
                <div className="col-sm-3 mb-2">
                    <input type="text" value={publicUsername} name="publicUsername" onChange={(e) => {
                        inputChange(e)
                    }} className="form-control" placeholder="How people find you"/>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
            <div className="row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-6 mb-2">
                    <label htmlFor="email" className="col-sm-2 col-form-label email-label">{email}</label>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 mb-2">
                </div>
                <div className="col-sm-4">
                    <button type="button" className="btn btn-primary" onClick={handleSaveButton}>Save</button>
                </div>
                <div className="-sm-3"></div>
            </div>
        </div>
    )

}


function mapStateToProps(state) {
    return {
        email: state.email
    }
}

const connectedRightContent = connect(mapStateToProps, null)(RightContent);

export {connectedRightContent as RightContent};