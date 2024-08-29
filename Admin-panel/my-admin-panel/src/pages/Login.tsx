import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="min-h-full flex flex-col justify-center items-center bg-red-950 rounded-md">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                <h2 className="text-3xl font-extrabold text-center">Login</h2>

                <div className="ekg-line"></div> {/* EKG Çizgisi */}

                <form className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email address</label>
                        <input id="email" name="email" type="email" required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                   border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input id="password" name="password" type="password" required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                   border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
                   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
