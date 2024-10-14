import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { socialMediaSignup } from '../../redux/actions/authActions';

const FacebookAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Initialize Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID',
                cookie: true,
                xfbml: true,
                version: 'v12.0',
            });
        };
    }, []);

    const handleFacebookLogin = () => {
        window.FB.login(
            function (response) {
                if (response.authResponse) {
                    const token = response.authResponse.accessToken;
                    const authData = {
                        provider: 'facebook',
                        token: token,
                    };
                    dispatch(socialMediaSignup(authData));
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },
            { scope: 'public_profile,email' }
        );
    };

    return (
        <div>
            <h2>Social Media Signup</h2>
            <button onClick={handleFacebookLogin}>Sign up with Facebook</button>
        </div>
    );
};

export default FacebookAuth;
