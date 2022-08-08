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

const TextTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;
  margin-top: 60px;
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
  window.scrollTo({ top: 0 });
  return (
    <div>
      <PageHeader />
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

        <ProjectImg src="/imgs/libmain.gif" alt="도서관 화면" />

        <ProjectText>
          기존에 존재하는 웹사이트를 리뉴얼하는 프로젝트였습니다. <br /> 도서관
          사업소는 창원 지역에 있는 모든 도서관의 정보를 제공하는
          웹사이트입니다. <br /> 메인 페이지를 제작했습니다. 반응형으로
          제작되었습니다.
        </ProjectText>
        <ProjectImg src="/imgs/libmenu.gif" alt="도서관 화면" />
        <ProjectText>
          메뉴가 많기 때문에 눈에 쉽게 들어올 수 있도록 호버 시 글자를
          볼드처리하고 해당하는 카테고리에 색상을 넣어주었습니다.
        </ProjectText>
        <ProjectImg src="/imgs/libmap.gif" alt="도서관 화면" />
        <ProjectText>
          상세위치 보기 버튼을 클릭하면 현재 보고있는 도서관의 위치 정보를
          모달창에 띄워줍니다.
          <br /> <Code>카카오맵 API</Code> 를 사용하였습니다.
        </ProjectText>
        <ProjectImg src="/imgs/libslide.gif" alt="도서관 인기도서 화면" />
        <ProjectImg src="/imgs/libmob.gif" alt="도서관 모바일" />
        <ProjectText>반응형으로 구현해 좁은 화면에서도 동작합니다.</ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          중요한 이야기는 아니지만 도서관의 사진들은 모두 실제 도서관의 사진이
          아닙니다. 원본 이미지가 너무 작아 unsplash에서 도서관 이미지를 가져다
          썼습니다. 도서관이라는 장소에 맞게 발랄한 이미지를 강조한 페이지를
          만들고 싶었지만 디자인적으로는 아쉬운 프로젝트입니다. <br />
          처음으로 오픈 API를 적용해 보았습니다. 가상의 데이터가 아니라 실제로
          활용할 수 있는 기능을 추가하니 작은 부분이지만 굉장히 뿌듯했습니다.
        </ProjectText>
        <PrevNext prev="pot" next="seoulbund" pText="pot" nText="서울번드" />
      </Container>
    </div>
  );
}

export default Lib;
