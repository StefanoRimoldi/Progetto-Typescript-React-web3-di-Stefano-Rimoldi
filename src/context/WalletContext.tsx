import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Creiamo un contesto per la connessione del wallet
const WalletContext = createContext<any>(null);

// Provider per WalletContext
export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
    const [userAddress, setUserAddress] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);

    // Funzione per connettersi al wallet
    const connectWallet = async () => {
        if (window.ethereum) {
            const ethProvider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await ethProvider.listAccounts();
            if (accounts.length > 0) {
                setIsConnected(true);
                setProvider(ethProvider);
                setUserAddress(accounts[0]);
            } else {
                alert('Nessun account trovato. Assicurati di aver effettuato il login nel wallet.');
            }
        } else {
            alert('Ethereum wallet non trovato. Installa MetaMask o un altro wallet compatibile.');
        }
    };

    // Verifica la connessione al wallet all'avvio
    useEffect(() => {
        const checkConnection = async () => {
            if (window.ethereum) {
                const ethProvider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await ethProvider.listAccounts();
                if (accounts.length > 0) {
                    setIsConnected(true);
                    setProvider(ethProvider);
                    setUserAddress(accounts[0]);
                }
            }
        };
        checkConnection();
    }, []);

    return (
        <WalletContext.Provider value={{ isConnected, userAddress, connectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

// Hook per usare il contesto
export const useWallet = () => useContext(WalletContext);
