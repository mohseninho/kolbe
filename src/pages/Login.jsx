import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { context } from "../App";

import { FAKE_USER } from "../data/FAKE_USER"

const StyledMain = styled.main`
    height: 100vh;
    background-image: url("/background.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    font-size: 1.4rem;
    background: rgba(162, 178, 245, 0.5);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
`;

const StyledH1 = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
    color: var(--color-text-primary);
    margin: 10px 0;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
`;

const StyledLabel = styled.label`
    margin-top: 10px;
    color: var(--color-text-primary);
`;

const StyledButton = styled.button`
    background-color: var(--color-brand-primary);
    padding: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    color: var(--color-text-primary);
    margin-top: 30px;
    transition: all .25s linear;
    &:hover{
        background-color: var(--color-brand-secondary); 
    }
`;


function Login() {
    const {setIsLogin  , setUser} = useContext(context);
    const navigate = useNavigate();

    const [userInfo , setUserInfo] = useState({
        email : "",
        password : ""
    })

    function handleInput(e){
        setUserInfo((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    function LoginFunction(e){
        e.preventDefault();
        if(userInfo.email === FAKE_USER.email && userInfo.password === FAKE_USER.password){
            setIsLogin(true);
            setUser({
                email : userInfo.email,
                password : userInfo.password
            })
            navigate("/dashboard");
        }
    }


    return (
        <StyledMain>
            <StyledForm>
                <StyledH1>Login</StyledH1>
                <StyledLabel htmlFor="emailInput">Email</StyledLabel>
                <StyledInput name="email" onChange={handleInput} id="emailInput" type="text" />
                <StyledLabel htmlFor="passwordInput">Password</StyledLabel>
                <StyledInput name="password" onChange={handleInput} id="passwordInput" type="password" />
                <StyledButton onClick={LoginFunction}>Login</StyledButton>
            </StyledForm>
        </StyledMain>
    )
};

export default Login;