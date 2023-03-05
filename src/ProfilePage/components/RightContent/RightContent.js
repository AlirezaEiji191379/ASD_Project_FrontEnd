import React, {Component} from 'react';
import './style.css';

export class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                publicUsername: '',
                firstName: '',
                lastName: '',
                email: 'example@rama.com',
            },
            errors: {
                user: {
                    firstName: 'Enter First Name',
                    telephone: 'Enter Telephone',
                    email: 'Email is not valid!',
                    address1: 'Enter address1',
                    address2: 'Enter address2',
                    interests: 'Enter your Interests'
                }
            },
            validForm: false,
            submitted: false
        }
    }

    inputChange = (event) => {
        const {name, value} = event.target;
        const user = this.state.user;
        user[name] = value;
        this.setState({user});
    }
    render() {
        const {
            firstName, lastName, username, publicUsername,
            email
        } = this.state.user;
        const {submitted} = this.state;
        return (
            <div className="rightPanel">
                <div className="row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={firstName} name="firstName" onChange={(e) => {
                            this.inputChange(e)
                        }} className="form-control" placeholder="First Name"/>
                        {submitted && this.state.errors.user.firstName.length > 0 &&
                            <span className='error'>{this.state.errors.user.firstName}</span>}
                    </div>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={lastName} name="lastName" onChange={(e) => {
                            this.inputChange(e)
                        }} className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={username} name="username" onChange={(e) => {
                            this.inputChange(e)
                        }} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <label className="col-sm-2 col-form-label">Public Username</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={publicUsername} name="publicUsername" onChange={(e) => {
                            this.inputChange(e)
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
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                    <div className="-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default RightContent;