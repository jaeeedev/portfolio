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
  margin-bottom: 30px;
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

//사이드바 열어서 메인바뀌는거 움짤찌기
//인기도서 슬라이딩하는거
//모바일 화면에서 변경하는것도
//헤더 막 마우스 호버하는것도

function Lib() {
  return (
    <div>
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>도서관 사업소</ProjectTitle>
          <SkillsBox>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
          </SkillsBox>
        </Head>
        <List />

        <ProjectImg src="/imgs/lib01.jpg" alt="도서관 화면" />

        <ProjectText>
          기존에 존재하는 웹사이트를 리뉴얼하는 프로젝트였습니다. <br /> 도서관
          사업소는 창원 지역에 있는 모든 도서관의 정보를 제공하는
          웹사이트입니다. <br /> 메인 페이지를 제작하였고 반응형으로
          구현했습니다.
        </ProjectText>
        <ProjectImg src="/imgs/lib02.jpg" alt="도서관 화면" />
        <ProjectText>
          도서관스러운 발랄한 분위기를 표현하고 싶었습니다
          <br />
          헤더에 마우스를 올리면 해당하는 카테고리 타이틀의 색상이 변경됩니다.
        </ProjectText>

        <ProjectImg src="/imgs/lib03.jpg" alt="도서관 화면" />
        <ProjectText>
          상세 위치 버튼을 클릭하면 현재 보고있는 도서관의 위치 정보를 모달창에
          띄워줍니다.
          <br /> 카카오맵 API를 사용하였습니다.
        </ProjectText>

        <ProjectImgBox />
        <ProjectText></ProjectText>
      </Container>
    </div>
  );
}

export default Lib;
