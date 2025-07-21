import React  from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  
    const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignup = async (data) => {
    try {
      const response = await axios.post("https://typingapp-backend.onrender.com/api/auth/signup", data);
      alert("Signup successful! Now log in.");
      console.log(response.data); // Optional: log user data/token
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed.");
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSubmit(handleSignup)}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <p onClick={togglePassword} className="togglePassword">{showPassword?"Hide password ?":"Show password ?"}</p>

        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          Create Account
        </button>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
