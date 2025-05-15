import React from 'react';
import Logo from '../../components/Logo';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
             <Logo/>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-600 placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-600 placeholder:text-gray-400"
          />

          <div className="flex items-center text-sm text-gray-500">
            <input type="checkbox" className="mr-2" />
            Remember me
          </div>

          <button
            type="submit"
            className="w-full bg-[#a7c6ba] text-white py-2 rounded text-sm font-semibold"
          >
            Sign in
          </button>

          <div className="text-center mt-1">
            <a href="#" className="text-xs text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{' '}
            <a
              href="#"
              className="ml-1 px-3 py-1 border border-[#a7c6ba] text-[#a7c6ba] rounded hover:bg-[#a7c6ba] hover:text-white transition"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
