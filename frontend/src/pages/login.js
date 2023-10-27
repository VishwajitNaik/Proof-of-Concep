// pages/login.js
import Link from 'next/link';
import axios from 'axios'; // Import Axios to make HTTP requests

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and page reload

    // Replace 'your-backend-url' with the actual URL of your backend
    const backendUrl = 'http://login/api/users'; 

    // Fetch user inputs from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Make a POST request to your backend for login
      const response = await axios.post(backendUrl, { email, password });

      // Handle successful login, e.g., store authentication token and redirect
      console.log('Login successful:', response.data);

      // Replace '/dashboard' with the URL to your dashboard or user profile page
      window.location.href = '/dashboard';
    } catch (error) {
      // Handle login errors
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember Me</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 focus:outline-none">
            Sign In
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          New to myApp?{' '}
          <Link href="/signup">
            <a className="text-blue-500 hover:underline">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
