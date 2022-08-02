import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const IntroContents = styled.section`
  position: relative;
  max-width: 1260px;
  margin: 60px auto;
  display: flex;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
  }
`;

const IntroGreetBox = styled.div`
  flex: 1;
  padding: 20px;
`;

const GreetText = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

const GreetDetail = styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.4;
`;

const InfoBox = styled.div`
  flex: 1;
  padding: 0 20px;

  @media screen and (max-width: 650px) {
    width: 100vw;
    background: #f3f3f3;
    padding: 40px 20px;
  }
`;
const Info = styled.div`
  display: flex;
  line-height: 1.7;
  align-items: center;
`;
const InfoTitle = styled.span`
  width: 100px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 18px;
`;
const InfoDetail = styled.span`
  font-size: 16px;
`;

const DecoCircle = styled.div`
  position: absolute;
  top: -100px;
  left: -250px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: blue;
  z-index: -1;
`;

function Intro() {
  return (
    <div>
      <IntroContents id="1">
        <DecoCircle />
        <IntroGreetBox>
          <GreetText>안녕하세요</GreetText>
          <GreetText>ㅇㅇ하는 프론트엔드 개발자</GreetText>
          <GreetText>박지은입니다.</GreetText>
          <GreetDetail>
            자기 소개 포부 적는 영역
            <br />
            아직 멘트를 안정함
            <br />
            가나다라마바사
          </GreetDetail>
        </IntroGreetBox>

        <InfoBox>
          <Info>
            <InfoTitle>이름</InfoTitle>
            <InfoDetail>박지은</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>생년월일</InfoTitle>
            <InfoDetail>1997.06.13</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>학력</InfoTitle>
            <InfoDetail>부경대학교 경영학부 졸업</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>연락처</InfoTitle>
            <InfoDetail>010-2502-4223</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>이메일</InfoTitle>
            <InfoDetail>wldms1107@gmail.com</InfoDetail>
          </Info>
          <Info>
            <InfoTitle>깃허브</InfoTitle>
            <InfoDetail>
              <a
                href="https://github.com/jaeeedev"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  style={{ fontSize: "23px", transform: "translateY(5px)" }}
                />
              </a>
            </InfoDetail>
          </Info>
        </InfoBox>
      </IntroContents>
    </div>
  );
}

export default Intro;
