import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="index">
        <div className="div">
          <div className="mypage-content">
            <div className="my-info">
              <div className="title">나의 정보</div>
              <div className="card" />
              <div className="button-edit">
                <div className="edit">수정</div>
              </div>
              <div className="my-info-user-status">
                <div className="status">상태</div>
                <div className="overlap-group">
                  <img
                      className="vector"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/vector.svg"
                  />
                  <div className="text-wrapper">회원</div>
                </div>
              </div>
              <div className="my-info-grade">
                <div className="overlap">
                  <img
                      className="grade-seed"
                      alt="Grade seed"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/grade-seed.png"
                  />
                </div>
                <div className="grade">등급</div>
              </div>
              <div className="my-info-point">
                <div className="overlap-2">
                  <img
                      className="input"
                      alt="Input"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input.svg"
                  />
                  <div className="text-wrapper-2">300 P</div>
                  <div className="point">포인트</div>
                </div>
              </div>
              <div className="my-info-email">
                <div className="overlap-2">
                  <img
                      className="input"
                      alt="Input"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input.svg"
                  />
                  <div className="email">이메일</div>
                  <a href="mailto:dlraud12@gmail.com" rel="noopener noreferrer" target="_blank">
                    <input className="email-2" placeholder="dlraud12@gmail.com" type="email" />
                  </a>
                </div>
              </div>
              <div className="my-info-name">
                <div className="overlap-2">
                  <img
                      className="img"
                      alt="Input"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input.svg"
                  />
                  <div className="name">이름</div>
                  <div className="name-2">홍길동</div>
                </div>
              </div>
              <div className="my-info-profile" />
            </div>
            <div className="my-address">
              <div className="title-2">배송정보 관리</div>
              <div className="card" />
              <div className="edit-wrapper">
                <div className="edit-2">수정</div>
              </div>
              <div className="my-address-delivery">
                <div className="input-2" />
                <div className="delivery-request">배송 시 요청사항(선택)</div>
              </div>
              <div className="my-adress-email">
                <div className="placeholder-wrapper">
                  <p className="placeholder">(필수) 프로젝트 진행에 대한 새소식 및 결제 관련 안내를 받습니다.</p>
                </div>
                <div className="email-3">이메일</div>
              </div>
              <div className="my-address-contact">
                <img
                    className="input-3"
                    alt="Input"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input-5.svg"
                />
                <div className="contact-number">연락처</div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="my-address-2">
                    <img
                        className="input-4"
                        alt="Input"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input-5.svg"
                    />
                    <img
                        className="input-5"
                        alt="Input"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/input-8.svg"
                    />
                    <div className="text-wrapper-3">주소</div>
                  </div>
                  <div className="button-my-address">
                    <div className="text-wrapper-4">주소 찾기</div>
                  </div>
                </div>
              </div>
              <div className="my-address-receiver">
                <div className="input-2" />
                <div className="receiver">받는사람</div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-4">
              <div className="div-wrapper">
                <div className="sidebar" />
              </div>
              <div className="sidebar-shortcut">
                <div className="favicon-logo">
                  <img
                      className="icon-leaf"
                      alt="Icon leaf"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/---icon--leaf-@2x.png"
                  />
                </div>
                <div className="shortcut-mission">
                  <img
                      className="favicon-mission"
                      alt="Favicon mission"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-mission.svg"
                  />
                  <div className="menu-name">미션</div>
                </div>
                <div className="shortcut-volunteer">
                  <img
                      className="favicon-volunteer"
                      alt="Favicon volunteer"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-volunteer.svg"
                  />
                  <div className="menu-name">모임</div>
                </div>
                <div className="shortcut-funding">
                  <img
                      className="favicon-funding"
                      alt="Favicon funding"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-funding.svg"
                  />
                  <div className="menu-name">펀딩</div>
                </div>
                <div className="shoftcut-rank">
                  <img
                      className="favicon-rank"
                      alt="Favicon rank"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-rank.svg"
                  />
                  <div className="menu-name">랭킹</div>
                </div>
                <div className="shortcut-qna">
                  <img
                      className="favicon-qna"
                      alt="Favicon qna"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-qna.svg"
                  />
                  <div className="menu-name">문의</div>
                </div>
                <div className="shoftcut-logout">
                  <img
                      className="favicon-logout"
                      alt="Favicon favicon-logout"
                      src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/6570444acd9388f80f7862ad/img/---icon--logout-@2x.png"
                  />
                  <div className="menu-name-2">로그아웃</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mypage-navigation">
            <div className="navigation-status">
              <div className="navigation">
                <div className="title-3">MyPage</div>
                <div className="description">Welcome Setting Page</div>
              </div>
              <div className="navigation-directory">
                <div className="step">Home</div>
                <div className="text-wrapper-5"></div>
                <div className="step">MyPage</div>
              </div>
            </div>
            <div className="navbar">
              <div className="my-information">나의 정보</div>
              <div className="text-wrapper-6">나의 미션</div>
              <div className="text-wrapper-6">나의 모임</div>
              <div className="text-wrapper-6">나의 펀딩</div>
            </div>
          </div>
          <div className="mypage-header-wrap">
            <div className="header-search">
              <div className="text-wrapper-7">Search Here</div>
              <img
                  className="search"
                  alt="Search"
                  src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/search.png"
              />
            </div>
            <div className="header-shortcut">
              <img
                  className="vector-2"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/vector-1.svg"
              />
              <img
                  className="icon-bell"
                  alt="Icon bell"
                  src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/---icon--bell-@2x.png"
              />
              <img
                  className="element"
                  alt="Element"
                  src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/----3-1@2x.png"
              />
            </div>
          </div>
          <div className="mypage-footer-wrap">
            <div className="footer-logo-image">
              <img
                  className="logo-image"
                  alt="Logo image"
                  src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/logo-image.png"
              />
            </div>
            <div className="footer-shortcut">
              <div className="text-wrapper-8">이용안내</div>
              <div className="text-wrapper-8">공지사항</div>
              <div className="text-wrapper-8">Q&amp;A</div>
              <div className="text-wrapper-8">이용약관</div>
              <p className="privacy-notice">개인정보 수집 및 이용 동의</p>
            </div>
            <div className="button-contact-us">
              <div className="contact-us">문의하기</div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default App;
