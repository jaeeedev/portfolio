import styled from "styled-components";
import List from "../components/List";
import PageHeader from "../components/PageHeader";
import PrevNext from "../components/PrevNext";

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
  max-width: 960px;
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
  line-height: 1.6;
  margin-bottom: 30px;
`;

const MainImgBox = styled.img`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: block;
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

const TextTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;
  margin-top: 60px;
`;

const SplitBox = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

function Todo() {
  window.scrollTo({ top: 0 });
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

        <MainImgBox src="/imgs/todomain.gif" alt="투두리스트 이미지" />

        <SplitBox></SplitBox>
        <ProjectText>
          읽기, 쓰기, 수정, 삭제가 가능한 투두리스트를 제작했습니다.
          <br /> 기본 화면에서는 input박스와 버튼으로 구성된 폼이 놓여 있습니다.
          <br />
        </ProjectText>

        <ProjectImg src="/imgs/todoshow.gif" alt="투두리스트 형태" />
        <ProjectText>
          할 일을 추가하면 체크박스와 함께 텍스트와 추가한 시간이 표기됩니다.
          <br />
          우측 점 아이콘을 클릭하면 수정과 삭제 버튼이 있는 메뉴바가 나타납니다.
          <br />
        </ProjectText>
        <ProjectImg src="/imgs/todomod.gif" alt="투두리스트 기능" />
        <ProjectText>
          수정 버튼을 클릭하면 우측 아이콘이 수정 취소 버튼과 완료 버튼으로
          변경됩니다.
          <br /> 또한 텍스트 영역의 <Code>contenteditable</Code> 속성이 true로
          변경되어 텍스트를 수정할 수 있습니다. 수정은 중간에 취소할 수
          있습니다.
          <br />
          삭제 버튼을 클릭하면 해당 요소가 삭제됩니다.
          <br />
        </ProjectText>
        <ProjectImg src="/imgs/todolocal.gif" alt="로컬스토리지" />
        <ProjectText>
          <Code>localStorage</Code> 를 사용하여 새로고침을 해도 데이터들이
          기억되게 만들었습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          자바스크립트를 배우면서 가장 처음 무엇인가를 만들고 고쳐가며 흥미를
          얻었던 프로젝트입니다. 함수의 동작 순서나 변수를 선언하는 과정에 대해
          깊이 생각할 수 있었던 계기가 되었습니다. 초기에 반복문으로 작성한
          코드를 배열 메서드 <Code>map</Code>으로 변경해보거나, 리스트 추가
          함수를 동작시키기 위해 버튼에 걸었던 <Code>click</Code> 이벤트를 폼의{" "}
          <Code>submit</Code> 이벤트로 변경해 보는 등 코드를 계속적으로
          고쳐보면서 많은 지식들을 얻어갈 수 있었던 프로젝트였습니다.
        </ProjectText>
        <PrevNext prev={"false"} next={"pot"} pText={"false"} nText={"pot"} />
      </Container>
    </div>
  );
}

export default Todo;
