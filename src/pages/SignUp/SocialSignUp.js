import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socialMediaSignup } from './authSlice';

const SocialSignup = () => {
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector((state) => state.auth);

    const handleSocialSignup = (provider) => {
        const authData = {
            provider, // Example: 'google', 'facebook', etc.
            token: 'access_token_from_provider',
        };
        dispatch(socialMediaSignup(authData));
    };

    return (
        <div>
            <h2>Social Media Signup</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {user && <p>Welcome, {user.name}!</p>}

            <button onClick={() => handleSocialSignup('google')}>Sign up with Google</button>
            <button onClick={() => handleSocialSignup('facebook')}>Sign up with Facebook</button>
            {/* Add more social providers as needed */}
        </div>
    );
};

export default SocialSignup;
