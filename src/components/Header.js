import styled from "styled-components";
import NavbarLogo from "../images/logo.svg";
import HomeIcon from "../images/home-icon.svg";
import SearchIcon from "../images/search-icon.svg";
import WatchList from "../images/watchlist-icon.svg";
import OriginalIcon from "../images/original-icon.svg";
import MovieIcon from "../images/movie-icon.svg";
import SeriesIcon from "../images/series-icon.svg";
const Header = () => {
  return (
    <Navbar>
      <Container>
        <Logo src={NavbarLogo}></Logo>
        <NavbarContent>
          <NavbarItem>
            <NavbarItemIcon src={HomeIcon}></NavbarItemIcon>
            <NavbarItemLink href="#home">HOME</NavbarItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon src={SearchIcon}></NavbarItemIcon>
            <NavbarItemLink href="#home">SEARCH</NavbarItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon src={WatchList}></NavbarItemIcon>
            <NavbarItemLink href="#home">WATCHLIST</NavbarItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon src={OriginalIcon}></NavbarItemIcon>
            <NavbarItemLink href="#home">ORIGINALS</NavbarItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon src={MovieIcon}></NavbarItemIcon>
            <NavbarItemLink href="#home">MOVIES</NavbarItemLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon src={SeriesIcon}></NavbarItemIcon>
            <NavbarItemLink href="#home">SERIES</NavbarItemLink>
          </NavbarItem>
        </NavbarContent>
      </Container>
      <LogInButton>LOGIN</LogInButton>
    </Navbar>
  );
};

const Navbar = styled.section`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  position: sticky;
  top: 0px;
  background-color: var(--main-background-color);
`;

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const NavbarContent = styled.ul`
  display: flex;
  padding: 0px;
  list-style-type: none;
  padding: 0 20px;
`;

const NavbarItem = styled.li`
  padding: 0 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const NavbarItemLink = styled.a``;

const NavbarItemIcon = styled.img`
  width: 40px;
  padding: 0 5px;
`;

const LogInButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--main-text-color);
  color: var(--main-text-color);
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition: 0.3s;

  &:hover {
    background-color: var(--main-text-color);
    color: var(--main-background-color);
  }
`;

export default Header;
