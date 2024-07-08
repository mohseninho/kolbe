import styled from "styled-components";

const StyledHeader = styled.header`
    background: rgba(237, 232, 245, 0.5);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    height: 80px;
    font-size: 1.3rem;
`;

function Header(){
    return (
        <StyledHeader>
            header
        </StyledHeader>
    )
};

export default Header;