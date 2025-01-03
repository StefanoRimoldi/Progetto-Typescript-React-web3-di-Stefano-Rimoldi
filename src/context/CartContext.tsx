
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/product';
import { ethers } from 'ethers';

const CartContext = createContext<any>(null);

export const CartProvider: React.FC = ({ children }) => {

    const [cart, setCart] = useState<Product[]>(() => {

        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<number | null>(null);


    const addToCart = (product: Product) => {
        if (!cart.some((item) => item.id === product.id)) {
            setCart((prevCart) => [...prevCart, product]);
        }
    };


    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };


    const totalItems = cart.length;


    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]);
                fetchBalance(accounts[0]);


                window.ethereum.on("accountsChanged", (accounts: string[]) => {
                    setAccount(accounts[0]);
                    fetchBalance(accounts[0]);
                });
            } catch (err) {
                console.error("Errore nella connessione a MetaMask:", err);
            }
        } else {
            alert("Installa MetaMask per continuare.");
        }
    };


    const fetchBalance = async (userAccount: string) => {
        if (window.ethereum) {
            const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID");
            const balance = await provider.getBalance(userAccount);
            const formattedBalance = ethers.formatEther(balance);
            setBalance(parseFloat(formattedBalance).toFixed(2));
        }
    };


    const disconnectWallet = () => {
        setAccount(null);
        setBalance(null);
    };


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    fetchBalance(accounts[0]);
                }
            });

            window.ethereum.on("accountsChanged", (accounts: string[]) => {
                setAccount(accounts[0]);
                fetchBalance(accounts[0]);
            });
        } else {
            alert("Installa MetaMask per continuare.");
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                totalItems,
                totalPrice,
                account,
                balance,
                connectWallet,
                disconnectWallet
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
