// @ts-nocheck
import { FiXCircle, FiHome, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const CancelledPage = () => {
    const location = useLocation();
    const transactionDetails = {
        timestamp: new Date().toLocaleString(),
        reason: location.state?.reason || "User cancelled the transaction",
    };

    const detectNetwork = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const network = await provider.getNetwork();
                return network.name;
            } catch (error) {
                console.error("Unknown Network:", error);
                return "Unknown Network";
            }
        } else {
            console.warn("MetaMask not available.");
            return "MetaMask not available";
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiXCircle className="text-white w-12 h-12" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Transaction Cancelled</h1>
                </div>
                <div className="text-xl text-center font-bold text-red-600 mb-4">

                    {transactionDetails.reason}
                </div>
                <div className="text-center text-white">
                    <span>Cancellation Date: {transactionDetails.timestamp}</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-8">
                <Link to="/checkout">
                    <button className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                        Return to Checkout Page
                        <FiShoppingCart className="ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CancelledPage;
