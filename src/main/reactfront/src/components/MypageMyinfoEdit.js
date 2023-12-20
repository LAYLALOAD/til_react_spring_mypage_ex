import React, { useState, useEffect } from 'react';
import "./MypageMyinfoEdit.css";
import PropTypes from "prop-types";
import Axios from "axios";

export const MypageMyinfoEdit = ({ className }) => {

    // 초기 상태 설정
    const [updatedMember, setUpdatedMember] = useState({
        name: '',
        email: '',
        profile: '',
        phone: '',
        passwordasis: '',
        passwordtobe: '',
        passwordcheck: ''
    })
    const [passwordError, setPasswordError] = useState('');
    const [uploadedImage, setUploadedImage] = useState(false);
    const [ file, setFile ] = useState(null);
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [ msg, setMsg ] = useState(null);

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                setUpdatedMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    // image upload test
    function handleUpload() {
        if (!file) {
            setMsg("선택된 파일이 없습니다.")
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        setMsg("업로드 중...");
        setProgress(prevStatus => {
            return{...prevStatus, started: true}
        })

        Axios.post('http://localhost:8080/api/update/1', fd, {
            onUploadProgress: (progressEvent) => { setProgress(prevStatus => {
                return { ...prevStatus, pc: progressEvent.progress*100 }
            }) },
            header: {
                "Custom-Header": "value",
            }
        })
            .then(res => {
                setMsg("업로드 성공");
                console.log(res.data);
            })
            .catch(err => {
                setMsg("업로드 실패 ");
                console.error(err)
            });
    }


    // 프로필 이미지 변경 이벤트 핸들러 함수
    const handleProfileImageChange = async () => {
        try {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.click();

            fileInput.addEventListener('change', async (event) => {
                const file = event.target.files[0];

                const formData = new FormData();
                formData.append('profileImage', file);

                const apiUrl = 'http://localhost:8080/api/upload-profile-image';
                const response = await Axios.post(apiUrl, formData);

                // 서버에서 반환된 이미지 경로를 상태에 업데이트합니다.
                setUpdatedMember({
                    ...updatedMember,
                    profile: response.data.imagePath,
                });

                // 업로드 상태를 true로 설정합니다.
                setUploadedImage(true);
            });
        } catch (error) {
            console.error('프로필 이미지 변경에 실패했습니다.', error);
        }
    };

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
            const apiUrl = 'http://localhost:8080/api/unregister/1';

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

                                <div style={{position:'absolute', width:'500px', height:'500px', top:'1000px'}}>
                                    <h1>프로필 사진 올리기 연습</h1>
                                    <input
                                        onChange={ (e) => { setFile(e.target.files[0]) } }
                                        type="file"
                                        name="profile"
                                    />
                                    <button onClick={ handleUpload }>업로드</button>
                                    { progress.started && <progress max="100" value={progress.pc}></progress> }
                                    { msg && <span>{msg}</span> }
                                </div>

                                {uploadedImage ? (
                                    // 서버에서 반환된 이미지 경로를 사용하여 수정된 이미지를 표시
                                    <img
                                        src={`http://localhost:8080/${updatedMember.profile}`}
                                        alt="profileimg"
                                        className='my-info-detail-8'
                                    />
                                ) : (
                                    // 이미지 업로드 전 기본 프로필
                                    <img
                                        src={`http://localhost:8080/${updatedMember.profile}`}
                                        alt="profileimg"
                                        className='my-info-detail-8'
                                    />
                                )}
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-4">
                                    {uploadedImage ? null : (
                                        <div className="button-2" onClick={handleProfileImageChange} />
                                    )}
                                    <div className="edit" onClick={handleProfileImageChange}>
                                        {uploadedImage ? '취소' : '수정'}
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
                                    value={updatedMember.passwordasis}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-info-detail-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호"
                                    value={updatedMember.passwordtobe}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-info-detail-5">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="비밀번호 다시 입력"
                                    value={updatedMember.passwordcheck}
                                    onChange={handleInputChange}
                                    onBlur={validatePassword}
                                />
                            </div>
                        </div>
                    </div>
                    {/* 수신설정*/}
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
                        <div className="button-cancel">
                            <div className="cancel">취소</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MypageMyinfoEdit.propTypes = {
    className: PropTypes.string.isRequired
};
