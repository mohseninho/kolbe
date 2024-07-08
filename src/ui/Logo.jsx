import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 80px;
`;

function Logo(){
    return (
        <Link to="/">
            <StyledImg src="/cottage.png" alt="kolbe logo" />
        </Link>
    )
};

export default Logo;