import React, {useEffect, useState} from 'react';
import "./MypageMyinfoEdit.css";
import PropTypes from "prop-types";
import Axios from "axios";

export const MypageMyinfoEdit = ({ className, buttonCancelClassName }) => {

    const [member, setMember] = useState("");

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                console.log(response.data);
                setMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    return (
        <div className={`mypage-my-info-edit ${className}`}>
            <div className="edit-wrap">
                <div className="mypage-my-info-edit-2">
                    <div className="button-area">
                        <div className="button-continue">
                            <div className="continue">확인</div>
                        </div>
                        <div className="button-cancel">
                            <div className="cancel">취소</div>
                        </div>
                    </div>
                    <div className="user-unregister">
                        <p className="guide">탈퇴를 원하시면 우측의 회원탈퇴 버튼을 눌러주세요.</p>
                        <div className="button-user">
                            <div className="overlap-group-2">
                                <div className="button" />
                                <div className="user-unregister-2">회원탈퇴</div>
                            </div>
                        </div>
                    </div>
                    <div className="my-info-detail">
                        <div className="my-info-detail-table">
                            <div className="overlap-group-3">
                                <div className="rectangle" />
                                <img
                                    className="line"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-67.svg"
                                />
                                <img
                                    className="img"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-66.svg"
                                />
                                <img
                                    className="line-2"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-65.svg"
                                />
                                <img
                                    className="line-3"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-66.svg"
                                />
                                <img
                                    className="line-4"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-64.svg"
                                />
                                <img
                                    className="line-5"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-66.svg"
                                />
                                <img
                                    className="line-6"
                                    alt="Line"
                                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/line-67.svg"
                                />
                            </div>
                        </div>
                        <div className="my-info-detail-2">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">수신 설정</div>
                            </div>
                            <div className="table-data-receive">
                                <div className="receive-set-check">
                                    <div className="mark-check">
                                        <img
                                            className="vector"
                                            alt="Vector"
                                            src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/vector.svg"
                                        />
                                    </div>
                                    <div className="flexcontainer">
                                        <p className="text">
                          <span className="span">
                            마케팅 및 이벤트 목적의 개인정보 수집 및 이용 동의함
                            <br />
                          </span>
                                        </p>
                                        <p className="text">
                                            <span className="span">23.05.19 전문보기</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="receive-set-check-2">
                                    <img
                                        className="mark-check-2"
                                        alt="Mark check"
                                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/657a6e122b273e23cc76b3ca/img/mark-check.svg"
                                    />
                                    <p className="gide">
                                        푸시 알림을 받으려면 고객 기기에 알림을 허용해주세요.
                                        <br />위 항목을 모두 동의해야 맞춤 광고를 받을 수 있습니다.
                                    </p>
                                    <div className="flexcontainer-2">
                                        <p className="text">
                          <span className="span">
                            광고성 정보 수신 동의함 23.05.19 <br />
                          </span>
                                        </p>
                                        <p className="text">
                                            <span className="span">(SMS,MMS 이메일 푸시 알림) 전문보기</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-info-detail-3">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">비밀번호 변경</div>
                            </div>
                            <div className="table-data-password">
                                <div className="my-info-detail-4">
                                    <div className="input" />
                                    <div className="password-as-is">현재 비밀번호</div>
                                </div>
                                <div className="my-info-detail-5">
                                    <div className="input" />
                                    <div className="text-wrapper-3">새 비밀번호</div>
                                </div>
                                <div className="my-info-detail-5">
                                    <div className="input" />
                                    <div className="password-to-be-check">비밀번호 다시 입력</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-info-detail-6">
                            <div className="div-wrapper-2">
                                <div className="mobile-number">휴대폰 번호</div>
                            </div>
                            <div className="table-data-mobile">
                                <p className="text-wrapper-3">{member.phone}</p>
                            </div>
                        </div>
                        <div className="my-info-detail-7">
                            <div className="div-wrapper-2">
                                <div className="profile-image">프로필 사진</div>
                            </div>
                            <div className="table-data-profile">
                                <div className="my-info-detail-8" />
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-4">
                                        <div className="button-2" />
                                        <div className="edit">수정</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-info-detail-email">
                            <div className="table-header-email">
                                <div className="email">이메일</div>
                            </div>
                            <div className="name-2">{member.email}</div>
                        </div>
                        <div className="my-info-detail-name">
                            <div className="table-header-name">
                                <div className="name">이름</div>
                            </div>
                            <div className="table-data-name">
                                <div className="name-2">{member.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="my-info-edit">
                        <div className="title">회원정보 수정</div>
                        <p className="description">회원님의 정보를 수정, 확인하실 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MypageMyinfoEdit.propTypes = {
    className: PropTypes.string.isRequired,
    buttonCancelClassName: PropTypes.string.isRequired,
};
