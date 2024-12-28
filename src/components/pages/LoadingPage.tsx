
const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin mb-4 mx-auto"></div>
                <h1 className="text-2xl font-bold text-white mb-2">Loading...</h1>
                <p className="text-gray-400">Please wait while we process your request</p>
            </div>
        </div>
    );
};

export default LoadingPage;