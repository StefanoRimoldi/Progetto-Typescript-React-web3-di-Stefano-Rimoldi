import { FiXCircle, FiHome } from "react-icons/fi";

const CancelledPage = () => {
    const transactionDetails = { timestamp: new Date().toLocaleString() }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiXCircle className="text-white w-12 h-12" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Transaction Cancelled</h1>
                </div>
                <div className="text-xl text-center font-bold text-red-600 mb-4">
                    {/*{amountPaid ? `${amountPaid.toFixed(6)} ETH` : "Importo non disponibile"}*/}
                </div>
                <div className="text-center">
                    <span className="text-white mb-4">Cancellation Date: {transactionDetails.timestamp}</span>
                </div>

            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <button
                    onClick={() => window.location.href = "/"}
                    className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center">
                    Return to Home
                    <FiHome className="ml-2" />
                </button>
            </div>
        </div >
    );
};

export default CancelledPage;

