import React, { useRef, useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background: #f3f3f3;
  padding: 30px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: ${(props) => props.fz || "16px"};
`;

function Footer({ boldHandler }) {
  const contactRef = useRef(null);

  const cb = ([entry]) => {
    if (entry.isIntersecting) {
      boldHandler(3);
    }
  };

  const introIo = new IntersectionObserver(cb, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    introIo.observe(contactRef.current);
  });
  return (
    <Wrapper id="4" ref={contactRef}>
      <div>
        <Title>CONTACT</Title>
        <Text>wldms1107@gmail.com</Text>
      </div>
      <div>
        <Text fz={"14px"}>
          본 포트폴리오의 모든 제작물은 상업적 목적과 무관합니다.
        </Text>
      </div>
    </Wrapper>
  );
}

export default Footer;
