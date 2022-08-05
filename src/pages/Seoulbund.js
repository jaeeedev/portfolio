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

function SeoulBund() {
  return (
    <div>
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>서울번드</ProjectTitle>
          <SkillsBox>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>firebase</SkillBadge>
          </SkillsBox>
        </Head>
        <List />
        <MainImgBox />

        <SplitBox></SplitBox>
        <ProjectText>
          기존에 있는 웹사이트를 리뉴얼하여 만들어보는 프로젝트였습니다. <br />
          저는 서울번드라는 식기 편집숍을 선택하였습니다.
        </ProjectText>

        <ProjectImgBox />
        <ProjectText>
          반응형으로 제작되었습니다. pc화면에서는 큰 카테고리가 헤더에 띄워져
          있고 모바일 화면에서는 햄버거 버튼을 눌러 토글하는 형식입니다.
        </ProjectText>
        <ProjectImgBox />
        <ProjectImgBox />
        <ProjectText>
          제품 상세 페이지입니다. 제품을 선택하지 않으면 모달창이 뜨며 제품을
          선택하면 장바구니로 이동하거나 현재 페이지에 머물겠냐는 모달창이
          나타납니다.
          <br />
          리뷰 작성이 가능하며 사진이 있는 리뷰만 필터링하여 볼 수 있습니다.
        </ProjectText>
      </Container>
    </div>
  );
}

export default SeoulBund;
