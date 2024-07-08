import { useContext, useEffect } from "react";
import { context } from "../App";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isLogin } = useContext(context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) navigate("/");
    }, [isLogin, navigate])


    return isLogin ? children : null;
};

export default ProtectedRoute;