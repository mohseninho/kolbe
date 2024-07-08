import styled from "styled-components";

const StyledSideBar = styled.aside`
    background-color: var(--color-brand-new);
    grid-row: 1 / -1;
`;
function Sidebar() {
    return (
        <StyledSideBar>
            sidebar
        </StyledSideBar>
    )
};

export default Sidebar;