import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { socialMediaSignup } from '../../redux/actions/authActions';

const GoogleAuth = () => {
    const dispatch = useDispatch();

    const handleGoogleSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        const authData = {
            provider: 'google',
            token: token,
        };
        dispatch(socialMediaSignup(authData));
    };

    const handleGoogleFailure = () => {
        console.log('Google sign-in failed');
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div>
                <h2>Social Media Signup</h2>
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default GoogleAuth;
