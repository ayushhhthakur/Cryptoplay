import React, { useState, useEffect } from 'react';
import { Web3Auth } from "@web3auth/modal";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [web3auth, setWeb3Auth] = useState(null); // State to hold the Web3Auth instance

  useEffect(() => {
    const initWeb3Auth = async () => {
      const web3authInstance = new Web3Auth({
        clientId: "BGoE8AxngSr0_zKxaA-G1TvnMKurkThqobSb6Ugo0U2M9akJMXxSM36nOf4SaYjQFdwf-P4lfFFaDFU-kSWzBX8",
        chainConfig: {
          chainNamespace: "solana",
          chainId: "0x1",
          rpcTarget: "https://api.devnet.solana.com",
        },
      });

      await web3authInstance.initModal();

      setWeb3Auth(web3authInstance); // Store the Web3Auth instance in state
      // Check if the user is already authenticated
      if (web3authInstance.isAuthenticated()) {
        const address = await web3authInstance.getAddress();
        setUserAddress(address);
        setIsLoggedIn(true);
      }
    };

    initWeb3Auth();
  }, []);

  const handleLogin = async () => {
    try {
      await web3auth.login(); // Use the stored web3auth instance
      const address = await web3auth.getAddress();
      setUserAddress(address);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await web3auth.logout(); // Use the stored web3auth instance
      setUserAddress('');
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userAddress}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in with Web3Auth:</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
