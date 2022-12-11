import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-left: 5px;
`;
const Logo = styled.div`
  flex: 1;
  color: #1e266d;
  font-size: 1.55rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuList = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  gap: 35px;
  padding-left: 35px;
`;
const MenuItem = styled.a`
  font-size: 14px;
  color: #1e266d;
  cursor: pointer;
`;
const NavContact = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 30px;
  padding-left: 40px;
`;
const Mobile = styled.div`
  color: #1e266d;
`;
const ContactUs = styled.button`
  width: 100px;
  height: 35px;
  background: #3751ff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>digits:</Logo>
      <MenuList>
        <MenuItem>Homepages</MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>Company</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Blog</MenuItem>
      </MenuList>

      <NavContact>
        <Mobile>+00 123 456 789</Mobile>
        <ContactUs>Contact Us</ContactUs>
      </NavContact>
    </NavbarContainer>
  );
}

export default Navbar;
