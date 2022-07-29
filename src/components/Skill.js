import styled from "styled-components";

const Wrapper = styled.section`
  background: #f3f3f3;

  @media screen and (max-width: 650px) {
    background: transparent;
  }
`;

const SkillContents = styled.section`
  max-width: 1260px;
  margin: 120px auto;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 50px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SkillImg = styled.img.attrs({ alt: "기술 이미지" })`
  height: 100px;
  display: block;
`;

const SkillText = styled.p`
  line-height: 1.4;
  font-size: 15px;
`;

function Skill() {
  return (
    <Wrapper>
      <SkillContents>
        <Title>SKILL</Title>
        <SkillBox>
          <SkillItem>
            <SkillImg src="/imgs/html.png" />
            <SkillText>
              컨텐츠에 적절한 시맨틱 태그 사용
              <br />
              스타일링과 스크립트 작성에
              <br />
              필요한 마크업을 할 수 있음
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg src="/imgs/css.png" />
            <SkillText>
              플렉스를 사용하여 스타일링 가능
              <br />
              미디어 쿼리를 통한 반응형 레이아웃 구현
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg src="/imgs/js.png" />
            <SkillText>
              ES6 문법 사용
              <br />
              뭐라고 쓰지,,???
            </SkillText>
          </SkillItem>
          <SkillItem>
            <SkillImg src="/imgs/logo512.png" />
            <SkillText>
              스타일드 컴포넌트로 prop에 따른 조건부 스타일링
              <br />
              리덕스 라우터를 활용하여 다중 페이지 구현
              <br />
              리덕스(툴킷) 를 통해 전역 상태 관리를 할 수 있음
            </SkillText>
          </SkillItem>
        </SkillBox>
      </SkillContents>
    </Wrapper>
  );
}

export default Skill;
