import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "./Components/Dashboard";
import { Sidebar } from "./Components/SideBar";
import { TopBar } from "./Components/TopBar";
import { EmailList } from "./Components/EmailList";
import { EmailView } from "./Components/EmailView";

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

  const Layout = () => {
    return (
      <div className="flex h-screen">
        {/* Sidebar stays fixed */}
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBar />
          <div className="overflow-y-scroll overflow-hidden hide-scroll flex-1">
            <EmailList />
          </div>
        </div>
        <EmailView />
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={googleOAuthWrapper()} />
        <Route path="/dashboard" element={Layout()} />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
