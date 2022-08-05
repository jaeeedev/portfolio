import styled from "styled-components";
import List from "../components/List";
import PageHeader from "../components/PageHeader";

const Head = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
`;

const SkillsBox = styled.div`
  display: flex;
  gap: 7px;
`;
const SkillBadge = styled.span`
  display: inline-block;
  font-size: 13px;
  background: #e9ecef;
  padding: 3px 7px;
  border-radius: 2px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const ProjectSpan = styled.span`
  display: block;
  color: #999;
  margin-bottom: 5px;
`;
const ProjectTitle = styled.h1`
  font-size: 2.25rem;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const ProjectText = styled.p`
  line-height: 1.5;
  margin-bottom: 15px;
`;

const MainImgBox = styled.img`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: block;
`;

const ProjectImgBox = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: 300px;
  background: #ccc;
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Code = styled.code`
  background: #e9ecef;
  padding: 3px 5px;
  font-size: 14px;
  border-radius: 3px;
  cursor: default;
`;

const SplitBox = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

function Todo() {
  return (
    <div>
      <PageHeader />
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>투두리스트</ProjectTitle>
          <SkillsBox>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
          </SkillsBox>
        </Head>

        <List />

        <MainImgBox src="/imgs/todo_base.png" alt="투두리스트 이미지" />

        <SplitBox></SplitBox>
        <ProjectText>
          읽기, 쓰기, 수정, 삭제가 가능한 투두리스트를 제작했습니다.
          <br /> 기본 화면에서는 input박스와 버튼으로 구성된 폼이 놓여 있습니다.
          <br />
        </ProjectText>

        <ProjectImgBox />
        <ProjectText>
          좌측 박스를 클릭하면 체크박스로 변경되고 취소선이 추가됩니다. <br />
          우측 점 아이콘을 클릭하면 수정과 삭제 버튼이 있는 메뉴바가 나타납니다.
          <br />
        </ProjectText>
        <ProjectImgBox />
        <ProjectText>
          수정 버튼을 클릭하면 우측 아이콘이 수정 취소 버튼과 완료 버튼으로
          변경됩니다.
          <br /> 또한 텍스트 영역이 <Code>contenteditable</Code> 속성이 true로
          변경되어 텍스트를 수정할 수 있습니다.
          <br />
        </ProjectText>
      </Container>
    </div>
  );
}

export default Todo;
