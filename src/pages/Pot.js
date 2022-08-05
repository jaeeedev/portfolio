import styled from "styled-components";
import List from "../components/List";

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

//화면비 1.77777
//여기는 기능이 거의 없어서 움짤만 이어서 넣어주고 텍스트는 간소하게

function Pot() {
  return (
    <div>
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
          제작했습니다. 반응형 페이지로 제작되었습니다.
        </ProjectText>
        <ProjectImg src="/imgs/pot2.jpg" alt="팟 화면" />
      </Container>
    </div>
  );
}

export default Pot;
