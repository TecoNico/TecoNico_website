import React, { useState } from 'react';
import axios from 'axios';
import shield from '../../Assets/icons/mobile.png'
import './alexaAuth.css'

function GoogleHomeAuth() {
  const [verificationCode,setVerificationCode]=useState('')

  function useQueryParams() {
    // Get the current URL's search parameters
    const queryParams = new URLSearchParams(window.location.search);
  
    // Create an object to store the parsed query parameters
    const params = {};
  
    // Loop through the search parameters and populate the params object
    queryParams.forEach((value, key) => {
      params[key] = value;
    });
  
    return params;
  }

  const queryParams = useQueryParams();

  const handleApiCall = () => {
    
    if (!verificationCode) {
      alert('Please enter a valid authentication code.');
      return;
    }

    // Make an API call using Axios
    axios.post(`https://algodive.com/iot/googlehome/authenticateVerificationcode`,{
      verificationCode: verificationCode
    })
      .then((response) => {
        const googleAccessCode = response?.data?.googleAccessCode
        const url = `${queryParams.redirect_uri}?state=${queryParams.state}&code=${googleAccessCode}`
        window.location.href = url;

      })
      .catch((error) => {
        // Handle API call errors
        console.error('API call error:', error);
      });
  };

  return (
    <div className='main-container'>
        <div className='card text-center'>
          <div className='card-header p-5'>
            <img src={shield} />
      <h1>Verification Code</h1>
      <p>Please enter the code from the app to link your account with Google Home.</p>
      </div>
      <input
      inputStyle='input'
      containerStyle="input-field"
      value={verificationCode}
      shouldAutoFocus
      onChange={(e)=>{setVerificationCode(e.target.value)}}
    />
    {/* <p className='incorrect'>Incorrect code, Please try again.</p> */}
      <div className='verify-button'>
      <button onClick={handleApiCall} className='btn btn-success'>Verify</button>
      </div>
      </div>

    </div>
  );
}

export default GoogleHomeAuth;
