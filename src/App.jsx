import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";

export const context = createContext(null);
function App() {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <context.Provider value={{ isLogin  , setIsLogin , user, setUser}}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/bookings" element={<Bookings />} />
                            <Route path="/cabins" element={<Cabins />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/settings" element={<Settings />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </context.Provider>
            </BrowserRouter>
        </>
    )
};

export default App;