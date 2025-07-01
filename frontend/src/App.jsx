import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


function App() {
  const [count, setCount] = useState(0);

  const googleOAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <Login />
      </GoogleOAuthProvider>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={googleOAuthWrapper()} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
