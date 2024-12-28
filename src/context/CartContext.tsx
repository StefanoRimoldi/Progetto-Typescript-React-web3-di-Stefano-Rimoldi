import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/product';
import { ethers } from 'ethers';

// Definizione dei tipi per il contesto
interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    totalItems: number;
    totalPrice: number;
    account: string | null;
    balance: string | null;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

// Creazione del contesto
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    // Aggiungi un prodotto al carrello
    const addToCart = (product: Product) => {
        if (!cart.some((item) => item.id === product.id)) {
            setCart((prevCart) => [...prevCart, product]);
        }
    };

    // Rimuovi un prodotto dal carrello
    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Calcola il totale degli articoli nel carrello
    const totalItems = cart.length;

    // Calcola il totale del carrello
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Connessione a MetaMask
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]); // Imposta l'account connesso
                fetchBalance(accounts[0]); // Recupera il saldo dell'account
            } catch (err) {
                console.error("Errore nella connessione a MetaMask:", err);
            }
        } else {
            alert("Installa MetaMask per continuare.");
        }
    };

    // Recupera il saldo dell'account
    const fetchBalance = async (userAccount: string) => {
        if (window.ethereum) {
            const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID");
            const balance = await provider.getBalance(userAccount);
            const formattedBalance = ethers.formatEther(balance);
            setBalance(parseFloat(formattedBalance).toFixed(2));
        }
    };

    // Disconnessione dal wallet
    const disconnectWallet = () => {
        setAccount(null);
        setBalance(null);
    };

    // Usa useEffect per controllare automaticamente se l'utente è connesso al caricamento della pagina
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
                disconnectWallet,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve essere usato all'interno di un CartProvider");
    }
    return context;
};
