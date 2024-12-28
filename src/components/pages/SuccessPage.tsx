
import { useLocation } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi";


const SuccessPage = () => {
    const location = useLocation();
    const amountPaid = location.state?.amount;
    const transactionDetails = { timestamp: new Date().toLocaleString() }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
            <div className="max-w-3xl mx-auto text-center">
                <div className='bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <FiCheckCircle className="text-white w-12 h-12" />
                </div>
                <h2 className="text-3xl font-semibold mb-4">Payment completed successfully!</h2>
                <p className="text-lg mb-6">You have paid a total of:</p>
                <div className="text-xl font-bold text-green-600 mb-4">
                    {amountPaid ? `${amountPaid.toFixed(6)} ETH` : "Amount not available"}
                </div>
                <div className="text-gray-400">
                    <span>Transaction Date: {transactionDetails.timestamp}</span>
                </div>
                <div className="mt-8">
                    <button
                        onClick={() => window.location.href = "/"}
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        Return to homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
