// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MintForm from './components/MintForm';
import NftHoldersList from './components/NftHoldersList';
import './App.css';

function App() {
  // Prepopulate holders with dummy data
  const [holders, setHolders] = useState([
    {
      businessName: 'Crypto Cafe',
      bio: 'A cozy place to enjoy coffee and learn about crypto.',
      profileImage: 'https://via.placeholder.com/150/0000FF/808080?text=Crypto+Cafe',
      contactNumber: '123-456-7890',
    },
    {
      businessName: 'Blockchain Bakery',
      bio: 'Fresh baked goods and blockchain education.',
      profileImage: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Blockchain+Bakery',
      contactNumber: '234-567-8901',
    },
    {
      businessName: 'NFT Gallery',
      bio: 'Showcasing unique digital art and NFTs.',
      profileImage: 'https://via.placeholder.com/150/FFFF00/000000?text=NFT+Gallery',
      contactNumber: '345-678-9012',
    },
    {
      businessName: 'Smart Contract Solutions',
      bio: 'Innovative smart contract development services.',
      profileImage: 'https://via.placeholder.com/150/00FF00/000000?text=Smart+Contract+Solutions',
      contactNumber: '456-789-0123',
    },
  ]);

  // Function to add a holder (for the form submission)
  const addHolder = (holder) => {
    setHolders([...holders, holder]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Mint NFT</Link></li>
            <li><Link to="/holders">NFT Holders</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="page-heading">NFT Minting Page</h1>
                <MintForm addHolder={addHolder} />
              </>
            }
          />
          <Route
            path="/holders"
            element={<NftHoldersList holders={holders} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
