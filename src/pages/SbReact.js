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
  margin-bottom: 15px;
`;

const MainImgBox = styled.img`
  max-width: 800px;
  margin: 0 auto;
  display: block;
`;

const MainLinkDesc = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 30px;
`;

const TextTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;
  margin-top: 60px;
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

function SbReact() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <PageHeader />
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

        <a
          href="https://illustrious-manatee-d6fc25.netlify.app/"
          target={"_blank"}
          rel="noreferrer"
          style={{ marginRight: "10px" }}
        >
          <MainImgBox src="/imgs/sbrmenu.gif" alt="서울번드리액트 메뉴" />
        </a>

        <MainLinkDesc>클릭 시 프로젝트로 이동합니다.</MainLinkDesc>

        <ProjectText>
          기존의 자바스크립트 프로젝트를 간소화하여 리액트로 제작했습니다.{" "}
          <br />
          카테고리에 들어가면 제품들이 있습니다. 상단의 소분류 버튼들을 클릭하면
          해당하는 소분류의 제품들만 필터하여 볼 수 있습니다. 또한 가격이 낮은
          순서로도 정렬하여 볼 수 있습니다. 소분류 필터링은 배열 메서드 중{" "}
          <Code>filter</Code>를 사용했고 가격 정렬은 <Code>sort</Code>를
          이용했는데, <Code>sort</Code>는 원본 배열을 변경한다는 점을 잊어 잠깐
          헤맸습니다. 차이점을 다시 상기하고 원본 배열을 복사하여 정렬시켜
          주었습니다.
          <br />
        </ProjectText>
        <ProjectImg src="/imgs/sbrpd.gif" alt="서울번드리액트 화면" />
        <ProjectText>
          제품을 클릭하면 상세 페이지로 들어갈 수 있습니다. <br />
          선택된 제품의 수량이 0개인 경우 1.5초간 모달창이 띄워지며 1개 이상의
          제품이 담겼을 경우에는 고정된 모달창이 나타납니다. <br />
          장바구니에 동일한 제품을 다시 담을 경우 전역 상태 배열에 동일한 상품이
          있는지를 확인하고 카운트를 추가합니다.
          <br />
          하단에는 데이터 배열에서 같은 소분류의 제품군만 필터하여 랜덤하게
          추천하도록 구현했습니다.
        </ProjectText>
        <ProjectImg src="/imgs/sbrcart.gif" alt="서울번드리액트 화면" />
        <ProjectText>
          장바구니 내에서도 제품 수량을 수정하거나 삭제할 수 있습니다. 체크된
          상품들의 총계가 우측 합계 영역에 나타납니다.
        </ProjectText>
        <ProjectImg src="/imgs/sbrsearch.gif" alt="서울번드리액트 화면" />

        <ProjectText>
          헤더의 검색창에 키워드를 입력하면 그 키워드를 가진 제품들을 화면에
          출력합니다. <br />
          검색했던 키워드는 쿼리스트링으로 붙여 제품 필터링에 활용하였습니다.
          검색한 키워드가 한글이다보니 쿼리스트링을 받아오면 글자가 깨지는
          현상이 발생하였는데 처음에는 <Code>decodeURI()</Code> 로 변환하여
          사용하였다가 <Code>useSearchParams</Code> 훅의 <Code>get</Code>{" "}
          메서드로 변경했습니다.
        </ProjectText>

        <TextTitle>회고</TextTitle>
        <ProjectText>
          쇼핑몰의 핵심적인 기능들을 구현해 보면서 리액트에 대해 더 익숙해지고{" "}
          <Code>리액트 라우터</Code> 나 <Code>리덕스 툴킷</Code>같은 <br />
          새로운 기술에 적응할 수 있는 좋은 경험이었습니다. 특히 기존
          자바스크립트 프로젝트에서는 제품 상세 페이지를 하나만 만들어 아쉬움이
          있었는데 이번 프로젝트에서는 라우팅을 통해 모든 상세 페이지에 접속할
          수 있다는 점이 너무 즐거웠습니다.
          <br />
          처음에는 라우팅에 익숙하지 않아 레이아웃이 완전히 동일한
          테이블웨어-음료용품 페이지나 테이블웨어 필터-음료용품 필터 컴포넌트
          파일을 따로 만들었습니다. 하지만 점차 리팩토링을 반복하여 페이지도
          재사용되도록 구현했습니다. <br />
        </ProjectText>

        <PrevNext
          prev={"seoulbund"}
          next={"false"}
          pText={"서울번드"}
          nText={"false"}
        />
      </Container>
    </div>
  );
}

export default SbReact;
