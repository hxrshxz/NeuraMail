import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const containerClass =
  "min-h-screen bg-black flex flex-col items-center justify-center text-white";
const buttonClass =
  "bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-md flex items-center gap-2 border border-zinc-700 hover:cursor-pointer";
const footerClass =
  "absolute bottom-6 text-sm flex flex-col items-center text-zinc-400";
const linkClass = "hover:underline";

const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    flow: "auth-code",
    scope: "https://mail.google.com", // <-- Add this line
    access_type: "offline", // <-- Add this
    prompt: "consent",
    onSuccess: async (response) => {
      const { code } = response;
      try {
        const res = await axios.get(
          `http://localhost:8080/auth/google?code=${code}`
        );
        const { user, access_token } = res.data;
        console.log("User:", user);
        console.log("Access Token:", access_token);
        localStorage.setItem("access_token", access_token);
        // localStorage.removeItem("access_token");
        // Optionally navigate after login
        navigate("/dashboard");
      } catch (err) {
        console.error("Login error:", err);
      }
    },
    onError: (err) => console.error("OAuth Error:", err),
  });

  return (
    <div className={containerClass}>
      <div className="text-3xl font-bold mb-8">Login to Zero</div>

      <button onClick={() => login()} className={buttonClass}>
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </button>

      <div className={footerClass}>
        <a href="/" className="text-white text-lg mb-1 hover:underline">
          Return home
        </a>
        <div className="flex gap-4 text-xs">
          <a href="#" className={linkClass}>
            Terms of Service
          </a>
          <a href="#" className={linkClass}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;