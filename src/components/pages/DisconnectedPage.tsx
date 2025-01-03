
import { FiHome } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisconnectedPage = () => {
    const walletDetails = {
        lastConnected: new Date().toLocaleString(),
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaWallet className="text-white w-12 h-12" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Wallet Disconnected</h1>
                    <p className="text-gray-400">Your wallet has been disconnected from the platform</p>
                </div>
                <div className="text-center text-gray-400">
                    <span>Last Connected: </span>
                    <span className="text-white">{walletDetails.lastConnected}</span>
                </div>
                <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-4">
                    <Link to="/">
                        <button
                        className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                        Return to Home
                        <FiHome className="ml-2" />
                    </button>
                    </Link>
                </div>
            </div >
        </div>
    );
};

export default DisconnectedPage;

