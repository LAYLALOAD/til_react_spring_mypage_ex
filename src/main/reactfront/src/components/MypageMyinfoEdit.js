import React, { useState, useEffect } from 'react';
import "./MypageMyinfoEdit.css";
import PropTypes from "prop-types";
import Axios from "axios";

export const MypageMyinfoEdit = ({ className, buttonCancelClassName }) => {

    // 초기 상태 설정
    const [updatedMember, setUpdatedMember] = useState({
        name: '',
        email: '',
        profile: '',
        phone: '',
        passwordAsis: '',
        passwordTobe: '',
        passwordTobeCheck: '',
    })
    const [passwordError, setPasswordError] = useState('');
    const [isEditingProfile, setIsEditingProfile] = useState(false);


    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                console.log(response.data);
                setUpdatedMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    // 새 비밀번호와 비밀번호 확인이 일치하는지 검증하는 함수입니다.
    // 일치하지 않으면 오류 메시지를 설정하고, 일치하면 오류 메시지를 초기화합니다.
    const validatePassword = () => {
        const { newPassword, confirmPassword } = updatedMember;

        if (newPassword !== confirmPassword) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
        } else {
            setPasswordError('');
        }
    };

    // 입력 필드 값이 변경될 때 호출되는 핸들러 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMember({
            ...updatedMember,
            [name]: value,
        });
    };

    // 프로필 이미지 변경 이벤트 핸들러 함수
    const handleProfileImageChange = () => {
        setIsEditingProfile(true);
        // 여기에서 프로필 이미지를 변경할 수 있는 모달 또는 다른 UI를 표시할 수 있습니다.
        // 여기에서는 간단한 경고창을 표시합니다.
        alert('프로필 이미지를 변경할 수 있는 모달 또는 다른 UI를 표시합니다.');
    };


    // 회원 정보 수정 요청을 서버로 보내는 함수
    const handleUpdateMember = async () => {
        try {
            validatePassword();

            if (passwordError) {
                console.error('비밀번호가 일치하지 않습니다.');
                return;
            }

            // 여기에 회원 정보 업데이트 API 엔드포인트를 넣어주세요
            const apiUrl = 'http://localhost:8080/api/mypage/update';

            // Axios를 사용하여 서버로 회원 정보 업데이트 요청 보내기
            const response = await Axios.put(apiUrl, updatedMember);

            // 성공적으로 업데이트
            console.log('회원 정보가 성공적으로 업데이트되었습니다.', response.data);
        } catch (error) {
            // 에러 발생
            console.error('회원 정보 업데이트에 실패했습니다.', error);
        }
    };

    // 회원 탈퇴 요청을 서버로 보내는 함수
    const handleUnregister = async () => {
        try {
            // 여기에 회원 탈퇴 API 엔드포인트를 넣어주세요
            const apiUrl = 'http://localhost:8080/api/mypage/unregister';

            // Axios를 사용하여 서버로 회원 탈퇴 요청 보내기
            const response = await Axios.delete(apiUrl);

            // 성공적으로 탈퇴되면 적절한 처리를 수행하세요
            console.log('회원 탈퇴가 성공적으로 처리되었습니다.', response.data);

            // 여기에서 적절한 리다이렉션 또는 로그아웃 등의 동작을 수행할 수 있습니다.
        } catch (error) {
            // 에러가 발생하면 적절한 처리를 수행하세요
            console.error('회원 탈퇴에 실패했습니다.', error);
        }
    };

    return (
        <div className={`mypage-my-info-edit ${className}`}>
            <div className="edit-wrap">
                <div className="mypage-my-info-edit-2">

                    <div className="my-info-edit">
                        <div className="title">회원정보 수정</div>
                        <p className="description">회원님의 정보를 수정, 확인하실 수 있습니다.</p>
                    </div>

                    <div className="my-info-detail">
                        <div className="my-info-detail-name">
                            <div className="table-header-name">
                                <div className="name">이름</div>
                            </div>
                            <div className="table-data-name">
                                <input
                                    type="text"
                                    name="name"
                                    value={updatedMember.name}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-info-detail-7">
                        <div className="div-wrapper-2">
                            <div className="email">이메일</div>
                        </div>
                        <div className="table-data-name">
                            <input
                                type="text"
                                name="email"
                                value={updatedMember.email}
                                onChange={handleInputChange}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="my-info-detail-9">
                        <div className="div-wrapper-2">
                            <div className="profile-image">프로필 사진</div>
                        </div>
                        <div className="table-data-profile">
                            <div>
                                {isEditingProfile ? (
                                    // 프로필 이미지 변경 중일 때의 UI 또는 모달을 여기에 추가할 수 있습니다.
                                    // 여기에서는 간단한 예시로 경고 메시지만 표시합니다.
                                    <p>프로필 이미지를 변경 중입니다...</p>
                                ) : (
                                    <img
                                        src={`/${updatedMember.profile}`}
                                        alt="profileimg"
                                        className='my-info-detail-8'
                                    />
                                )}
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-4">
                                    {isEditingProfile ? null : (
                                        // 프로필 이미지 변경 중이 아닐 때만 수정 버튼을 표시합니다.
                                        <div className="button-2" onClick={handleProfileImageChange} />
                                    )}
                                    <div className="edit" onClick={handleProfileImageChange}>
                                        {isEditingProfile ? '취소' : '수정'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-info-detail-6">
                        <div className="div-wrapper-2">
                            <div className="mobile-number">휴대폰 번호</div>
                        </div>
                        <div className="table-data-mobile">
                            <input
                                type="text"
                                name="phone"
                                value={updatedMember.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="my-info-detail-3">
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">비밀번호 변경</div>
                        </div>
                        <div className="table-data-password">
                            <div className="my-info-detail-4">
                                <input
                                    type="password"
                                    name="currentPassword"
                                    placeholder="현재 비밀번호"
                                    value={updatedMember.currentPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-info-detail-5">
                                <input
                                    type="password"
                                    name="newPassword"
                                    placeholder="새 비밀번호"
                                    value={updatedMember.newPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-info-detail-5">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="비밀번호 다시 입력"
                                    value={updatedMember.confirmPassword}
                                    onChange={handleInputChange}
                                    onBlur={validatePassword}
                                />
                            </div>
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
                    <div className="user-unregister">
                        <p className="guide">탈퇴를 원하시면 우측의 회원탈퇴 버튼을 눌러주세요.</p>
                        <div className="button-user" onClick={handleUnregister}>
                            <div className="overlap-group-2">
                                <button className="user-unregister-2">회원탈퇴</button>
                            </div>
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="button-continue" onClick={handleUpdateMember}>
                            <div className="continue">확인</div>
                        </div>
                        <div className={`button-cancel ${buttonCancelClassName}`}>
                            <div className="cancel">취소</div>
                        </div>
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
