import React, { useRef, useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background: #f3f3f3;
  padding: 30px;
  padding-top: 50px;
  height: 470px;
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
  font-size: ${(props) => props.fz || "18px"};
  line-height: 1.6;
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
    threshold: 0.3,
  });

  useEffect(() => {
    introIo.observe(contactRef.current);
  });
  return (
    <Wrapper id="4" ref={contactRef}>
      <div>
        <Title>CONTACT</Title>
        <Text>email : wldms1107@gmail.com</Text>
        <Text>phone : 010-2502-4223</Text>
      </div>
      <div>
        <Text fz={"15px"}>
          본 페이지는 크롬 브라우저에 최적화 되어 있습니다.
        </Text>
        <Text fz={"15px"}>
          본 포트폴리오의 모든 제작물은 상업적 목적과 무관합니다.
        </Text>
      </div>
    </Wrapper>
  );
}

export default Footer;
