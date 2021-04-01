import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/signup';

const SignUpPage = ({
    createUser
}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const updateUsername = (e) => setUsername(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);
    const updatePasswordCheck = (e) => setPasswordCheck(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            username,
            email,
            imageUrl,
            password,
            passwordCheck,
        };

        createUser(payload);
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setUsername('');
        setEmail('');
        setImageUrl('');
        setPassword('');
        setPasswordCheck('');
    };

    return (
        <section className="new-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={updateUsername} />
                <input
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={updateEmail} />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={updatePassword} />
                <input
                    type="text"
                    placeholder="Password"
                    required
                    value={passwordCheck}
                    onChange={updatePasswordCheck} />
                <button type="submit">Sign Up</button>
                <button type="button" onClick={handleCancelClick}>Clear</button>
            </form>
        </section>
    );
};

const mapStateToProps = state => {
    { }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: data => dispatch(createUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
