import Link from 'next/link';
import axios from 'axios'; // Import Axios for making HTTP requests

const SignupPage = () => {
  const handleSignup = async (e) => {
    e.preventDefault();

    const backendUrl = 'http://register/api/users'; // Replace with your actual backend URL

    // Fetch user inputs from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Make a POST request to your backend for registration
      const response = await axios.post(backendUrl, { email, password });

      // Handle successful registration, e.g., redirect to login page
      console.log('Registration successful:', response.data);

      // Redirect to your login page or any other appropriate route
      window.location.href = '/login';
    } catch (error) {
      // Handle registration errors
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-lg p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-lg p-2" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 focus:outline-none">
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login">
            <a className="text-blue-500 hover:underline">Sign In</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
