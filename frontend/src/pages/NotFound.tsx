import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-bold text-white mt-4 mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
            >
                <Home size={20} />
                Back to Home
            </button>
        </div>
    );
}
