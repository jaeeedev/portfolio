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
  padding-bottom: 50px;
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
  margin-bottom: 15px;
`;

const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  flex: 1;
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

//화면비 1.77777
//여기는 기능이 거의 없어서 움짤만 이어서 넣어주고 텍스트는 간소하게

function Pot() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <PageHeader />
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>Pot</ProjectTitle>
          <SkillsBox>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>jQuery</SkillBadge>
          </SkillsBox>
        </Head>
        <List />
        <ProjectImg src="/imgs/pot01.jpg" alt="팟 화면" />

        <ProjectText>
          가상의 웹사이트(식물 정보 커뮤니티)를 기획하여 메인 페이지를
          제작했습니다. 반응형 페이지로 제작되었습니다. 캐러셀 라이브러리 사용과
          편리한 코드 작성을 위해 <Code>jQuery</Code>를 사용했습니다.
        </ProjectText>
        <br />
        <ProjectImg src="/imgs/pot3.gif" alt="팟 화면" />
        <ProjectImg src="/imgs/pot4.gif" alt="팟 화면" />
        <br />
        <ProjectImg src="/imgs/potmob.gif" alt="팟 화면" />
        <ProjectText>
          모바일 화면에서도 사용할 수 있도록 반응형으로 구현하였습니다. 분기점에
          따라 보이는 요소의 개수를 줄이고 <Code>flex-wrap</Code> 값을 wrap으로
          하여 일정 너비를 초과하면 아래로 내려가도록 하였습니다.
        </ProjectText>
        <TextTitle>회고</TextTitle>
        <ProjectText>
          전체 페이지를 반응형으로 구현하는것은 처음이었는데 요소 사이즈나
          개수를 어떻게 수정해야 할 지 고민을 많이 했던 것 같습니다. 레이아웃을
          잡는 과정에서 CSS의 <Code>flex</Code> 를 많이 익히게 되었습니다. 메인
          슬라이드를 제이쿼리 기반 라이브러리로 적용하면서 제이쿼리의 문법도
          사용해보게 되었습니다. 돔을 조작하기 편리하고 코드가 깔끔해져 좋은
          경험이었습니다.
        </ProjectText>
        <PrevNext
          prev={"todolist"}
          next={"changwonlib"}
          pText={"투두리스트"}
          nText={"도서관 사업소"}
        />
      </Container>
    </div>
  );
}

export default Pot;
