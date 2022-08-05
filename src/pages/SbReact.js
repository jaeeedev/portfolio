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

function SbReact() {
  return (
    <div>
      <Container>
        <Head>
          <ProjectSpan>프로젝트 설명</ProjectSpan>
          <ProjectTitle>서울번드 리액트</ProjectTitle>
          <SkillsBox>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>React-Router</SkillBadge>
            <SkillBadge>Redux-toolkit</SkillBadge>
            <SkillBadge>Styled-components</SkillBadge>
          </SkillsBox>
        </Head>

        <List />
        <MainImgBox />

        <SplitBox></SplitBox>
        <ProjectText>
          기존의 자바스크립트 프로젝트를 간소화하여 리액트로 제작하였습니다.
          <br />
        </ProjectText>

        <ProjectImgBox />
        <ProjectText>
          카테고리에 들어가면 제품들이 있습니다. <br /> <Code>filter</Code> 배열
          메서드를 사용해 해당하는 소분류의 상품만 확인할 수 있도록
          구현했습니다.
          <br />
        </ProjectText>
        <ProjectImgBox />
        <ProjectText>
          제품을 클릭하면 상세 페이지로 들어갈 수 있습니다. <br />
          선택된 제품의 수량이 0개인 경우 1.5초간 모달창이 띄워지며 1개 이상의
          제품이 담겼을 경우에는 다른 모달창이 나타납니다. <br />
          장바구니로 이동하거나 현재 페이지에 머무를 수 있습니다. <br />
          장바구니에 동일한 제품을 다시 담을 경우 전역 상태 배열에 동일한 상품이
          있는지를 확인하고 카운트를 추가합니다.
          <br />
          하단에는 데이터 배열에서 같은 소분류의 제품군만 추려 랜덤하게
          추천하도록 구현했습니다.
        </ProjectText>
        <ProjectImgBox />
        <ProjectText>
          장바구니의 데이터들은 리덕스로 관리하는 전역 상태에 보관됩니다 <br />
          장바구니 내에서도 제품 수량을 수정하거나 삭제할 수 있습니다. <br />
          체크된 상품들의 총계가 우측 합계 영역에 나타납니다.
        </ProjectText>
        <ProjectImgBox />
        <ProjectText>
          헤더의 검색창에 키워드를 입력하면 그 키워드를 가진 제품들을 화면에
          출력합니다. <br />
          검색했던 키워드는 쿼리스트링으로 붙여 제품 필터링에 활용하였습니다.
          <br />
          <br />
          쇼핑몰의 핵심적인 기능들을 구현해 보면서 리액트에 대해 더 익숙해지고
          리액트 라우터나 리덕스 툴킷같은 <br />
          새로운 기술에 적응할 수 있는 좋은 경험이었습니다. 처음에는 라우팅에
          익숙하지 않아 같은 레이아웃의 파일을 따로 만드는 등 컴포넌트 재사용에
          애를 먹었습니다. 하지만 점차 필요한 지식들을 알아가면서 코드를
          줄여나가고 페이지도 재사용할 수 있도록 고쳐나가는 과정에서 많이
          성장하고 재미를 느꼈던 것 같습니다.
        </ProjectText>
      </Container>
    </div>
  );
}

export default SbReact;
