import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserId }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        phone:phone,
        password:password
      });
      navigate(`/tasks`);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/changepassword")}
          className="w-full text-blue-600 mt-4 text-sm hover:underline"
        >
          Forgot Password?
        </button>

        <div className="flex items-center justify-center my-4">
          <span className="border-t w-1/3 border-gray-300"></span>
          <span className="text-sm text-gray-500 mx-2">or</span>
          <span className="border-t w-1/3 border-gray-300"></span>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            Don't have an account?{" "}
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setUserId }) => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Validate input before submission
//   const validateInput = () => {
//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       return "Please enter a valid phone number starting with 6-9 and 10 digits long.";
//     }
//     if (password.length < 6) {
//       return "Password must be at least 6 characters long.";
//     }
//     return null;
//   };

//   // Handle login submission
//   const handleLogin = async () => {
//     const validationError = validateInput();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         phone,
//         password,
//       });

//       // Update user ID in the parent state and navigate to the task page
//       setUserId(response.data.userId);
//       navigate(`/tasks/${response.data.userId}`);
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials. Please try again.");
//     }
//   };

//   // Reset error state on input change
//   const handleChange = (setter) => (e) => {
//     setter(e.target.value);
//     setError(""); // Clear error when user modifies input
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

//         {error && (
//           <p className="text-red-600 text-sm text-center mb-4">{error}</p>
//         )}

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={handleChange(setPhone)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handleChange(setPassword)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => navigate("/changepassword")}
//           className="w-full text-blue-600 mt-4 text-sm hover:underline"
//         >
//           Forgot Password?
//         </button>

//         <div className="flex items-center justify-center my-4">
//           <span className="border-t w-1/3 border-gray-300"></span>
//           <span className="text-sm text-gray-500 mx-2">or</span>
//           <span className="border-t w-1/3 border-gray-300"></span>
//         </div>

//         <div className="text-center">
//           <p className="text-gray-600 text-sm mb-2">
//             Don't have an account?{" "}
//           </p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;