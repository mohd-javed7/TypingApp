import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://typingapp-backend.onrender.com/api/auth/login", data);

      const { token, username } = response.data;

      // localStorage (or cookie)
      if(token && username){
        login(token,username);
      }

      alert("Login successful!");
      navigate("/normal-mode")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); //backend error (e.g., Invalid Credentials)
      } else {
        alert("Something went wrong.");
      }
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "minimum 6 characters" } })}
        />
       <p onClick={togglePassword} className="togglePassword">{showPassword?"Hide password ?":"Show password ?"}</p>
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button disabled={isSubmitting} type="submit">
          Log In
        </button>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
