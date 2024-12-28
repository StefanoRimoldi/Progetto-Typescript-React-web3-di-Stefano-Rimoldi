import { useState, useEffect } from "react";
import { FaWallet, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ethers } from "ethers";


declare global {
    interface Window {
        ethereum: any;
    }
}

const Navbar = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<number | null>(null);
    const [cartItems, setCartItems] = useState<any[]>([]);

    const navigate = useNavigate();


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

    const { totalItems } = useCart();


    const fetchBalance = async (userAccount: string) => {
        if (window.ethereum) {
            const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/bb65298af67c444d982f6c2ff4f28085"); // Usa il tuo Project ID
            const balance = await provider.getBalance(userAccount);


            const formattedBalance = ethers.formatEther(balance);
            setBalance(parseFloat(formattedBalance).toFixed(2)); // 2 decimali
        }
    };



    useEffect(() => {
        if (window.ethereum) {

            window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    fetchBalance(accounts[0]);
                } else {
                    console.log("Non c'è nessun account connesso");
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

    const addToCart = (item: any) => {
        console.log("Item added to cart:", item);
        setCartItems((prev) => [...prev, item]);
    };


    const handleDisconnect = () => {
        setAccount("");
        setBalance("0");
        navigate("/disconnected");
    };

    return (
        <nav className="w-full bg-gray-800 p-4 top-0 left-0 z-10 shadow-lg mb-4 rounded-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 hidden md:flex">
                    <Link to="/">
                        <img
                            src="/images/SmartFarm.png"
                            alt="Logo"
                            className="h-10 md:h-16 object-contain cursor-pointer"
                        />
                    </Link>
                    <h1 className="text-xl font-bold text-white"></h1>
                </div>

                <div className="flex items-center space-x-4 justify-end w-full">
                    {!account ? (
                        <button
                            onClick={connectWallet}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                            aria-label="Connect MetaMask wallet"
                        >
                            <FaWallet className="text-xl lg:mr-2" />
                            <span className="hidden lg:inline">Connect Wallet</span>
                        </button>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-700 px-4 py-2 rounded-lg">
                                <p className="text-gray-300 text-sm">Balance</p>
                                <p className="text-white font-semibold">{balance} ETH</p>
                            </div>
                            <div className="bg-gray-700 px-4 py-2 rounded-lg">
                                <p className="text-gray-300 text-sm">Account</p>
                                <p className="text-white font-semibold">
                                    {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
                                </p>
                            </div>

                            <button
                                onClick={handleDisconnect}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                                aria-label="Disconnect MetaMask wallet"
                            >
                                <FaSignOutAlt className="text-xl lg:mr-2" />
                                <span className="hidden lg:inline">Disconnect</span>
                            </button>
                        </div>
                    )}

                    <div className="relative">
                        <Link to="/checkout">
                            <FaShoppingCart className="text-white text-2xl cursor-pointer" />
                        </Link>
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
