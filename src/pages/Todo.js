import styled from "styled-components";
//일단 토대를 먼저 짜시오

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 16px;
`;

const Head = styled.div`
  margin-bottom: 70px;
`;

const ProjectSpan = styled.span`
  display: block;
  color: #999;
  margin-bottom: 5px;
`;
const ProjectTitle = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 0.02em;
`;

const ProjectText = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

const ProjectImgBox = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  width: 500px;
  height: 350px;
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

function Todo() {
  return (
    <div>
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>투두리스트</ProjectTitle>
        </Head>

        <ProjectImgBox>
          <ProjectImg src="/imgs/todo_base.png" alt="투두리스트 이미지" />
        </ProjectImgBox>

        <ProjectText>
          읽기, 쓰기, 수정, 삭제가 가능한 투두리스트를 제작했습니다.
          <br /> 기본 화면에서는 input박스와 버튼으로 구성된 폼이 놓여 있습니다.
          <br />
          좌측 박스를 클릭하면 체크박스로 변경되고 취소선이 추가됩니다. <br />
          우측 점 아이콘을 클릭하면 수정과 삭제 버튼이 있는 메뉴바가 나타납니다.{" "}
          <br />
          수정 버튼을 클릭하면 우측 아이콘이 수정 취소 버튼과 완료 버튼으로
          변경됩니다.
          <br /> 또한 텍스트 영역이 contenteditable 속성이 true로 변경되어
          텍스트를 수정할 수 있습니다.
          <br />
        </ProjectText>
      </Container>
    </div>
  );
}

export default Todo;
