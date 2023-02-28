import React, {Component} from 'react';
import './style.css';
import {formatPhoneNumber, isValidEmail} from "./utils";

export class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
                address: 'Home',
                address1: '',
                address2: '',
                interests: [],
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

    componentDidMount() {
        if (this.props.profile) {
            this.setState({user: this.props.profile});
            if (this.props.profile.email) {
                this.resetErrorMsg();
            }
        }
    }

    validationErrorMessage = (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
                break;
            case 'email':
                errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
                break;
            case 'telephone':
                errors.user.telephone = value.length < 1 && value.length > 10 ? 'Enter valid telephone number' : '';
                break;
            case 'address1':
                errors.user.address1 = value.length < 1 ? `Enter ${this.state.user.address} address1` : '';
                break;
            case 'address2':
                errors.user.address2 = value.length < 1 ? `Enter ${this.state.user.address} address2` : '';
                break;
            default:
                break;
        }

        this.setState({errors});
    }

    inputChange = (event) => {
        let telphone = ''
        const {name, value} = event.target;
        const user = this.state.user;
        if (name === 'telephone') {
            telphone = formatPhoneNumber(value);
            user[name] = telphone;
        } else {
            user[name] = value;
        }
        this.setState({user});
        this.validationErrorMessage(event);
    }
    onChangeAddress = (event) => {
        const user = this.state.user;
        user['address'] = event.target.value;
        this.setState({user});
    }
    resetErrorMsg = () => {
        let errors = this.state.errors;
        errors.user.firstName = ''
        errors.user.telephone = ''
        errors.user.email = ''
        errors.user.address1 = ''
        errors.user.address2 = ''
        errors.user.interests = ''
        this.setState({errors});
    }

    render() {
        const {
            firstName, lastName,
            email, telephone, address, address1, address2
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
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6 mb-2">
                        <input type="email" value={email} name="email" onChange={(e) => {
                            this.inputChange(e)
                        }} className="form-control" id="email" placeholder="example@rama.com"/>
                        {submitted && this.state.errors.user.email.length > 0 &&
                            <span className='error'>{this.state.errors.user.email}</span>}
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="telephone" className="col-sm-2 col-form-label">Tel</label>
                    <div className="col-sm-6 mb-2">
                        <input type="text" pattern="[0-9]" maxLength="14" value={telephone} name="telephone"
                               onChange={(e) => {
                                   this.inputChange(e)
                               }} className="form-control" id="telephone" placeholder="(212)477-1000"/>
                        {submitted && this.state.errors.user.telephone.length > 0 &&
                            <span className='error'>{this.state.errors.user.telephone}</span>}
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-6 mb-2">
                        <select className="custom-select mb-2" value={address} id="inlineFormCustomSelect"
                                onChange={this.onChangeAddress}>
                            <option value="Home">Home</option>
                            <option value="Company">Company</option>
                        </select>
                        <div className="row col-sm-12">
                            <div className="col-sm-5 mr-sm-1 mb-2">
                                <textarea className="form-control" name="address1" rows="3"
                                          placeholder={address + ' Address1'} value={address1}
                                          onChange={this.inputChange}></textarea>
                                {submitted && this.state.errors.user.address1.length > 0 &&
                                    <span className='error'>{this.state.errors.user.address1}</span>}
                            </div>
                            <div className="col-sm-5 mr-sm-1 mb-2">
                                <textarea className="form-control" name="address2" rows="3"
                                          placeholder={address + ' Address2'} value={address2}
                                          onChange={this.inputChange}></textarea>
                                {submitted && this.state.errors.user.address2.length > 0 &&
                                    <span className='error'>{this.state.errors.user.address2}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 mb-2">
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="button">Save</button>
                    </div>
                    <div className="-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default RightContent;