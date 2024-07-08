import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { context } from "../App";

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

const StyledBoxMessage = styled.div`
    color: var(--color-text-primary);
    padding: 30px;
    border-radius: 15px;
    width: 800px;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(162, 178, 245, 0.5);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
`;

const StyledButton = styled.button`
    background-color: var(--color-brand-primary);
    padding: 10px;
    border: none;
    border-radius: 15px;
    width: 100px;
    font-size: 1rem;
    cursor: pointer;
    color: var(--color-text-primary);
    margin-top: 30px;
    transition: all .25s linear;
    &:hover{
        background-color: var(--color-brand-secondary); 
    }
`;


function Home() {
    const { isLogin } = useContext(context);
    const navigate = useNavigate();

    return (
        <StyledMain>
            <StyledBoxMessage>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis enim consectetur cum sunt perferendis, quae laborum, dignissimos, suscipit dolores voluptatum eveniet excepturi officiis. Beatae error id magnam eligendi. Explicabo minima molestiae error, dolor quidem non asperiores maiores facere nemo.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ut voluptates dignissimos doloremque beatae quod ab perferendis assumenda quidem ullam eveniet saepe aut magni. Ipsa error aliquam quia autem repudiandae?</p>
                <StyledButton onClick={() => navigate(isLogin ? "/dashboard" : "/login")}>Lets Go</StyledButton>
            </StyledBoxMessage>
        </StyledMain>
    )
};

export default Home;