// src/components/MintForm.js
import React, { useState } from 'react';
import './MintForm.css'; // Import CSS file for MintForm styling

const MintForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    bio: '',
    profileImage: null,
    contactNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or IPFS
    console.log(formData);
    // Reset form fields
    setFormData({
      businessName: '',
      bio: '',
      profileImage: null,
      contactNumber: '',
    });
  };

  const connectMetaMask = async () => {
    // Your MetaMask connection logic here
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request user permission to connect
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
      } else {
        console.error('MetaMask extension not detected');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div className="mint-form-container">
      <h2 className="mint-form-heading">Mint NFT</h2>
      <button className="connect-metamask-button" onClick={connectMetaMask}>Connect with MetaMask</button>
      <form className="mint-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName" className="form-label">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio" className="form-label">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="form-input"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <small>Format: 123-456-7890</small>
        </div>
        <div className="form-group">
          <label htmlFor="profileImage" className="form-label">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleImageChange}
            className="form-input"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="mint-button">Mint NFT</button>
      </form>
    </div>
  );
};

export default MintForm;
