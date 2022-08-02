import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useEffect, useMemo, useRef } from "react";

const ProjectContents = styled.section`
  max-width: 1260px;
  margin: 120px auto;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 30px;
`;

const ProjectItemBox = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  opacity: 1;
  transition: all 1.1s;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const ProjectImg = styled.div`
  flex: 1;
  background: black;
  min-height: 250px;
  object-fit: cover;
  transition: all 0.4s;

  @media screen and (max-width: 650px) {
  }
`;

const ProjectText = styled.div`
  flex: 1;
`;

const TextTitle = styled.span`
  display: block;
  margin-bottom: ${(props) => props.mb || "10px"};
  font-size: ${(props) => props.fz || "17px"};
  font-weight: 700;
`;

const TextDetail = styled.p`
  line-height: 1.5;
  font-size: ${(props) => props.fz || "15px"};
  margin-bottom: 10px;
`;

function Project() {
  const projectRef = useRef([]);

  const observer = useMemo(
    () =>
      new IntersectionObserver(projectHandler, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }),
    []
  );

  function projectHandler(entries) {
    //화면에 들어온 요소들이 실행할 함수
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(10px)";
      } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }

  useEffect(() => {
    //개별 프로젝트 박스들 관찰 걸어주기
    projectRef.current.forEach((project) => {
      observer.observe(project);
    });
  });

  return (
    <div>
      <ProjectContents id="3">
        <Title>PROJECT</Title>

        <ProjectItemBox ref={(el) => (projectRef.current[0] = el)}>
          <ProjectImg></ProjectImg>

          <ProjectText>
            <TextTitle mb={"20px"}>투두리스트</TextTitle>
            <TextDetail>
              가장 기초가 되는 글쓰기, 수정, 삭제 기능 구현을 공부하기 위해
              제작하였습니다. 배열과 map 메서드를 사용하여 데이터를 저장,
              렌더링하고 로컬 스토리지를 사용하여 체크 여부와 텍스트가
              저장됩니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a
                href="https://github.com/jaeeedev/todolist/tree/jaeeedev-patch-3"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox ref={(el) => (projectRef.current[1] = el)}>
          <ProjectImg />

          <ProjectText>
            <TextTitle mb={"20px"}>pot</TextTitle>
            <TextDetail>
              가상의 웹사이트를 기획하여 제작한 웹페이지입니다. 반응형으로
              제작되었습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS, jQuery</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a href="#!">
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox ref={(el) => (projectRef.current[2] = el)}>
          <ProjectImg />

          <ProjectText>
            <TextTitle mb={"20px"}>도서관사업소</TextTitle>
            <TextDetail>기존의 웹사이트를 기획하고 제작하였습니다.</TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a href="#!">
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox ref={(el) => (projectRef.current[3] = el)}>
          <ProjectImg />

          <ProjectText>
            <TextTitle mb={"20px"}>서울번드</TextTitle>
            <TextDetail>
              쇼핑몰 제작 프로젝트입니다. 반응형으로 제작되었습니다. 메인, 제품
              상세, 장바구니 페이지를 제작하였습니다. 파이어베이스 실시간
              데이터베이스에 데이터를 저장하여 리뷰 작성과 장바구니 기능을
              구현했습니다. 캐러셀은 swiper 라이브러리를 사용했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>HTML, CSS, JS, firebase</TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a href="#!">
                <BsGithub />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
        <ProjectItemBox ref={(el) => (projectRef.current[4] = el)}>
          <ProjectImg />

          <ProjectText>
            <TextTitle mb={"20px"}>서울번드 리액트</TextTitle>
            <TextDetail>
              기존 자바스크립트 프로젝트를 조금 변경하여 리액트로 제작했습니다.
              리덕스를 통해 전역 상태에 장바구니 데이터와 관련 함수를
              관리합니다. 스타일드 컴포넌트로 스타일링하고 라우터로 여러
              페이지를 구현했습니다.
            </TextDetail>

            <TextTitle>사용 기술</TextTitle>
            <TextDetail>
              React, React-router, Redux-toolkit, Styled-components
            </TextDetail>

            <TextTitle>보러 가기</TextTitle>
            <TextDetail fz={"23px"}>
              <a href="#!" style={{ marginRight: "10px" }}>
                <BsGithub />
              </a>
              <a href="#!">
                <RiComputerLine />
              </a>
            </TextDetail>
          </ProjectText>
        </ProjectItemBox>
      </ProjectContents>
    </div>
  );
}

export default Project;
