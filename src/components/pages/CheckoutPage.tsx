// @ts-nocheck

import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import LoadingPage from './LoadingPage';

const CheckoutPage = () => {
    const { cart, removeFromCart } = useCart();
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
    const [userAddress, setUserAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState('');
    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const contractAddress = '0x56427f1EC83e7c062543cd5E1f625f009dFE613f';
    const PaymentProcessorABI = [{
        "inputs": [],
        "name": "pay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "contractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "recipient",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }];

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.totalPrice || 0), 0);
    };

    const totalPrice = calculateTotalPrice();

    useEffect(() => {
        const checkConnection = async () => {
            if (window.ethereum) {
                const ethProvider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await ethProvider.listAccounts();

                if (accounts.length > 0) {
                    setIsConnected(true);
                    setProvider(ethProvider);

                    const signer = await ethProvider.getSigner();
                    const address = await signer.getAddress();
                    setUserAddress(address);

                    const paymentContract = new ethers.Contract(contractAddress, PaymentProcessorABI, signer);
                    setContract(paymentContract);
                }
            }
        };

        checkConnection();
    }, []);

    const handleCheckout = async () => {
        if (!isConnected) {
            setError('Per favore connettiti al tuo wallet prima di procedere.');
            return;
        }

        if (!contract || typeof contract.pay !== 'function') {
            setError('Contratto non valido.');
            return;
        }

        setIsLoading(true);

        try {
            const tx = await contract.pay({ value: ethers.parseEther(totalPrice.toString()) });
            console.log(`Transazione inviata: ${tx.hash}`);
            await tx.wait();
            alert('Transazione completata con successo!');
            navigate('/success', { state: { amount: totalPrice } });
        } catch (error) {
            if (error instanceof Error) {
            setError(error.message);
            }
            navigate('/cancelled');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <LoadingPage />;
    }


    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
                    <div className="absolute top-6 right-6 flex items-center text-gray-400">
                        <FiShoppingCart size={24} />
                        <span className="ml-2">{cart.length} items</span>
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-6">Shopping Cart</h2>

                    {cart.length > 0 ? (
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center p-4 rounded-lg shadow-sm bg-gray-700">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <span className="text-white font-medium">{item.name}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm md:text-lg font-semibold text-white">
                                            {item.totalPrice.toFixed(6)} ETH
                                        </span>
                                        <button
                                            className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="bg-gray-700 p-6 rounded-xl shadow-xl border-2 border-gray-600 text-center">
                            <FiShoppingCart className="w-40 h-40 mx-auto mb-4 text-gray-400" />
                            <p className="text-gray-400 pb-2">Your cart is empty!</p>
                            <Link to="/">
                                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
                                    Go to the product list
                                </button>
                            </Link>
                        </div>
                    )}

                    {cart.length > 0 && (
                        <div className="mt-6 flex justify-between items-center">
                            <div className="text-lg font-semibold text-white">
                                <span>Total</span>
                            </div>
                            <div className="text-lg font-bold text-green-600">
                                <span>{totalPrice.toFixed(6)} ETH</span>
                            </div>
                        </div>
                    )}

                    {cart.length > 0 && (
                        <div className="mt-6">
                            <button
                                onClick={handleCheckout}
                                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                            >
                                Proceed to Checkout
                            </button>
                            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                            <Link to="/">
                                <button className="mt-2 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-300">
                                    Go to the product list
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
