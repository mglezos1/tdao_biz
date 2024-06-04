// src/components/NftHoldersList.js
import React from 'react';
import './NftHoldersList.css';

const NftHoldersList = ({ holders }) => {
  return (
    <div className="holders-list-container">
      <h2 className="holders-list-heading">NFT Holders</h2>
      <div className="holders-list">
        {holders.map((holder, index) => (
          <div key={index} className="holder-card">
            <img src={holder.profileImage} alt={`${holder.businessName} Profile`} className="holder-image" />
            <h3 className="holder-business-name">{holder.businessName}</h3>
            <p className="holder-bio">{holder.bio}</p>
            <p className="holder-contact">{holder.contactNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftHoldersList;
