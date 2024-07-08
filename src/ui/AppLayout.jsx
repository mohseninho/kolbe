import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
    background-image: url("/background.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </StyledAppLayout>
    )
};

export default AppLayout;