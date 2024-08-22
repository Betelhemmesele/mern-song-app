/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #3b1b1b;
  padding: 10px 20px;
  display: flex;
  justify-content: center; /* Aligns items to the right */
  align-items: center;
  position: fixed; /* Makes the navbar fixed */
  top: 0; /* Positions it at the top */
  right: 0; /* Positions it to the right */
  width: 100%; /* Stretches the navbar across the width of the screen */
  z-index: 1000; /* Ensures the navbar stays on top */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 40px; /* Adds space between the links */
  font-size: 18px;
  font-family: 'Dancing Script';
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavLink to="/songs">View Songs</NavLink>
      <NavLink to="/add-song">Add Song</NavLink>
      <NavLink to="/statistics">View Statistics</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
