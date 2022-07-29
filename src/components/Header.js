import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  display: flex;
  position: ${(props) => (props.two ? "fixed" : "static")};
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
  justify-content: ${(props) => (props.two ? "space-between" : "center")};
  transition: all 0.4s;
`;

const HeaderLogo = styled.h1`
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const HeaderMenus = styled.ul`
  display: ${(props) => (props.two ? "flex" : "none")};
  gap: 20px;
  list-style: none;
  align-items: center;
`;

const Li = styled.li`
  font-weight: ${(props) => props.current && "600"};
  color: ${(props) => props.current && "blue"};
`;

const MobileMenu = styled.nav``;

function Header() {
  const [two, setTwo] = useState(false);
  //스크롤 100픽셀 아래로 가면 true로 만들어버리기

  function move() {
    //앱단에서 컴포넌트마다 ref 걸어주고 여기 prop 전달
    //클릭하면 그 ref의 getboundingtop으로 이동??
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
  }, [two]);
  return (
    <HeaderWrapper two={two}>
      <HeaderLogo>PORTFOLIO</HeaderLogo>
      <HeaderMenus two={two}>
        <Li current={true}>INTRO</Li>
        <Li>SKILL</Li>
        <Li>PROJECT</Li>
        <Li>CONTACT</Li>
      </HeaderMenus>
    </HeaderWrapper>
  );
}

export default Header;
