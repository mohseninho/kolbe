import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const StyledSideBar = styled.aside`
    background: rgba(237, 232, 245, 0.5);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    grid-row: 1 / -1;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 40px 10px;
`;

const StyledUl = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color: #595959;
    font-size: 1.4rem;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const StyledSpan = styled.span`
    margin-left: 10px;
    text-transform: capitalize;
`;

function Sidebar() {
    return (
        <StyledSideBar>
            <Logo />
            <StyledUl>
                <li>
                    <StyledNavLink to='/dashboard'>
                        <HiOutlineHome />
                        <StyledSpan>
                            home
                        </StyledSpan>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/bookings'>
                        <HiOutlineCalendarDays />
                        <StyledSpan>
                            bookings
                        </StyledSpan>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/cabins'>
                        <HiOutlineHomeModern />
                        <StyledSpan>
                            cabins
                        </StyledSpan>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/users'>
                    <HiOutlineUsers />
                        <StyledSpan>
                            users
                        </StyledSpan>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to='/settings'>
                    <HiOutlineCog6Tooth />
                        <StyledSpan>
                            dashboard
                        </StyledSpan>
                    </StyledNavLink>
                </li>
            </StyledUl>
        </StyledSideBar>
    )
};

export default Sidebar;