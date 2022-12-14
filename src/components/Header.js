import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-scroll";

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: ${(props) => (props.two ? "fixed" : "static")};
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.4s;

  @media screen and (max-width: 650px) {
    height: ${(props) => (props.show ? "273px" : "57px")};
  }
`;

const InnerHeader = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  padding: 5px 10px;
  align-items: flex-start;
  justify-content: ${(props) => (props.two ? "space-between" : "center")};
  transition: all 0.4s;
  height: ${(props) => (props.show ? "273px" : "57px")};

  @media screen and (max-width: 650px) {
    width: 100%;
    position: fixed;
    justify-content: space-between;
  }
`;

const HeaderLogo = styled.h1`
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  cursor: default;
`;

const HeaderMenus = styled.ul`
  display: ${(props) => (props.two ? "flex" : "none")};
  gap: 20px;
  list-style: none;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Li = styled.li`
  font-weight: ${(props) => props.current && "600"};
  color: ${(props) => props.boldIndex && "blue"};
  line-height: 47px;
  cursor: pointer;
  font-weight: 600;
`;

const MobileMenuIcon = styled.span`
  display: none;
  @media screen and (max-width: 650px) {
    display: flex;
    font-size: 22px;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  display: none;
  position: absolute;
  top: 57px;
  left: 0;
  height: ${(props) => (props.show ? "216px" : 0)};
  overflow: hidden;
  width: 100%;
  list-style: none;
  transition: all 0.4s;
  padding: ${(props) => (props.show ? "20px 0" : 0)};

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

const MobileMenuLi = styled.li`
  line-height: 2;
  font-size: 22px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: ${({ boldIndex }) => boldIndex && "blue"};
`;

function Header({ boldIndex }) {
  const [two, setTwo] = useState(false);
  //????????? 100?????? ????????? ?????? true??? ??????????????????
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setTwo(true);
        return;
      } else {
        setTwo(false);
        return;
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 650) {
        return;
      } else {
        setOpenMobileMenu(false);
        return;
      }
    });
  }, [two]);
  return (
    <HeaderWrapper two={two} show={openMobileMenu}>
      <InnerHeader two={two} show={openMobileMenu}>
        <HeaderLogo>PORTFOLIO</HeaderLogo>
        <HeaderMenus two={two}>
          <Link to="1" spy={true} smooth={true}>
            <Li boldIndex={boldIndex === 0}>INTRO</Li>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <Li boldIndex={boldIndex === 1}>SKILL</Li>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <Li boldIndex={boldIndex === 2}>PROJECT</Li>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <Li boldIndex={boldIndex === 3}>CONTACT</Li>
          </Link>
        </HeaderMenus>
        <MobileMenuIcon two={two} onClick={toggleMobileMenu}>
          <GoThreeBars />
        </MobileMenuIcon>
        <MobileMenu show={openMobileMenu} two={two}>
          <Link to="1" spy={true} smooth={true}>
            <MobileMenuLi boldIndex={boldIndex === 0}>INTRO</MobileMenuLi>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <MobileMenuLi boldIndex={boldIndex === 1}>SKILL</MobileMenuLi>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <MobileMenuLi boldIndex={boldIndex === 2}>PROJECT</MobileMenuLi>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <MobileMenuLi boldIndex={boldIndex === 3}>CONTACT</MobileMenuLi>
          </Link>
        </MobileMenu>
      </InnerHeader>
    </HeaderWrapper>
  );
}

export default Header;
